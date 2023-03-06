const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImM4MjUxMWJmLWEzMTAtNGMxOC04NGVmLWU2OWNjNzE2NjRiMy0xNjc4MTMxMDc0Njg3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODAzNGU2NjEtMTAxMC00MDg0LThkMjgtY2YxMGRlNjlmOWYxIiwidHlwZSI6InQifQ.EysCbqYAklHTCe2E9pyVO0Gb6Rm0kOYALSkRqlHXgvI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
