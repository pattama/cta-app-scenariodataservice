# Scenario
[creation](#creation)

## creation:
```javascript
{
    "id": String,
    "nature": {
        "type": "scenario",
        "quality": "creation"
      },
    "payload": {
        "id": String
        "name": String
        "description": String
        "scopetested": String
        "testsuiteId": id(TestSuite)
        "configurationId": id(Configuration)
        "pendingtimeout": Long
        "runningtimeout": Long
        "schedule": String
        "scheduled": Boolean
        "afterhandlers": [id(AfterHandlers)]
    }
}
```