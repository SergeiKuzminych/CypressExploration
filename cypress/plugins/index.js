/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars




module.exports = (on, config) => {
  
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('after:spec', async function (spec, results) {
    //import fetch from 'node-fetch';
    const fetch = require('node-fetch');
		let base64 = require('base-64');
		const fs = require('fs')
		const CYPRESS_CONFIG = fs.readFileSync(`./cypress.json`, 'utf8')
		const REPORTER_OPTIONS = JSON.parse(CYPRESS_CONFIG).reporterOptions
		const TEST_RAIL_PASSWORD = REPORTER_OPTIONS.password,
			TEST_RAIL_LOGIN = REPORTER_OPTIONS.username,
			TEST_RAIL_DOMAIN = REPORTER_OPTIONS.host;

		let obj = {results: []}
			results.tests.forEach(test => {
				let caseId = titleToCaseIds(test.title[1])
				let status = test.state == 'passed' ? 1 :
					test.state == 'failed' ? 5 :
						test.state == 'untested' ? 3 :
							test.state == 'blocked' ? 2 :
								test.state == 'retest' ? 4 : ''
				let result = {case_id: `${caseId}`, status_id: `${status}`}
				obj.results.push(result)
			})
			const testRunId = REPORTER_OPTIONS.testRunId
			const URL = `${TEST_RAIL_DOMAIN}/index.php?/api/v2/add_results_for_cases/${testRunId}`
			let body = {
				method: 'POST',
				headers: new fetch.Headers({
					'Authorization': 'Basic ' + base64.encode(TEST_RAIL_LOGIN + ":" + TEST_RAIL_PASSWORD),
					'Content-Type': 'application/json;charset=utf-8'
				}),
				body: JSON.stringify(obj)
			}
			try {
				const response = await fetch(URL, body)
				const posts = await response.text();
				console.log(body)
				console.log(posts)
			} catch (e) {
				return console.error(e);
			}
		

		function titleToCaseIds(title) {
			var caseIds = []
			var testCaseIdRegExp = /\bT?C(\d+)\b/g
			var m
			while ((m = testCaseIdRegExp.exec(title)) !== null) {
				var caseId = parseInt(m[1])
				caseIds.push(caseId)
			}
			return caseIds
		}
	})
}
