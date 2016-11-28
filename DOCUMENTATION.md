## Classes

<dl>
<dt><a href="#DataModel">DataModel</a></dt>
<dd><p>Based Class for all DataModels</p>
</dd>
<dt><a href="#Scenario">Scenario</a></dt>
<dd><p>Scenario Data Model class</p>
</dd>
<dt><a href="#RestCRUD">RestCRUD</a></dt>
<dd><p>Handler class for RESTAPI handlers : RESULTS</p>
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

<a name="RestCRUD"></a>

## RestCRUD
Handler class for RESTAPI handlers : RESULTS

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |


* [RestCRUD](#RestCRUD)
    * [new RestCRUD(cementHelper)](#new_RestCRUD_new)
    * [.create(req, res)](#RestCRUD+create)
    * [.update(req, res)](#RestCRUD+update)
    * [.findById(req, res)](#RestCRUD+findById)
    * [.find(req, res, next)](#RestCRUD+find)

<a name="new_RestCRUD_new"></a>

### new RestCRUD(cementHelper)

| Param | Type | Description |
| --- | --- | --- |
| cementHelper | <code>CementHelper</code> | cementHelper from a cta-restapi Brick |

<a name="RestCRUD+create"></a>

### restCRUD.create(req, res)
Publishes request body in the create Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>  

| Param |
| --- |
| req | 
| res | 

<a name="RestCRUD+update"></a>

### restCRUD.update(req, res)
Publishes request body in the update Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>  

| Param |
| --- |
| req | 
| res | 

<a name="RestCRUD+findById"></a>

### restCRUD.findById(req, res)
Publishes request params (Query) id in the findbyid Context

**Kind**: instance method of <code>[RestCRUD](#RestCRUD)</code>  

| Param |
| --- |
| req | 
| res | 

<a name="RestCRUD+find"></a>

### restCRUD.find(req, res, next)
Publishes request params (Query) in an execution-find Context

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
