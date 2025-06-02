[](https://github.com/n8n-io/n8n-docs/edit/main/docs/api/api-reference.md "edit.link.title")

*   User
    *   getRetrieve all users
    *   postCreate multiple users
    *   getGet user by ID/Email
    *   delDelete a user
    *   patchChange a user's global role
*   Audit
    *   postGenerate an audit
*   Execution
    *   getRetrieve all executions
    *   getRetrieve an execution
    *   delDelete an execution
*   Workflow
    *   postCreate a workflow
    *   getRetrieve all workflows
    *   getRetrieves a workflow
    *   delDelete a workflow
    *   putUpdate a workflow
    *   postActivate a workflow
    *   postDeactivate a workflow
    *   putTransfer a workflow to another project.
    *   putTransfer a credential to another project.
    *   getGet workflow tags
    *   putUpdate tags of a workflow
*   Credential
    *   postCreate a credential
    *   delDelete credential by ID
    *   getShow credential data schema
*   Tags
    *   postCreate a tag
    *   getRetrieve all tags
    *   getRetrieves a tag
    *   delDelete a tag
    *   putUpdate a tag
*   SourceControl
    *   postPull changes from the remote repository
*   Variables
    *   postCreate a variable
    *   getRetrieve variables
    *   delDelete a variable
    *   putUpdate a variable
*   Projects
    *   postCreate a project
    *   getRetrieve projects
    *   delDelete a project
*   Project
    *   putUpdate a project

[![redocly logo](https://cdn.redoc.ly/redoc/logo-mini.svg)API docs by Redocly](https://redocly.com/redoc/)

# n8n Public API (1.1.1)

Download OpenAPI specification:[Download](https://docs.n8n.io/api/v1/openapi.yml)

E-mail: [hello@n8n.io](mailto:hello@n8n.io) License: [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) [Terms of Service](https://n8n.io/legal/terms)

n8n Public API

[n8n API documentation](https://docs.n8n.io/api/)

## [](#tag/User)User

Operations about users

## [](#tag/User/paths/~1users/get)Retrieve all users

Retrieve all users from your instance. Only available for the instance owner.

##### Authorizations:

_ApiKeyAuth_

##### query Parameters

limit

number <= 250

Default: 100

Example: limit=100

The maximum number of items to return.

cursor

string

Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.

includeRole

boolean

Default: false

Example: includeRole=true

Whether to include the user's role or not.

projectId

string

Example: projectId=VmwOO9HeTEj20kxM

### Responses

https://docs.n8n.io/api/v1/users

### Response samples

*   200

Content type

application/json

 

`{  *   "data": [          *   {                  *   "id": "123e4567-e89b-12d3-a456-426614174000",                      *   "email": "john.doe@company.com",                      *   "firstName": "john",                      *   "lastName": "Doe",                      *   "isPending": true,                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z",                      *   "role": "owner"                               }                   ],      *   "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"       }`

## [](#tag/User/paths/~1users/post)Create multiple users

Create one or more users.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Array of users to be created.

Array

email

required

string <email>

role

string

Enum: "global:admin" "global:member"

### Responses

https://docs.n8n.io/api/v1/users

### Request samples

*   Payload

Content type

application/json

 

`[  *   {          *   "email": "user@example.com",              *   "role": "global:admin"                   }       ]`

### Response samples

*   200

Content type

application/json

 

`{  *   "user": {          *   "id": "string",              *   "email": "string",              *   "inviteAcceptUrl": "string",              *   "emailSent": true                   },      *   "error": "string"       }`

## [](#tag/User/paths/~1users~1{id}/get)Get user by ID/Email

Retrieve a user from your instance. Only available for the instance owner.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string <identifier>

The ID or email of the user.

##### query Parameters

includeRole

boolean

Default: false

Example: includeRole=true

Whether to include the user's role or not.

### Responses

https://docs.n8n.io/api/v1/users/{id}

### Response samples

*   200

Content type

application/json

`{  *   "id": "123e4567-e89b-12d3-a456-426614174000",      *   "email": "john.doe@company.com",      *   "firstName": "john",      *   "lastName": "Doe",      *   "isPending": true,      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z",      *   "role": "owner"       }`

## [](#tag/User/paths/~1users~1{id}/delete)Delete a user

Delete a user from your instance.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string <identifier>

The ID or email of the user.

### Responses

https://docs.n8n.io/api/v1/users/{id}

## [](#tag/User/paths/~1users~1{id}~1role/patch)Change a user's global role

Change a user's global role

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string <identifier>

The ID or email of the user.

##### Request Body schema: application/json

required

New role for the user

newRoleName

required

string

Enum: "global:admin" "global:member"

### Responses

https://docs.n8n.io/api/v1/users/{id}/role

### Request samples

*   Payload

Content type

application/json

`{  *   "newRoleName": "global:admin"       }`

## [](#tag/Audit)Audit

Operations about security audit

## [](#tag/Audit/paths/~1audit/post)Generate an audit

Generate a security audit for your n8n instance.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

optional

object

### Responses

https://docs.n8n.io/api/v1/audit

### Request samples

*   Payload

Content type

application/json

 

`{  *   "additionalOptions": {          *   "daysAbandonedWorkflow": 0,              *   "categories": [                  *   "credentials"                               ]                   }       }`

### Response samples

*   200

Content type

application/json

 

`{  *   "Credentials Risk Report": {          *   "risk": "credentials",              *   "sections": [                  *   {                          *   "title": "Credentials not used in any workflow",                              *   "description": "These credentials are not used in any workflow. Keeping unused credentials in your instance is an unneeded security risk.",                              *   "recommendation": "Consider deleting these credentials if you no longer need them.",                              *   "location": [                                  *   {                                          *   "kind": "credential",                                              *   "id": "1",                                              *   "name": "My Test Account"                                                                   }                                                       ]                                           }                               ]                   },      *   "Database Risk Report": {          *   "risk": "database",              *   "sections": [                  *   {                          *   "title": "Expressions in \"Execute Query\" fields in SQL nodes",                              *   "description": "This SQL node has an expression in the \"Query\" field of an \"Execute Query\" operation. Building a SQL query with an expression may lead to a SQL injection attack.",                              *   "recommendation": "Consider using the \"Query Parameters\" field to pass parameters to the query",                              *   "or validating the input of the expression in the "Query" field.": null,                              *   "location": [                                  *   {                                          *   "kind": "node",                                              *   "workflowId": "1",                                              *   "workflowName": "My Workflow",                                              *   "nodeId": "51eb5852-ce0b-4806-b4ff-e41322a4041a",                                              *   "nodeName": "MySQL",                                              *   "nodeType": "n8n-nodes-base.mySql"                                                                   }                                                       ]                                           }                               ]                   },      *   "Filesystem Risk Report": {          *   "risk": "filesystem",              *   "sections": [                  *   {                          *   "title": "Nodes that interact with the filesystem",                              *   "description": "This node reads from and writes to any accessible file in the host filesystem. Sensitive file content may be manipulated through a node operation.",                              *   "recommendation": "Consider protecting any sensitive files in the host filesystem",                              *   "or refactoring the workflow so that it does not require host filesystem interaction.": null,                              *   "location": [                                  *   {                                          *   "kind": "node",                                              *   "workflowId": "1",                                              *   "workflowName": "My Workflow",                                              *   "nodeId": "51eb5852-ce0b-4806-b4ff-e41322a4041a",                                              *   "nodeName": "Ready Binary file",                                              *   "nodeType": "n8n-nodes-base.readBinaryFile"                                                                   }                                                       ]                                           }                               ]                   },      *   "Nodes Risk Report": {          *   "risk": "nodes",              *   "sections": [                  *   {                          *   "title": "Community nodes",                              *   "description": "This node is sourced from the community. Community nodes are not vetted by the n8n team and have full access to the host system.",                              *   "recommendation": "Consider reviewing the source code in any community nodes installed in this n8n instance",                              *   "and uninstalling any community nodes no longer used.": null,                              *   "location": [                                  *   {                                          *   "kind": "community",                                              *   "nodeType": "n8n-nodes-test.test",                                              *   "packageUrl": "[https://www.npmjs.com/package/n8n-nodes-test](https://www.npmjs.com/package/n8n-nodes-test)"                                                                   }                                                       ]                                           }                               ]                   },      *   "Instance Risk Report": {          *   "risk": "execution",              *   "sections": [                  *   {                          *   "title": "Unprotected webhooks in instance",                              *   "description": "These webhook nodes have the \"Authentication\" field set to \"None\" and are not directly connected to a node to validate the payload. Every unprotected webhook allows your workflow to be called by any third party who knows the webhook URL.",                              *   "recommendation": "Consider setting the \"Authentication\" field to an option other than \"None\"",                              *   "or validating the payload with one of the following nodes.": null,                              *   "location": [                                  *   {                                          *   "kind": "community",                                              *   "nodeType": "n8n-nodes-test.test",                                              *   "packageUrl": "[https://www.npmjs.com/package/n8n-nodes-test](https://www.npmjs.com/package/n8n-nodes-test)"                                                                   }                                                       ]                                           }                               ]                   }       }`

## [](#tag/Execution)Execution

Operations about executions

## [](#tag/Execution/paths/~1executions/get)Retrieve all executions

Retrieve all executions from your instance.

##### Authorizations:

_ApiKeyAuth_

##### query Parameters

includeData

boolean

Whether or not to include the execution's detailed data.

status

string

Enum: "error" "success" "waiting"

Status to filter the executions by.

workflowId

string

Example: workflowId=1000

Workflow to filter the executions by.

projectId

string

Example: projectId=VmwOO9HeTEj20kxM

limit

number <= 250

Default: 100

Example: limit=100

The maximum number of items to return.

cursor

string

Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.

### Responses

https://docs.n8n.io/api/v1/executions

### Response samples

*   200

Content type

application/json

 

`{  *   "data": [          *   {                  *   "id": 1000,                      *   "data": { },                      *   "finished": true,                      *   "mode": "cli",                      *   "retryOf": 0,                      *   "retrySuccessId": "2",                      *   "startedAt": "2019-08-24T14:15:22Z",                      *   "stoppedAt": "2019-08-24T14:15:22Z",                      *   "workflowId": "1000",                      *   "waitTill": "2019-08-24T14:15:22Z",                      *   "customData": { }                               }                   ],      *   "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"       }`

## [](#tag/Execution/paths/~1executions~1{id}/get)Retrieve an execution

Retrieve an execution from your instance.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

number

The ID of the execution.

##### query Parameters

includeData

boolean

Whether or not to include the execution's detailed data.

### Responses

https://docs.n8n.io/api/v1/executions/{id}

### Response samples

*   200

Content type

application/json

 

`{  *   "id": 1000,      *   "data": { },      *   "finished": true,      *   "mode": "cli",      *   "retryOf": 0,      *   "retrySuccessId": "2",      *   "startedAt": "2019-08-24T14:15:22Z",      *   "stoppedAt": "2019-08-24T14:15:22Z",      *   "workflowId": "1000",      *   "waitTill": "2019-08-24T14:15:22Z",      *   "customData": { }       }`

## [](#tag/Execution/paths/~1executions~1{id}/delete)Delete an execution

Deletes an execution from your instance.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

number

The ID of the execution.

### Responses

https://docs.n8n.io/api/v1/executions/{id}

### Response samples

*   200

Content type

application/json

 

`{  *   "id": 1000,      *   "data": { },      *   "finished": true,      *   "mode": "cli",      *   "retryOf": 0,      *   "retrySuccessId": "2",      *   "startedAt": "2019-08-24T14:15:22Z",      *   "stoppedAt": "2019-08-24T14:15:22Z",      *   "workflowId": "1000",      *   "waitTill": "2019-08-24T14:15:22Z",      *   "customData": { }       }`

## [](#tag/Workflow)Workflow

Operations about workflows

## [](#tag/Workflow/paths/~1workflows/post)Create a workflow

Create a workflow in your instance.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Created workflow object.

name

required

string

required

Array of objects (node)

connections

required

object

required

object (workflowSettings)

(string or null) or (object or null)

### Responses

https://docs.n8n.io/api/v1/workflows

### Request samples

*   Payload

Content type

application/json

 

`{  *   "name": "Workflow 1",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           }                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   }       }`

### Response samples

*   200

Content type

application/json

 

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Workflow 1",      *   "active": true,      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           },                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   },      *   "tags": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Production",                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ]       }`

## [](#tag/Workflow/paths/~1workflows/get)Retrieve all workflows

Retrieve all workflows from your instance.

##### Authorizations:

_ApiKeyAuth_

##### query Parameters

active

boolean

Example: active=true

tags

string

Example: tags=test,production

name

string

Example: name=My Workflow

projectId

string

Example: projectId=VmwOO9HeTEj20kxM

excludePinnedData

boolean

Example: excludePinnedData=true

Set this to avoid retrieving pinned data

limit

number <= 250

Default: 100

Example: limit=100

The maximum number of items to return.

cursor

string

Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.

### Responses

https://docs.n8n.io/api/v1/workflows

### Response samples

*   200

Content type

application/json

 

`{  *   "data": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Workflow 1",                      *   "active": true,                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z",                      *   "nodes": [                          *   {                                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                                      *   "name": "Jira",                                      *   "webhookId": "string",                                      *   "disabled": true,                                      *   "notesInFlow": true,                                      *   "notes": "string",                                      *   "type": "n8n-nodes-base.Jira",                                      *   "typeVersion": 1,                                      *   "executeOnce": false,                                      *   "alwaysOutputData": false,                                      *   "retryOnFail": false,                                      *   "maxTries": 0,                                      *   "waitBetweenTries": 0,                                      *   "continueOnFail": false,                                      *   "onError": "stopWorkflow",                                      *   "position": [                                          *   -100,                                              *   80                                                                   ],                                      *   "parameters": {                                          *   "additionalProperties": { }                                                                   },                                      *   "credentials": {                                          *   "jiraSoftwareCloudApi": {                                                  *   "id": "35",                                                      *   "name": "jiraApi"                                                                               }                                                                   },                                      *   "createdAt": "2019-08-24T14:15:22Z",                                      *   "updatedAt": "2019-08-24T14:15:22Z"                                                       }                                           ],                      *   "connections": {                          *   "main": [                                  *   {                                          *   "node": "Jira",                                              *   "type": "main",                                              *   "index": 0                                                                   }                                                       ]                                           },                      *   "settings": {                          *   "saveExecutionProgress": true,                              *   "saveManualExecutions": true,                              *   "saveDataErrorExecution": "all",                              *   "saveDataSuccessExecution": "all",                              *   "executionTimeout": 3600,                              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",                              *   "timezone": "America/New_York",                              *   "executionOrder": "v1"                                           },                      *   "staticData": {                          *   "lastId": 1                                           },                      *   "tags": [                          *   {                                  *   "id": "2tUt1wbLX592XDdX",                                      *   "name": "Production",                                      *   "createdAt": "2019-08-24T14:15:22Z",                                      *   "updatedAt": "2019-08-24T14:15:22Z"                                                       }                                           ]                               }                   ],      *   "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"       }`

## [](#tag/Workflow/paths/~1workflows~1{id}/get)Retrieves a workflow

Retrieves a workflow.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

##### query Parameters

excludePinnedData

boolean

Example: excludePinnedData=true

Set this to avoid retrieving pinned data

### Responses

https://docs.n8n.io/api/v1/workflows/{id}

### Response samples

*   200

Content type

application/json

 

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Workflow 1",      *   "active": true,      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           },                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   },      *   "tags": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Production",                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ]       }`

## [](#tag/Workflow/paths/~1workflows~1{id}/delete)Delete a workflow

Deletes a workflow.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

### Responses

https://docs.n8n.io/api/v1/workflows/{id}

### Response samples

*   200

Content type

application/json

 

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Workflow 1",      *   "active": true,      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           },                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   },      *   "tags": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Production",                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ]       }`

## [](#tag/Workflow/paths/~1workflows~1{id}/put)Update a workflow

Update a workflow.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

##### Request Body schema: application/json

required

Updated workflow object.

name

required

string

required

Array of objects (node)

connections

required

object

required

object (workflowSettings)

(string or null) or (object or null)

### Responses

https://docs.n8n.io/api/v1/workflows/{id}

### Request samples

*   Payload

Content type

application/json

 

`{  *   "name": "Workflow 1",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           }                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   }       }`

### Response samples

*   200

Content type

application/json

 

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Workflow 1",      *   "active": true,      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           },                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   },      *   "tags": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Production",                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ]       }`

## [](#tag/Workflow/paths/~1workflows~1{id}~1activate/post)Activate a workflow

Active a workflow.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

### Responses

https://docs.n8n.io/api/v1/workflows/{id}/activate

### Response samples

*   200

Content type

application/json

 

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Workflow 1",      *   "active": true,      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           },                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   },      *   "tags": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Production",                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ]       }`

## [](#tag/Workflow/paths/~1workflows~1{id}~1deactivate/post)Deactivate a workflow

Deactivate a workflow.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

### Responses

https://docs.n8n.io/api/v1/workflows/{id}/deactivate

### Response samples

*   200

Content type

application/json

 

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Workflow 1",      *   "active": true,      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z",      *   "nodes": [          *   {                  *   "id": "0f5532f9-36ba-4bef-86c7-30d607400b15",                      *   "name": "Jira",                      *   "webhookId": "string",                      *   "disabled": true,                      *   "notesInFlow": true,                      *   "notes": "string",                      *   "type": "n8n-nodes-base.Jira",                      *   "typeVersion": 1,                      *   "executeOnce": false,                      *   "alwaysOutputData": false,                      *   "retryOnFail": false,                      *   "maxTries": 0,                      *   "waitBetweenTries": 0,                      *   "continueOnFail": false,                      *   "onError": "stopWorkflow",                      *   "position": [                          *   -100,                              *   80                                           ],                      *   "parameters": {                          *   "additionalProperties": { }                                           },                      *   "credentials": {                          *   "jiraSoftwareCloudApi": {                                  *   "id": "35",                                      *   "name": "jiraApi"                                                       }                                           },                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ],      *   "connections": {          *   "main": [                  *   {                          *   "node": "Jira",                              *   "type": "main",                              *   "index": 0                                           }                               ]                   },      *   "settings": {          *   "saveExecutionProgress": true,              *   "saveManualExecutions": true,              *   "saveDataErrorExecution": "all",              *   "saveDataSuccessExecution": "all",              *   "executionTimeout": 3600,              *   "errorWorkflow": "VzqKEW0ShTXA5vPj",              *   "timezone": "America/New_York",              *   "executionOrder": "v1"                   },      *   "staticData": {          *   "lastId": 1                   },      *   "tags": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Production",                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ]       }`

## [](#tag/Workflow/paths/~1workflows~1{id}~1transfer/put)Transfer a workflow to another project.

Transfer a workflow to another project.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

##### Request Body schema: application/json

required

Destination project information for the workflow transfer.

destinationProjectId

required

string

The ID of the project to transfer the workflow to.

### Responses

https://docs.n8n.io/api/v1/workflows/{id}/transfer

### Request samples

*   Payload

Content type

application/json

`{  *   "destinationProjectId": "string"       }`

## [](#tag/Workflow/paths/~1credentials~1{id}~1transfer/put)Transfer a credential to another project.

Transfer a credential to another project.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the credential.

##### Request Body schema: application/json

required

Destination project for the credential transfer.

destinationProjectId

required

string

The ID of the project to transfer the credential to.

### Responses

https://docs.n8n.io/api/v1/credentials/{id}/transfer

### Request samples

*   Payload

Content type

application/json

`{  *   "destinationProjectId": "string"       }`

## [](#tag/Workflow/paths/~1workflows~1{id}~1tags/get)Get workflow tags

Get workflow tags.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

### Responses

https://docs.n8n.io/api/v1/workflows/{id}/tags

### Response samples

*   200

Content type

application/json

 

`[  *   {          *   "id": "2tUt1wbLX592XDdX",              *   "name": "Production",              *   "createdAt": "2019-08-24T14:15:22Z",              *   "updatedAt": "2019-08-24T14:15:22Z"                   }       ]`

## [](#tag/Workflow/paths/~1workflows~1{id}~1tags/put)Update tags of a workflow

Update tags of a workflow.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the workflow.

##### Request Body schema: application/json

required

List of tags

Array

id

required

string

### Responses

https://docs.n8n.io/api/v1/workflows/{id}/tags

### Request samples

*   Payload

Content type

application/json

 

`[  *   {          *   "id": "2tUt1wbLX592XDdX"                   }       ]`

### Response samples

*   200

Content type

application/json

 

`[  *   {          *   "id": "2tUt1wbLX592XDdX",              *   "name": "Production",              *   "createdAt": "2019-08-24T14:15:22Z",              *   "updatedAt": "2019-08-24T14:15:22Z"                   }       ]`

## [](#tag/Credential)Credential

Operations about credentials

## [](#tag/Credential/paths/~1credentials/post)Create a credential

Creates a credential that can be used by nodes of the specified type.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Credential to be created.

name

required

string

type

required

string

data

required

object

### Responses

https://docs.n8n.io/api/v1/credentials

### Request samples

*   Payload

Content type

application/json

 

`{  *   "name": "Joe's Github Credentials",      *   "type": "github",      *   "data": {          *   "token": "ada612vad6fa5df4adf5a5dsf4389adsf76da7s"                   }       }`

### Response samples

*   200

Content type

application/json

`{  *   "id": "vHxaz5UaCghVYl9C",      *   "name": "John's Github account",      *   "type": "github",      *   "createdAt": "2022-04-29T11:02:29.842Z",      *   "updatedAt": "2022-04-29T11:02:29.842Z"       }`

## [](#tag/Credential/operation/deleteCredential)Delete credential by ID

Deletes a credential from your instance. You must be the owner of the credentials

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The credential ID that needs to be deleted

### Responses

https://docs.n8n.io/api/v1/credentials/{id}

### Response samples

*   200

Content type

application/json

`{  *   "id": "R2DjclaysHbqn778",      *   "name": "Joe's Github Credentials",      *   "type": "github",      *   "createdAt": "2022-04-29T11:02:29.842Z",      *   "updatedAt": "2022-04-29T11:02:29.842Z"       }`

## [](#tag/Credential/paths/~1credentials~1schema~1{credentialTypeName}/get)Show credential data schema

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

credentialTypeName

required

string

The credential type name that you want to get the schema for

### Responses

https://docs.n8n.io/api/v1/credentials/schema/{credentialTypeName}

### Response samples

*   200

Content type

application/json

Example

freshdeskApi

 

`{  *   "additionalProperties": false,      *   "type": "object",      *   "properties": {          *   "apiKey": {                  *   "type": "string"                               },              *   "domain": {                  *   "type": "string"                               }                   },      *   "required": [          *   "apiKey",              *   "domain"                   ]       }`

## [](#tag/Tags)Tags

Operations about tags

## [](#tag/Tags/paths/~1tags/post)Create a tag

Create a tag in your instance.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Created tag object.

name

required

string

### Responses

https://docs.n8n.io/api/v1/tags

### Request samples

*   Payload

Content type

application/json

`{  *   "name": "Production"       }`

### Response samples

*   201

Content type

application/json

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Production",      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z"       }`

## [](#tag/Tags/paths/~1tags/get)Retrieve all tags

Retrieve all tags from your instance.

##### Authorizations:

_ApiKeyAuth_

##### query Parameters

limit

number <= 250

Default: 100

Example: limit=100

The maximum number of items to return.

cursor

string

Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.

### Responses

https://docs.n8n.io/api/v1/tags

### Response samples

*   200

Content type

application/json

 

`{  *   "data": [          *   {                  *   "id": "2tUt1wbLX592XDdX",                      *   "name": "Production",                      *   "createdAt": "2019-08-24T14:15:22Z",                      *   "updatedAt": "2019-08-24T14:15:22Z"                               }                   ],      *   "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"       }`

## [](#tag/Tags/paths/~1tags~1{id}/get)Retrieves a tag

Retrieves a tag.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the tag.

### Responses

https://docs.n8n.io/api/v1/tags/{id}

### Response samples

*   200

Content type

application/json

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Production",      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z"       }`

## [](#tag/Tags/paths/~1tags~1{id}/delete)Delete a tag

Deletes a tag.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the tag.

### Responses

https://docs.n8n.io/api/v1/tags/{id}

### Response samples

*   200

Content type

application/json

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Production",      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z"       }`

## [](#tag/Tags/paths/~1tags~1{id}/put)Update a tag

Update a tag.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the tag.

##### Request Body schema: application/json

required

Updated tag object.

name

required

string

### Responses

https://docs.n8n.io/api/v1/tags/{id}

### Request samples

*   Payload

Content type

application/json

`{  *   "name": "Production"       }`

### Response samples

*   200

Content type

application/json

`{  *   "id": "2tUt1wbLX592XDdX",      *   "name": "Production",      *   "createdAt": "2019-08-24T14:15:22Z",      *   "updatedAt": "2019-08-24T14:15:22Z"       }`

## [](#tag/SourceControl)SourceControl

Operations about source control

## [](#tag/SourceControl/paths/~1source-control~1pull/post)Pull changes from the remote repository

Requires the Source Control feature to be licensed and connected to a repository.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Pull options

force

boolean

variables

object

### Responses

https://docs.n8n.io/api/v1/source-control/pull

### Request samples

*   Payload

Content type

application/json

 

`{  *   "force": true,      *   "variables": {          *   "foo": "bar"                   }       }`

### Response samples

*   200

Content type

application/json

 

`{  *   "variables": {          *   "added": [                  *   "string"                               ],              *   "changed": [                  *   "string"                               ]                   },      *   "credentials": [          *   {                  *   "id": "string",                      *   "name": "string",                      *   "type": "string"                               }                   ],      *   "workflows": [          *   {                  *   "id": "string",                      *   "name": "string"                               }                   ],      *   "tags": {          *   "tags": [                  *   {                          *   "id": "string",                              *   "name": "string"                                           }                               ],              *   "mappings": [                  *   {                          *   "workflowId": "string",                              *   "tagId": "string"                                           }                               ]                   }       }`

## [](#tag/Variables)Variables

Operations about variables

## [](#tag/Variables/paths/~1variables/post)Create a variable

Create a variable in your instance.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Payload for variable to create.

key

required

string

value

required

string

### Responses

https://docs.n8n.io/api/v1/variables

### Request samples

*   Payload

Content type

application/json

`{  *   "key": "string",      *   "value": "test"       }`

## [](#tag/Variables/paths/~1variables/get)Retrieve variables

Retrieve variables from your instance.

##### Authorizations:

_ApiKeyAuth_

##### query Parameters

limit

number <= 250

Default: 100

Example: limit=100

The maximum number of items to return.

cursor

string

Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.

### Responses

https://docs.n8n.io/api/v1/variables

### Response samples

*   200

Content type

application/json

 

`{  *   "data": [          *   {                  *   "id": "string",                      *   "key": "string",                      *   "value": "test",                      *   "type": "string"                               }                   ],      *   "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"       }`

## [](#tag/Variables/paths/~1variables~1{id}/delete)Delete a variable

Delete a variable from your instance.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the variable.

### Responses

https://docs.n8n.io/api/v1/variables/{id}

## [](#tag/Variables/paths/~1variables~1{id}/put)Update a variable

Update a variable from your instance.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

id

required

string

The ID of the variable.

##### Request Body schema: application/json

required

Updated variable object.

key

required

string

value

required

string

### Responses

https://docs.n8n.io/api/v1/variables/{id}

### Request samples

*   Payload

Content type

application/json

`{  *   "key": "string",      *   "value": "test"       }`

## [](#tag/Projects)Projects

Operations about projects

## [](#tag/Projects/paths/~1projects/post)Create a project

Create a project in your instance.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Payload for project to create.

name

required

string

### Responses

https://docs.n8n.io/api/v1/projects

### Request samples

*   Payload

Content type

application/json

`{  *   "name": "string"       }`

## [](#tag/Projects/paths/~1projects/get)Retrieve projects

Retrieve projects from your instance.

##### Authorizations:

_ApiKeyAuth_

##### query Parameters

limit

number <= 250

Default: 100

Example: limit=100

The maximum number of items to return.

cursor

string

Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first "page" of the collection. See pagination for more detail.

### Responses

https://docs.n8n.io/api/v1/projects

### Response samples

*   200

Content type

application/json

 

`{  *   "data": [          *   {                  *   "id": "string",                      *   "name": "string",                      *   "type": "string"                               }                   ],      *   "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"       }`

## [](#tag/Projects/paths/~1projects~1{projectId}/delete)Delete a project

Delete a project from your instance.

##### Authorizations:

_ApiKeyAuth_

##### path Parameters

projectId

required

string

The ID of the project.

### Responses

https://docs.n8n.io/api/v1/projects/{projectId}

## [](#tag/Project)Project

## [](#tag/Project/paths/~1projects~1{projectId}/put)Update a project

Update a project.

##### Authorizations:

_ApiKeyAuth_

##### Request Body schema: application/json

required

Updated project object.

name

required

string

### Responses

https://docs.n8n.io/api/v1/projects/{projectId}

### Request samples

*   Payload

Content type

application/json

`{  *   "name": "string"       }`