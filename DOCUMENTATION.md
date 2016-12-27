# Scenario DataService for Compass Test Automation
[Readme](README.md) | [Rest API](RESTAPI.md) | [DataModel](DATAMODEL.md) | [DataContract](DATACONTRACT.md) | [Document](DOCUMENTATION.md)


## Classes

<dl>
<dt><a href="#BaseHelper">BaseHelper</a></dt>
<dd><p>Business Logic Helper Base class</p>
</dd>
<dt><a href="#Create">Create</a> ⇐ <code><a href="#BaseHelper">BaseHelper</a></code></dt>
<dd><p>Business Logic Scenario Helper Create class</p>
</dd>
<dt><a href="#Delete">Delete</a> ⇐ <code><a href="#BaseHelper">BaseHelper</a></code></dt>
<dd><p>Business Logic Scenario Helper Delete class</p>
</dd>
<dt><a href="#Find">Find</a> ⇐ <code><a href="#BaseHelper">BaseHelper</a></code></dt>
<dd><p>Business Logic Execution Helper Find class</p>
</dd>
<dt><a href="#FindById">FindById</a> ⇐ <code><a href="#BaseHelper">BaseHelper</a></code></dt>
<dd><p>Business Logic Execution Helper FindById class</p>
</dd>
<dt><a href="#Update">Update</a> ⇐ <code><a href="#BaseHelper">BaseHelper</a></code></dt>
<dd><p>Business Logic Execution Helper Update class</p>
</dd>
<dt><a href="#Base">Base</a> ⇐ <code>Brick</code></dt>
<dd><p>Business Logic Base class</p>
</dd>
<dt><a href="#Run">Run</a> ⇐ <code><a href="#BaseHelper">BaseHelper</a></code></dt>
<dd><p>Business Logic Execution Helper FindById class</p>
</dd>
<dt><a href="#Scenarios">Scenarios</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Business Logic Scenario class</p>
</dd>
<dt><a href="#BaseDBInterfaceHelper">BaseDBInterfaceHelper</a></dt>
<dd><p>Database Interface Helper Base class</p>
</dd>
<dt><a href="#BaseDBInterface">BaseDBInterface</a> ⇐ <code>Brick</code></dt>
<dd><p>Database Interface Base class</p>
</dd>
<dt><a href="#BaseMongoDBHelper">BaseMongoDBHelper</a> ⇐ <code><a href="#BaseMongoDBHelper">BaseMongoDBHelper</a></code></dt>
<dd><p>Database Interface MongoDB Helper Base class</p>
</dd>
<dt><a href="#DeleteOne">DeleteOne</a> ⇐ <code><a href="#BaseMongoDBHelper">BaseMongoDBHelper</a></code></dt>
<dd><p>Database Interface MongoDB Helper DeleteOne class</p>
</dd>
<dt><a href="#Find">Find</a> ⇐ <code><a href="#BaseMongoDBHelper">BaseMongoDBHelper</a></code></dt>
<dd><p>Database Interface MongoDB Helper Find class</p>
</dd>
<dt><a href="#FindById">FindById</a> ⇐ <code><a href="#BaseMongoDBHelper">BaseMongoDBHelper</a></code></dt>
<dd><p>Database Interface MongoDB Helper FindById class</p>
</dd>
<dt><a href="#InsertOne">InsertOne</a> ⇐ <code><a href="#BaseMongoDBHelper">BaseMongoDBHelper</a></code></dt>
<dd><p>Database Interface MongoDB Helper InsertOne class</p>
</dd>
<dt><a href="#UpdateOne">UpdateOne</a> ⇐ <code><a href="#BaseMongoDBHelper">BaseMongoDBHelper</a></code></dt>
<dd><p>Database Interface MongoDB Helper UpdateOne class</p>
</dd>
<dt><a href="#MongoDBInterface">MongoDBInterface</a> ⇐ <code><a href="#BaseDBInterface">BaseDBInterface</a></code></dt>
<dd><p>Database Interface MongoDB class</p>
</dd>
<dt><a href="#BaseSchema">BaseSchema</a></dt>
<dd><p>Base Schema for MongoDB class</p>
</dd>
<dt><a href="#ScenarioSchema">ScenarioSchema</a></dt>
<dd><p>Execution Schema for MongoDB class</p>
</dd>
<dt><a href="#Configuration">Configuration</a></dt>
<dd><p>Configuration Data Model class</p>
</dd>
<dt><a href="#DataModel">DataModel</a></dt>
<dd><p>Based Class for all DataModels</p>
</dd>
<dt><a href="#Repository">Repository</a></dt>
<dd><p>Repository Data Model class</p>
</dd>
<dt><a href="#Scenarios">Scenarios</a></dt>
<dd><p>Scenario Data Model class</p>
</dd>
<dt><a href="#Test">Test</a></dt>
<dd><p>Tests Data Model class</p>
</dd>
<dt><a href="#TestSuite">TestSuite</a></dt>
<dd><p>TestSuite Data Model class</p>
</dd>
<dt><a href="#RestCRUD">RestCRUD</a></dt>
<dd><p>Handler class for RESTAPI handlers</p>
</dd>
<dt><a href="#ScenariosHandler">ScenariosHandler</a></dt>
<dd><p>Handler class for RESTAPI handlers : RESULTS</p>
</dd>
<dt><a href="#TestsHandler">TestsHandler</a></dt>
<dd><p>Handler class for RESTAPI handlers : RESULTS</p>
</dd>
<dt><a href="#TestSuitesHandler">TestSuitesHandler</a></dt>
<dd><p>Handler class for RESTAPI handlers : RESULTS</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#fields">fields</a> : <code>Object</code></dt>
<dd><p>Configuration Data Model fields</p>
</dd>
<dt><a href="#fields">fields</a></dt>
<dd><p>Repository Data Model fields</p>
</dd>
<dt><a href="#fields">fields</a> : <code>Object</code></dt>
<dd><p>Scenario Data Model fields</p>
</dd>
<dt><a href="#fields">fields</a></dt>
<dd><p>Test Data Model fields</p>
</dd>
<dt><a href="#fields">fields</a></dt>
<dd><p>Scenario Data Model fields</p>
</dd>
</dl>

<a name="BaseHelper"></a>

## BaseHelper
Business Logic Helper Base class

**Kind**: global class
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [BaseHelper](#BaseHelper)
    * [new BaseHelper(cementHelper, logger)](#new_BaseHelper_new)
    * *[._validate(context)](#BaseHelper+_validate) ⇒ <code>Promise</code>*
    * *[._process(context)](#BaseHelper+_process) ⇒ <code>Context</code>*
    * [._ack(context)](#BaseHelper+_ack)

<a name="new_BaseHelper_new"></a>

### new BaseHelper(cementHelper, logger)
constructor - Create a new Business Logic Helper Base instance


| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |

<a name="BaseHelper+_validate"></a>

### *baseHelper._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper

**Kind**: instance abstract method of <code>[BaseHelper](#BaseHelper)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_process"></a>

### *baseHelper._process(context) ⇒ <code>Context</code>*
Process the context

**Kind**: instance abstract method of <code>[BaseHelper](#BaseHelper)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### baseHelper._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[BaseHelper](#BaseHelper)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="Create"></a>

## Create ⇐ <code>[BaseHelper](#BaseHelper)</code>
Business Logic Scenario Helper Create class

**Kind**: global class
**Extends:** <code>[BaseHelper](#BaseHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [Create](#Create) ⇐ <code>[BaseHelper](#BaseHelper)</code>
    * *[._validate(context)](#Create+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Create+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="Create+_validate"></a>

### *create._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Scenario Model fields

**Kind**: instance abstract method of <code>[Create](#Create)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Create+_process"></a>

### create._process(context)
Process the context

**Kind**: instance method of <code>[Create](#Create)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### create._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[Create](#Create)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="Delete"></a>

## Delete ⇐ <code>[BaseHelper](#BaseHelper)</code>
Business Logic Scenario Helper Delete class

**Kind**: global class
**Extends:** <code>[BaseHelper](#BaseHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [Delete](#Delete) ⇐ <code>[BaseHelper](#BaseHelper)</code>
    * *[._validate(context)](#Delete+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Delete+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="Delete+_validate"></a>

### *delete._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Query Scenario Model fields

**Kind**: instance abstract method of <code>[Delete](#Delete)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Delete+_process"></a>

### delete._process(context)
Process the context

**Kind**: instance method of <code>[Delete](#Delete)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### delete._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[Delete](#Delete)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="Find"></a>

## Find ⇐ <code>[BaseHelper](#BaseHelper)</code>
Business Logic Execution Helper Find class

**Kind**: global class
**Extends:** <code>[BaseHelper](#BaseHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [Find](#Find) ⇐ <code>[BaseHelper](#BaseHelper)</code>
    * *[._validate(context)](#Find+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Find+_process)
    * *[._validate(context)](#Find+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Find+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="Find+_validate"></a>

### *find._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Query Execution Model fields

**Kind**: instance abstract method of <code>[Find](#Find)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Find+_process"></a>

### find._process(context)
Process the context

**Kind**: instance method of <code>[Find](#Find)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Find+_validate"></a>

### *find._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates abstract query fields

**Kind**: instance abstract method of <code>[Find](#Find)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Find+_process"></a>

### find._process(context)
Process the context

**Kind**: instance method of <code>[Find](#Find)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### find._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[Find](#Find)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="FindById"></a>

## FindById ⇐ <code>[BaseHelper](#BaseHelper)</code>
Business Logic Execution Helper FindById class

**Kind**: global class
**Extends:** <code>[BaseHelper](#BaseHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [FindById](#FindById) ⇐ <code>[BaseHelper](#BaseHelper)</code>
    * *[._validate(context)](#FindById+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#FindById+_process)
    * *[._validate(context)](#FindById+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#FindById+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="FindById+_validate"></a>

### *findById._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Query Execution Model fields

**Kind**: instance abstract method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="FindById+_process"></a>

### findById._process(context)
Process the context

**Kind**: instance method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="FindById+_validate"></a>

### *findById._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates abstract query fields

**Kind**: instance abstract method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="FindById+_process"></a>

### findById._process(context)
Process the context

**Kind**: instance method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### findById._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[FindById](#FindById)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="Update"></a>

## Update ⇐ <code>[BaseHelper](#BaseHelper)</code>
Business Logic Execution Helper Update class

**Kind**: global class
**Extends:** <code>[BaseHelper](#BaseHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [Update](#Update) ⇐ <code>[BaseHelper](#BaseHelper)</code>
    * *[._validate(context)](#Update+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Update+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="Update+_validate"></a>

### *update._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Execution Model fields

**Kind**: instance abstract method of <code>[Update](#Update)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Update+_process"></a>

### update._process(context)
Process the context

**Kind**: instance method of <code>[Update](#Update)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### update._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[Update](#Update)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="Base"></a>

## Base ⇐ <code>Brick</code>
Business Logic Base class

**Kind**: global class
**Extends:** <code>Brick</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| configuration | <code>BrickConfig</code> | cement configuration of the brick |
| helpers | <code>Map.&lt;String, Helper&gt;</code> | Map of Helpers |


* [Base](#Base) ⇐ <code>Brick</code>
    * [new Base(cementHelper, configuration)](#new_Base_new)
    * [.validate(context)](#Base+validate) ⇒ <code>Promise</code>
    * [.process(context)](#Base+process)

<a name="new_Base_new"></a>

### new Base(cementHelper, configuration)
constructor - Create a new Business Logic Base instance


| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| configuration | <code>BrickConfig</code> | cement configuration of the brick |

<a name="Base+validate"></a>

### base.validate(context) ⇒ <code>Promise</code>
Validates Context properties

**Kind**: instance method of <code>[Base](#Base)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Base+process"></a>

### base.process(context)
Process the context

**Kind**: instance method of <code>[Base](#Base)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Run"></a>

## Run ⇐ <code>[BaseHelper](#BaseHelper)</code>
Business Logic Execution Helper FindById class

**Kind**: global class
**Extends:** <code>[BaseHelper](#BaseHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [Run](#Run) ⇐ <code>[BaseHelper](#BaseHelper)</code>
    * *[._validate(context)](#Run+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Run+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="Run+_validate"></a>

### *run._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Query Execution Model fields

**Kind**: instance abstract method of <code>[Run](#Run)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Run+_process"></a>

### run._process(context)
Process the context

**Kind**: instance method of <code>[Run](#Run)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### run._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[Run](#Run)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="Scenarios"></a>

## Scenarios ⇐ <code>[Base](#Base)</code>
Business Logic Scenario class

**Kind**: global class
**Extends:** <code>[Base](#Base)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| configuration | <code>BrickConfig</code> | cement configuration of the brick |
| apiURLs | <code>Object</code> | list of URLs to other components APIs |
| helpers | <code>Map.&lt;String, Helper&gt;</code> | Map of Helpers |


* [Scenarios](#Scenarios) ⇐ <code>[Base](#Base)</code>
    * [new Scenarios(data, autoGenerateId)](#new_Scenarios_new)
    * [.validate(context)](#Base+validate) ⇒ <code>Promise</code>
    * [.process(context)](#Base+process)

<a name="new_Scenarios_new"></a>

### new Scenarios(data, autoGenerateId)

| Param | Description |
| --- | --- |
| data | The data to create |
| autoGenerateId |  |

<a name="Base+validate"></a>

### scenarios.validate(context) ⇒ <code>Promise</code>
Validates Context properties

**Kind**: instance method of <code>[Scenarios](#Scenarios)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Base+process"></a>

### scenarios.process(context)
Process the context

**Kind**: instance method of <code>[Scenarios](#Scenarios)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseDBInterfaceHelper"></a>

## BaseDBInterfaceHelper
Database Interface Helper Base class

**Kind**: global class
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [BaseDBInterfaceHelper](#BaseDBInterfaceHelper)
    * [new BaseDBInterfaceHelper(cementHelper, logger)](#new_BaseDBInterfaceHelper_new)
    * *[._validate(context)](#BaseDBInterfaceHelper+_validate) ⇒ <code>Promise</code>*
    * *[._process(context)](#BaseDBInterfaceHelper+_process) ⇒ <code>Context</code>*

<a name="new_BaseDBInterfaceHelper_new"></a>

### new BaseDBInterfaceHelper(cementHelper, logger)
constructor - Create a new Database Interface Helper Base instance


| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |

<a name="BaseDBInterfaceHelper+_validate"></a>

### *baseDBInterfaceHelper._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper

**Kind**: instance abstract method of <code>[BaseDBInterfaceHelper](#BaseDBInterfaceHelper)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseDBInterfaceHelper+_process"></a>

### *baseDBInterfaceHelper._process(context) ⇒ <code>Context</code>*
Process the context

**Kind**: instance abstract method of <code>[BaseDBInterfaceHelper](#BaseDBInterfaceHelper)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseDBInterface"></a>

## BaseDBInterface ⇐ <code>Brick</code>
Database Interface Base class

**Kind**: global class
**Extends:** <code>Brick</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| configuration | <code>BrickConfig</code> | cement configuration of the brick |
| helpers | <code>Map.&lt;String, Helper&gt;</code> | Map of Helpers |


* [BaseDBInterface](#BaseDBInterface) ⇐ <code>Brick</code>
    * [new BaseDBInterface(cementHelper, configuration)](#new_BaseDBInterface_new)
    * [.validate(context)](#BaseDBInterface+validate) ⇒ <code>Promise</code>
    * [.process(context)](#BaseDBInterface+process)

<a name="new_BaseDBInterface_new"></a>

### new BaseDBInterface(cementHelper, configuration)
constructor - Create a new Database Interface Base instance


| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| configuration | <code>BrickConfig</code> | cement configuration of the brick |

<a name="BaseDBInterface+validate"></a>

### baseDBInterface.validate(context) ⇒ <code>Promise</code>
Validates Context properties

**Kind**: instance method of <code>[BaseDBInterface](#BaseDBInterface)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseDBInterface+process"></a>

### baseDBInterface.process(context)
Process the context

**Kind**: instance method of <code>[BaseDBInterface](#BaseDBInterface)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseMongoDBHelper"></a>

## BaseMongoDBHelper ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
Database Interface MongoDB Helper Base class

**Kind**: global class
**Extends:** <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |

<a name="DeleteOne"></a>

## DeleteOne ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
Database Interface MongoDB Helper DeleteOne class

**Kind**: global class
**Extends:** <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [DeleteOne](#DeleteOne) ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
    * *[._validate(context)](#DeleteOne+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#DeleteOne+_process)

<a name="DeleteOne+_validate"></a>

### *deleteOne._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates abstract query fields

**Kind**: instance abstract method of <code>[DeleteOne](#DeleteOne)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="DeleteOne+_process"></a>

### deleteOne._process(context)
Process the context

**Kind**: instance method of <code>[DeleteOne](#DeleteOne)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Find"></a>

## Find ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
Database Interface MongoDB Helper Find class

**Kind**: global class
**Extends:** <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [Find](#Find) ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
    * *[._validate(context)](#Find+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Find+_process)
    * *[._validate(context)](#Find+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#Find+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="Find+_validate"></a>

### *find._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Query Execution Model fields

**Kind**: instance abstract method of <code>[Find](#Find)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Find+_process"></a>

### find._process(context)
Process the context

**Kind**: instance method of <code>[Find](#Find)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Find+_validate"></a>

### *find._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates abstract query fields

**Kind**: instance abstract method of <code>[Find](#Find)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Find+_process"></a>

### find._process(context)
Process the context

**Kind**: instance method of <code>[Find](#Find)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### find._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[Find](#Find)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="FindById"></a>

## FindById ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
Database Interface MongoDB Helper FindById class

**Kind**: global class
**Extends:** <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [FindById](#FindById) ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
    * *[._validate(context)](#FindById+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#FindById+_process)
    * *[._validate(context)](#FindById+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#FindById+_process)
    * [._ack(context)](#BaseHelper+_ack)

<a name="FindById+_validate"></a>

### *findById._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates Query Execution Model fields

**Kind**: instance abstract method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="FindById+_process"></a>

### findById._process(context)
Process the context

**Kind**: instance method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="FindById+_validate"></a>

### *findById._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates abstract query fields

**Kind**: instance abstract method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_validate](#BaseHelper+_validate)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="FindById+_process"></a>

### findById._process(context)
Process the context

**Kind**: instance method of <code>[FindById](#FindById)</code>
**Overrides:** <code>[_process](#BaseHelper+_process)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseHelper+_ack"></a>

### findById._ack(context)
Acknowledge a Context

**Kind**: instance method of <code>[FindById](#FindById)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | the Context to acknowledge |

<a name="InsertOne"></a>

## InsertOne ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
Database Interface MongoDB Helper InsertOne class

**Kind**: global class
**Extends:** <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [InsertOne](#InsertOne) ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
    * *[._validate(context)](#InsertOne+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#InsertOne+_process)

<a name="InsertOne+_validate"></a>

### *insertOne._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates abstract query fields

**Kind**: instance abstract method of <code>[InsertOne](#InsertOne)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="InsertOne+_process"></a>

### insertOne._process(context)
Process the context

**Kind**: instance method of <code>[InsertOne](#InsertOne)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="UpdateOne"></a>

## UpdateOne ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
Database Interface MongoDB Helper UpdateOne class

**Kind**: global class
**Extends:** <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| logger | <code>Logger</code> | logger instance |


* [UpdateOne](#UpdateOne) ⇐ <code>[BaseMongoDBHelper](#BaseMongoDBHelper)</code>
    * *[._validate(context)](#UpdateOne+_validate) ⇒ <code>Promise</code>*
    * [._process(context)](#UpdateOne+_process)

<a name="UpdateOne+_validate"></a>

### *updateOne._validate(context) ⇒ <code>Promise</code>*
Validates Context properties specific to this Helper
Validates abstract query fields

**Kind**: instance abstract method of <code>[UpdateOne](#UpdateOne)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="UpdateOne+_process"></a>

### updateOne._process(context)
Process the context

**Kind**: instance method of <code>[UpdateOne](#UpdateOne)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="MongoDBInterface"></a>

## MongoDBInterface ⇐ <code>[BaseDBInterface](#BaseDBInterface)</code>
Database Interface MongoDB class

**Kind**: global class
**Extends:** <code>[BaseDBInterface](#BaseDBInterface)</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper instance |
| configuration | <code>BrickConfig</code> | cement configuration of the brick |
| helpers | <code>Map.&lt;String, Helper&gt;</code> | Map of Helpers |


* [MongoDBInterface](#MongoDBInterface) ⇐ <code>[BaseDBInterface](#BaseDBInterface)</code>
    * [.validate(context)](#BaseDBInterface+validate) ⇒ <code>Promise</code>
    * [.process(context)](#BaseDBInterface+process)

<a name="BaseDBInterface+validate"></a>

### mongoDBInterface.validate(context) ⇒ <code>Promise</code>
Validates Context properties

**Kind**: instance method of <code>[MongoDBInterface](#MongoDBInterface)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseDBInterface+process"></a>

### mongoDBInterface.process(context)
Process the context

**Kind**: instance method of <code>[MongoDBInterface](#MongoDBInterface)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="BaseSchema"></a>

## BaseSchema
Base Schema for MongoDB class

**Kind**: global class
<a name="new_BaseSchema_new"></a>

### new BaseSchema(data, type)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | the data |
| type | <code>String</code> | the type of data |

<a name="ScenarioSchema"></a>

## ScenarioSchema
Execution Schema for MongoDB class

**Kind**: global class
<a name="new_ScenarioSchema_new"></a>

### new ScenarioSchema(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>[DataModel](#DataModel)</code> | params |

<a name="Configuration"></a>

## Configuration
Configuration Data Model class

**Kind**: global class
<a name="new_Configuration_new"></a>

### new Configuration(data, autoGenerateId)

| Param | Description |
| --- | --- |
| data | The data to create |
| autoGenerateId |  |

<a name="DataModel"></a>

## DataModel
Based Class for all DataModels

**Kind**: global class

* [DataModel](#DataModel)
    * [new DataModel(data, fields, autoGenerateId)](#new_DataModel_new)
    * [.convertDataFields(data, fields)](#DataModel+convertDataFields) ⇒ <code>Object</code>

<a name="new_DataModel_new"></a>

### new DataModel(data, fields, autoGenerateId)
Crate a DataModel


| Param | Description |
| --- | --- |
| data | The data for construct the DataModel |
| fields | The DataModel fields |
| autoGenerateId | The flag to enable or disable the auto generate the id to the DataModel |

<a name="DataModel+convertDataFields"></a>

### dataModel.convertDataFields(data, fields) ⇒ <code>Object</code>
Convert a string to the DataModel fields type

**Kind**: instance method of <code>[DataModel](#DataModel)</code>
**Returns**: <code>Object</code> - - The converted Data

| Param | Description |
| --- | --- |
| data | The data given to be converted |
| fields | The DataModel fields |

<a name="Repository"></a>

## Repository
Repository Data Model class

**Kind**: global class
<a name="new_Repository_new"></a>

### new Repository(data, autoGenerateId)

| Param | Description |
| --- | --- |
| data | The data to create |
| autoGenerateId |  |

<a name="Scenarios"></a>

## Scenarios
Scenario Data Model class

**Kind**: global class

* [Scenarios](#Scenarios)
    * [new Scenarios(data, autoGenerateId)](#new_Scenarios_new)
    * [.validate(context)](#Base+validate) ⇒ <code>Promise</code>
    * [.process(context)](#Base+process)

<a name="new_Scenarios_new"></a>

### new Scenarios(data, autoGenerateId)

| Param | Description |
| --- | --- |
| data | The data to create |
| autoGenerateId |  |

<a name="Base+validate"></a>

### scenarios.validate(context) ⇒ <code>Promise</code>
Validates Context properties

**Kind**: instance method of <code>[Scenarios](#Scenarios)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Base+process"></a>

### scenarios.process(context)
Process the context

**Kind**: instance method of <code>[Scenarios](#Scenarios)</code>

| Param | Type | Description |
| --- | --- | --- |
| context | <code>Context</code> | a Context |

<a name="Test"></a>

## Test
Tests Data Model class

**Kind**: global class
<a name="new_Test_new"></a>

### new Test(data, autoGenerateId)

| Param | Description |
| --- | --- |
| data | The data to create |
| autoGenerateId |  |

<a name="TestSuite"></a>

## TestSuite
TestSuite Data Model class

**Kind**: global class
<a name="new_TestSuite_new"></a>

### new TestSuite(data, autoGenerateId)

| Param | Description |
| --- | --- |
| data | The data to create |
| autoGenerateId |  |

<a name="RestCRUD"></a>

## RestCRUD
Handler class for RESTAPI handlers

**Kind**: global class

* [RestCRUD](#RestCRUD)
    * [new RestCRUD(cementHelper,, dataType,, DataModel,)](#new_RestCRUD_new)
    * [.create(req, res)](#RestCRUD+create)
    * [.update(req, res)](#RestCRUD+update)
    * [.findById(req, res)](#RestCRUD+findById)
    * [.find(req, res, next)](#RestCRUD+find)
    * [.delete(req, res, next)](#RestCRUD+delete)

<a name="new_RestCRUD_new"></a>

### new RestCRUD(cementHelper,, dataType,, DataModel,)
Create


| Param | Description |
| --- | --- |
| cementHelper, | a cementHelper |
| dataType, | type of data the handle |
| DataModel, | a Data Model |

<a name="RestCRUD+create"></a>

### restCRUD.create(req, res)
Publishes request body in create Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>

| Param |
| --- |
| req |
| res |

<a name="RestCRUD+update"></a>

### restCRUD.update(req, res)
Publishes request body in update Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>

| Param |
| --- |
| req |
| res |

<a name="RestCRUD+findById"></a>

### restCRUD.findById(req, res)
Publishes request params (Query) id in findbyid Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>

| Param |
| --- |
| req |
| res |

<a name="RestCRUD+find"></a>

### restCRUD.find(req, res, next)
Publishes request params (Query) in find Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>

| Param |
| --- |
| req |
| res |
| next |

<a name="RestCRUD+delete"></a>

### restCRUD.delete(req, res, next)
Publishes request params (Query) id in delete Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>

| Param |
| --- |
| req |
| res |
| next |

<a name="ScenariosHandler"></a>

## ScenariosHandler
Handler class for RESTAPI handlers : RESULTS

**Kind**: global class
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |


* [ScenariosHandler](#ScenariosHandler)
    * [new ScenariosHandler(cementHelper)](#new_ScenariosHandler_new)
    * [.run(req, res)](#ScenariosHandler+run)

<a name="new_ScenariosHandler_new"></a>

### new ScenariosHandler(cementHelper)

| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |

<a name="ScenariosHandler+run"></a>

### scenariosHandler.run(req, res)
Publishes request params (Query) id in run Context

**Kind**: instance method of <code>[ScenariosHandler](#ScenariosHandler)</code>

| Param |
| --- |
| req |
| res |

<a name="TestsHandler"></a>

## TestsHandler
Handler class for RESTAPI handlers : RESULTS

**Kind**: global class
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |

<a name="new_TestsHandler_new"></a>

### new TestsHandler(cementHelper)

| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |

<a name="TestSuitesHandler"></a>

## TestSuitesHandler
Handler class for RESTAPI handlers : RESULTS

**Kind**: global class
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |

<a name="new_TestSuitesHandler_new"></a>

### new TestSuitesHandler(cementHelper)

| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |

<a name="fields"></a>

## fields : <code>Object</code>
Configuration Data Model fields

**Kind**: global constant
<a name="fields"></a>

## fields
Repository Data Model fields

**Kind**: global constant
**Type{{**: id: {type: string},
name: {type: string},
type: {type: string},
url: {type: string},
mountPoint: {type: string},
}}
<a name="fields"></a>

## fields : <code>Object</code>
Scenario Data Model fields

**Kind**: global constant
<a name="fields"></a>

## fields
Test Data Model fields

**Kind**: global constant
**Type{{**: id: {type: string},
parentTestSuite: {type: string},
name: {type: string},
description: {type: string},
featureTested: {type: string},
type: {type: string},
enabled: {type: boolean},
stages: {type: array},
}}
<a name="fields"></a>

## fields
Scenario Data Model fields

**Kind**: global constant
**Type{{**: id: {type: string},
name: {type: string},
tests: {type: array}
enabled: {type: boolean},
applicationTested: {type: string},
inputRepositories: {type: array, optional: boolean},
outputRepositories: {type: array, optional: boolean},
}}
