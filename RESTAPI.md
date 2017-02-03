# Scenario DataService for Compass Test Automation
[Readme](README.md) | [Rest API](RESTAPI.md) | [DataModel](DATAMODEL.md) | [DataContract](DATACONTRACT.md) | [Document](DOCUMENTATION.md)

##Application Program Interface

**Rest API**

* [Create an Scenario](#create-an-scenario)
* [Find an Scenario by Id](#find-an-scenario-by-id)
* [Update an Scenario](#update-an-scenario)
* [Delete an Scenario](#delete-an-scenario)
* [Cancel an Scenario](#cancel-an-scenario)

#### Create a [Scenario](DATAMODEL.md)
**Request**
```javasript
POST /scenarios
{
  "name" : "foo",
  "description": "bar",
  "testSuiteId": "583d40c9f761143530838ca7",
  "configurationId": "583d40c9f761143530838ca8",
  "pendingTimeout": 20000,
  "runningTimeout": 20000
}
```
```javasript
PUT /scenarios/:id
{
  "name" : "foo",
  "description": "bar",
  "testSuiteId": "583d40c9f761143530838ca7",
  "configurationId": "583d40c9f761143530838ca8",
  "pendingTimeout": 20000,
  "runningTimeout": 20000
}
```
**Response**
```javasript
201 Created
{
  "id": "581995b77a784529a0f5eadb",
  "name" : "foo",
  "description": "bar",
  "testSuiteId": "583d40c9f761143530838ca7",
  "configurationId": "583d40c9f761143530838ca8",
  "pendingTimeout": 20000,
  "runningTimeout": 20000
}
```
```javasript
400 Bad Request
incorrect 'description' in job payload: missing required element
```

#### Create a [Scenario] with full body (DATAMODEL.md)
```javascript
POST /scenarios
{
  "name" : "an oss scenario 1.0.0",
  "description" : "test scenario",
  "scopetested" : "",
  "pendingTimeout" : 300000.0,
  "runningTimeout" : 300000.0,
  "schedule" : "*/3 * * * *",
  "scheduled" : true,
  "testSuite" : {
    "id" : "57e0e3ff7f256e3368cc4ecb",
    "name" : "sleep suite",
    "tests" : [
      {
        "id" : "57e0e3ff7f256e3368cc4ecb",
        "name" : "sleep",
        "description" : "sleeping test",
        "type" : "commandLine",
        "stages" : [
          {
            "name" : "stage",
            "run" : "echo sleep; sleep 3",
            "stop" : "echo wakeup",
            "cwd" : ".",
            "mandatory" : true,
            "timeout" : 300000
          }
        ]
      },
      {
        "id" : "57e0e3ff7f256e3368cc4ecc",
        "name" : "dream",
        "description" : "dreaming test",
        "type" : "commandLine",
        "stages" : [
          {
            "name" : "stage",
            "run" : "echo dream",
            "stop" : "echo wakeup",
            "cwd" : ".",
            "mandatory" : true,
            "timeout" : 300000
          }
        ]
      }
    ]
  },
  "configuration" : {
    "id" : "57e0e3ff7f256e3368cc4ecb",
    "name" : "u0119273 mono",
    "targetMode" : "normal",
    "runMode" : "mono",
    "type" : "physical",
    "properties" : {
      "hostname" : "u0119273"
    }
  },
  "testSuiteId" : "57e0e3ff7f256e3368cc4ecb",
  "afterHandlers" : [
    {
      "id" : "5885f250f7ea75ea00071320",
      "name" : "nitrus",
      "type" : "email",
      "enabled" : true,
      "properties" : {
        "emails" : [
          "cta@thomsonreuters.com"
        ]
      }
    }
  ]
}
```
```javascript
PUT /scenarios/:id
{
  "name" : "an oss scenario 1.0.0",
  "description" : "test scenario",
  "scopetested" : "",
  "pendingTimeout" : 300000.0,
  "runningTimeout" : 300000.0,
  "schedule" : "*/3 * * * *",
  "scheduled" : true,
  "testSuite" : {
    "id" : "57e0e3ff7f256e3368cc4ecb",
    "name" : "sleep suite",
    "tests" : [
      {
        "id" : "57e0e3ff7f256e3368cc4ecb",
        "name" : "sleep",
        "description" : "sleeping test",
        "type" : "commandLine",
        "stages" : [
          {
            "name" : "stage",
            "run" : "echo sleep; sleep 3",
            "stop" : "echo wakeup",
            "cwd" : ".",
            "mandatory" : true,
            "timeout" : 300000
          }
        ]
      },
      {
        "id" : "57e0e3ff7f256e3368cc4ecc",
        "name" : "dream",
        "description" : "dreaming test",
        "type" : "commandLine",
        "stages" : [
          {
            "name" : "stage",
            "run" : "echo dream",
            "stop" : "echo wakeup",
            "cwd" : ".",
            "mandatory" : true,
            "timeout" : 300000
          }
        ]
      }
    ]
  },
  "configuration" : {
    "id" : "57e0e3ff7f256e3368cc4ecb",
    "name" : "u0119273 mono",
    "targetMode" : "normal",
    "runMode" : "mono",
    "type" : "physical",
    "properties" : {
      "hostname" : "u0119273"
    }
  },
  "testSuiteId" : "57e0e3ff7f256e3368cc4ecb",
  "afterHandlers" : [
    {
      "id" : "5885f250f7ea75ea00071320",
      "name" : "nitrus",
      "type" : "email",
      "enabled" : true,
      "properties" : {
        "emails" : [
          "cta@thomsonreuters.com"
        ]
      }
    }
  ]
}
```
Respond
```javascript
201: Created
{
  "name": "an oss scenario 1.0.0",
  "description": "test scenario",
  "testSuiteId": "57e0e3ff7f256e3368cc4ecb",
  "testSuite": {
    "id": "57e0e3ff7f256e3368cc4ecb",
    "name": "sleep suite",
    "tests": [
      {
        "id": "57e0e3ff7f256e3368cc4ecb",
        "name": "sleep",
        "description": "sleeping test",
        "type": "commandLine",
        "stages": [
          {
            "name": "stage",
            "run": "echo sleep; sleep 3",
            "stop": "echo wakeup",
            "cwd": ".",
            "mandatory": true,
            "timeout": 300000
          }
        ]
      },
      {
        "id": "57e0e3ff7f256e3368cc4ecc",
        "name": "dream",
        "description": "dreaming test",
        "type": "commandLine",
        "stages": [
          {
            "name": "stage",
            "run": "echo dream; open -W -a safari /Users/Shared/yg8DO.gif",
            "stop": "echo wakeup",
            "cwd": ".",
            "mandatory": true,
            "timeout": 300000
          }
        ]
      }
    ]
  },
  "configuration": {
    "name": "u0119273 mono",
    "targetMode": "normal",
    "runMode": "mono",
    "type": "physical",
    "properties": {
      "hostname": "u0119273"
    }
  },
  "pendingTimeout": 300000,
  "runningTimeout": 300000,
  "schedule": "*/3 * * * *",
  "scheduled": true,
  "afterHandlers": [
    {
      "id": "5885f250f7ea75ea00071320",
      "name": "nitrus",
      "type": "email",
      "enabled": true,
      "properties": {
        "emails": [
          "phuttha.kusolkumbot@thomsonreuters.com"
        ]
      }
    }
  ],
  "id": "5848e4e4f6523cbab4d2d4e9"
}
```
```javasript
400 Bad Request
incorrect 'description' in job payload: missing required element
```

#### Run a Scenario by Id
```javascript
GET GET /scenarios/:id/run
```
**Response**
```javasript
200 OK
{
  "result": {
    "queue": "cta.jms",
    "messageCount": 0,
    "consumerCount": 1
  },
  "params": {
    "queue": "cta.jms",
    "content": {
      "nature": {
        "type": "scenarios",
        "quality": "run"
      },
      "payload": {
        "requestTimestamp": 1486128475746,
        "scenario": {
          "name": "an oss scenario 1.0.0",
          "description": "test scenario",
          "testSuiteId": "57e0e3ff7f256e3368cc4ecb",
          "testSuite": {
            "id": "57e0e3ff7f256e3368cc4ecb",
            "name": "sleep suite",
            "tests": [
              {
                "id": "57e0e3ff7f256e3368cc4ecb",
                "name": "sleep",
                "description": "sleeping test",
                "type": "commandLine",
                "stages": [
                  {
                    "name": "stage",
                    "run": "echo sleep; sleep 3",
                    "stop": "echo wakeup",
                    "cwd": ".",
                    "mandatory": true,
                    "timeout": 300000
                  }
                ]
              },
              {
                "id": "57e0e3ff7f256e3368cc4ecc",
                "name": "dream",
                "description": "dreaming test",
                "type": "commandLine",
                "stages": [
                  {
                    "name": "stage",
                    "run": "echo dream; open -W -a safari /Users/Shared/yg8DO.gif",
                    "stop": "echo wakeup",
                    "cwd": ".",
                    "mandatory": true,
                    "timeout": 300000
                  }
                ]
              }
            ]
          },
          "configuration": {
            "name": "u0119273 mono",
            "targetMode": "normal",
            "runMode": "mono",
            "type": "physical",
            "properties": {
              "hostname": "u0119273"
            }
          },
          "pendingTimeout": 300000,
          "runningTimeout": 300000,
          "schedule": "*/3 * * * *",
          "scheduled": true,
          "afterHandlers": [
            {
              "id": "5885f250f7ea75ea00071320",
              "name": "nitrus",
              "type": "email",
              "enabled": true,
              "properties": {
                "emails": [
                  "phuttha.kusolkumbot@thomsonreuters.com"
                ]
              }
            }
          ],
          "id": "5848e4e4f6523cbab4d2d4e9"
        },
        "configuration": {
          "name": "u0119273 mono",
          "targetMode": "normal",
          "runMode": "mono",
          "type": "physical",
          "properties": {
            "hostname": "u0119273"
          }
        },
        "user": {
          "uid": "587c9be41466b02983630ff5",
          "id": "587c9be41466b02983630ff5",
          "last": "u0119273"
        }
      }
    },
    "autoDelete": false,
    "expires": 0,
    "buffer": "none"
  }
}

```javasript
404 Not Found
scenario ':id' not found.
```

#### Find a Scenario by Id
**Request**
```javasript
GET /scenarios/:id
```
**Response**
```javasript
200 OK
{
  "id": "581995b77a784529a0f5eadb",
  "name" : "foo",
  "description": "bar",
  "testSuiteId": "583d40c9f761143530838ca7",
  "configurationId": "583d40c9f761143530838ca8",
  "pendingTimeout": 20000,
  "runningTimeout": 20000
}
```
```javasript
404 Not Found
scenario '583d15189779f63954facfab' not found.
```
```javasript
400 Bad Request
missing/incorrect 'id' String value of ObjectID in job payload
```

#### Update an Scenario
**Request**
```javasript
PATCH /scenarios/:id
{
  "name" : "foobar",
}
```
**Response**
```javasript
200 OK
{
  "id": "581995b77a784529a0f5eadb",
  "name" : "foobar",
  "description": "bar",
  "testSuiteId": "583d40c9f761143530838ca7",
  "configurationId": "583d40c9f761143530838ca8",
  "pendingTimeout": 20000,
  "runningTimeout": 20000
}
```
```javasript
404 Not Found
scenario '583d15189779f63954facfab' not found.
```
```javasript
400 Bad Request
incorrect 'name' in job payload: invalid type for value "[object Object]", expected "string"
```

#### Delete an Scenario
**Request**
```javasript
DELETE /scenarios/:id
```
**Response**
```javasript
200 OK
{
  "id": "581995b77a784529a0f5eadb",
  "name" : "foo",
  "description": "bar",
  "testSuiteId": "583d40c9f761143530838ca7",
  "configurationId": "583d40c9f761143530838ca8",
  "pendingTimeout": 20000,
  "runningTimeout": 20000
}
```
```javasript
404 Not Found
scenario '583d15189779f63954facfab' not found.
```
