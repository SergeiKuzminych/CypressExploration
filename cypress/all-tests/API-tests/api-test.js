import chance from "chance"

describe('S1 API tests', () => {
    it('C30 Positive: Create user', () => {
      cy.fixture('user').then(user => {
        cy.request('POST', '/api/users', user).then(response => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.property('name', user.name)
          expect(response.body).to.have.property('job', user.job)
        })
      })
    })

    let testingData = [
      {
        description: "Max values",
        requestData: {
          name: chance().string({length: 100}),
          job: chance().string({length: 100})
        }
      },
      {
        description: "Min values",
        requestData: {
          name: chance().string({length: 1}),
          job: chance().string({length: 1})
        }
      }
    ]

    testingData.forEach(({description, requestData}) => {
      it(`C31 Positive: Create user ${description}`, () => {
        cy.request('POST', '/api/users', requestData).then(response => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.property('name', requestData.name)
          expect(response.body).to.have.property('job', requestData.job)
        })
      })
    })
    
    it('C32 Negative: POST request - login unsuccessful', () => {
      cy.request({method: 'POST', url:'/api/login', failOnStatusCode: false, body: {
        "email":"peter@klaven"
      }}).then(response => {
        expect(response.status).to.eq(400)
      })
    })
})