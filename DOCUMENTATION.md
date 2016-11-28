# Scenario DataService for Compass Test Automation
[Readme](README.md) | [Rest API](RESTAPI.md) | [DataModel](DATAMODEL.md) | [DataContract](DATACONTRACT.md) | [Document](DOCUMENTATION.md)

## Classes

<dl>
<dt><a href="#DataModel">DataModel</a></dt>
<dd><p>Based Class for all DataModels</p>
</dd>
<dt><a href="#Scenario">Scenario</a></dt>
<dd><p>Scenario Data Model class</p>
</dd>
<dt><a href="#Test">Test</a></dt>
<dd><p>TestSuite Data Model class</p>
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
</dl>

## Constants

<dl>
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

<a name="Scenario"></a>

## Scenario
Scenario Data Model class

**Kind**: global class
<a name="new_Scenario_new"></a>

### new Scenario(data, autoGenerateId)

| Param | Description |
| --- | --- |
| data | The data to create |
| autoGenerateId |  |

<a name="Test"></a>

## Test
TestSuite Data Model class

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

<a name="new_ScenariosHandler_new"></a>

### new ScenariosHandler(cementHelper)

| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |

<a name="fields"></a>

## fields : <code>Object</code>
Scenario Data Model fields

**Kind**: global constant
<a name="fields"></a>

## fields
Test Data Model fields

**Kind**: global constant
**Type{{**: id: {type: string},
name: {type: string},
description: {type: string},
featureTested: {type: string},
type: {type: string},
parentTestSuite: {type: string},
enabled: {type: boolean},
inputRepositories: {type: array, optional: boolean},
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
