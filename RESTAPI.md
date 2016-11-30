# Scenario DataService for Compass Test Automation
[Readme](README.md) | [Rest API](RESTAPI.md) | [DataModel](DATAMODEL.md) | [DataContract](DATACONTRACT.md) | [Document](DOCUMENTATION.md)

##Application Program Interface

**Rest API**

* [Create an Scenario](#create-an-scenario)
* [Find an Scenario by Id](#find-an-scenario-by-id)
* [Update an Scenario](#update-an-scenario)
* [Delete an Scenario](#delete-an-scenario)
* [Cancel an Scenario](#cancel-an-scenario)

#### Create an [Scenario](DATAMODEL.md)
**Request**
```ruby
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
```ruby
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
```ruby
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
```ruby
400 Bad Request
incorrect 'description' in job payload: missing required element
```

#### Find a Scenario by Id
**Request**
```ruby
GET /scenarios/:id
```
**Response**
```ruby
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
```ruby
404 Not Found
scenario '583d15189779f63954facfab' not found.
```
```ruby
400 Bad Request
missing/incorrect 'id' String value of ObjectID in job payload
```

#### Update an Scenario
**Request**
```ruby
PATCH /scenarios/:id
{
  "name" : "foobar",
}
```
**Response**
```ruby
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
```ruby
404 Not Found
scenario '583d15189779f63954facfab' not found.
```
```ruby
400 Bad Request
incorrect 'name' in job payload: invalid type for value "[object Object]", expected "string"
```

#### Delete an Scenario
**Request**
```ruby
DELETE /scenarios/:id
```
**Response**
```ruby
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
```ruby
404 Not Found
scenario '583d15189779f63954facfab' not found.
```
