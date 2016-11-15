# Scenario DataService for Compass Test Automation
[Readme](./../README.md) | [Rest API](RESTAPI.md) | [DataModel](DATAMODEL.md) | [DataContract](DATACONTRACT.md) | [Document](DOCUMENTATION.md)

##Application Program Interface

**Rest API**

Create a Scenario
Request

- /scenarios
	- GET : returns all scenarios from current user and his groups
	    returns
	     - 200, [scenarios](DATAMODEL.md#Scenario)
	     - 400, not found
	     - 401, not found for a user
	- POST : creates the scenario and returns the updated scenario or 400 if incorrect scenario or 401
- /scenarios/id
	- GET : returns the scenario matching this id or 404 if unknown scenario
	- POST : updates the given scenario or 404 if unknown scenario or 400 if incorrect
	- DELETE
- /scenarios/id/execution
	- POST : runs a scenario
- /testsuites
	- GET : returns all testsuites from current user and his groups, if no user then 401
	- POST : creates the testsuite and returns it or 400 or 401
- /testsuites/id
	- GET : retuns the testsuites matching this id or 404 if unknown testsuites
	- POST : update the testsuites
	- DELETE
- /testsuites/id/tests
	- GET : returns the tests associated with the testsuite id or 404 if unknown testsuites
	- POST : add a test to the testsuite and returns it or 400 or 401
- /testsuites/id/tests/id
	- GET : returns the test matching this id
	- POST : updates the test matching this id
	- DELETE
... and more to follow



