# Scenario DataService for Compass Test Automation
[Readme](README.md) | [Rest API](RESTAPI.md) | [DataModel](DATAMODEL.md) | [DataContract](DATACONTRACT.md) | [Document](DOCUMENTATION.md)

# Scenarios DataModel
[Scenario](#Scenario)
[TestSuite](#TestSuite)
[Test](#Test)
[Repository](#Repository)
<a name=Scenario></a>
## Scenario
+ id: id
+ name: String
+ description: String
+ scopetested: String,
+ testsuiteId: id(TestSuite)
+ configurationId: id(Configuration)
+ pendingtimeout: Long
+ runningtimeout: Long
+ schedule: String
+ scheduled: Boolean
+ afterhandlers: [id(AfterHandler)]

<a name=TestSuite></a>
## TestSuite
+ id: id
+ name: String
+ tests: [id(Test)]
+ applicationTested: String
+ framework: String
+ enabled : Boolean
+ inputRepositories: [id(Repository)]
+ outputRepositories: [id(Repository)]

<a name=Test></a>
## Test
+ id: id
+ name: String
+ description: String
+ featureTested: String
+ type:String, i.e.: command-line, manual, etc...
+ parent: id(TestSuite)
+ enabled : Boolean
- stages: [{
    name: String,
    run: String,
    stop: String,
    cwd: String,
    env: [{key: String, value:String},]
    mandatory: Boolean,
    timeout: Int ,
    stopTimeout: Int,
    },]

<a name=Repository></a>
## Repository
+ type: String, i.e.: git, svn, s3, local
+ url: String
+ mountpoint: String
