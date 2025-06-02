[](https://github.com/n8n-io/n8n-docs/edit/main/docs/embed/managing-workflows.md "Edit this page")

# Workflow management in Embed[#](#workflow-management-in-embed "Permanent link")

Feature availability

Embed requires an embed license. For more information about when to use Embed, as well as costs and licensing processes, refer to [Embed](https://n8n.io/embed/) on the n8n website.

When managing an embedded n8n deployment, spanning across teams or organizations, you will likely need to run the same (or similar) workflows for multiple users. There are two available options for doing so:

Solution

Pros

Cons

Create a workflow for each user

No limitation on how workflow starts (can use any trigger)

Requires managing multiple workflows.

Create a single workflow, and pass it user credentials when executing

Simplified workflow management (only need to change one workflow).

To run the workflow, your product must call it

Warning

The APIs referenced in this document are subject to change at any time. Be sure the check for continued functionality with each version upgrade.

## Workflow per user[#](#workflow-per-user "Permanent link")

There are three general steps to follow:

*   Obtain the credentials for each user, and any additional parameters that may be required based on the workflow.
*   Create the [n8n credentials](../../glossary/#credential-n8n) for this user.
*   Create the workflow.

### 1\. Obtain user credentials[#](#1-obtain-user-credentials "Permanent link")

Here you need to capture all credentials for any node/service this user must authenticate with, along with any additional parameters required for the particular workflow. The credentials and any parameters needed will depend on your workflow and what you are trying to do.

### 2\. Create user credentials[#](#2-create-user-credentials "Permanent link")

After all relevant credential details have been obtained, you can proceed to create the relevant service credentials in n8n. This can be done using the Editor UI or API call.

#### Using the Editor UI[#](#using-the-editor-ui "Permanent link")

1.  From the menu select **Credentials** > **New**.
2.  Use the drop-down to select the **Credential type** to create, for example _Airtable_. [![Create New Credentials drop-down](../../_images/embed/managing-workflows/create_new_credentials.png)](https://docs.n8n.io/_images/embed/managing-workflows/create_new_credentials.png)
3.  In the **Create New Credentials** modal, enter the corresponding credentials details for the user, and select the nodes that will have access to these credentials. [![Create New Credentials modal](../../_images/embed/managing-workflows/create_new_credentials2.png)](https://docs.n8n.io/_images/embed/managing-workflows/create_new_credentials2.png)
4.  Click **Create** to finish and save.

#### Using the API[#](#using-the-api "Permanent link")

The frontend API used by the Editor UI can also be called to achieve the same result. The API endpoint is in the format: `https://<n8n-domain>/rest/credentials`.

For example, to create the credentials in the Editor UI example above, the request would be:

1

`POST https://<n8n-domain>/rest/credentials`

With the request body:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12

`{    "name":"MyAirtable",    "type":"airtableApi",    "nodesAccess":[       {          "nodeType":"n8n-nodes-base.airtable"       }    ],    "data":{       "apiKey":"q12we34r5t67yu"    } }`

The response will contain the ID of the new credentials, which you will use when creating the workflow for this user:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18

`{    "data":{       "name":"MyAirtable",       "type":"airtableApi",       "data":{          "apiKey":"q12we34r5t67yu"       },       "nodesAccess":[          {             "nodeType":"n8n-nodes-base.airtable",             "date":"2021-09-10T07:41:27.770Z"          }       ],       "id":"29",       "createdAt":"2021-09-10T07:41:27.777Z",       "updatedAt":"2021-09-10T07:41:27.777Z"    } }`

### 3\. Create the workflow[#](#3-create-the-workflow "Permanent link")

Best practice is to have a “base” workflow that you then duplicate and customize for each new user with their credentials (and any other details).

You can duplicate and customize your template workflow using either the Editor UI or API call.

#### Using the Editor UI[#](#using-the-editor-ui_1 "Permanent link")

1.  From the menu select **Workflows** > **Open** to open the template workflow to be duplicated.
    
2.  Select **Workflows** > **Duplicate**, then enter a name for this new workflow and click **Save**. [![Duplicate workflow](../../_images/embed/managing-workflows/duplicate_workflow.png)](https://docs.n8n.io/_images/embed/managing-workflows/duplicate_workflow.png)
    
3.  Update all relevant nodes to use the credentials for this user (created above).
    
4.  **Save** this workflow set it to **Active** using the toggle in the top-right corner.
    

#### Using the API[#](#using-the-api_1 "Permanent link")

1.  Fetch the JSON of the template workflow using the endpoint: `https://<n8n-domain>/rest/workflows/<workflow_id>`
    
    1
    
    `GET https://<n8n-domain>/rest/workflows/1012`
    

The response will contain the JSON data of the selected workflow:

  1
  2
  3
  4
  5
  6
  7
  8
  9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 43
 44
 45
 46
 47
 48
 49
 50
 51
 52
 53
 54
 55
 56
 57
 58
 59
 60
 61
 62
 63
 64
 65
 66
 67
 68
 69
 70
 71
 72
 73
 74
 75
 76
 77
 78
 79
 80
 81
 82
 83
 84
 85
 86
 87
 88
 89
 90
 91
 92
 93
 94
 95
 96
 97
 98
 99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228

`{   "data": {     "id": "1012",     "name": "Nathan's Workflow",     "active": false,     "nodes": [       {         "parameters": {},         "name": "Start",         "type": "n8n-nodes-base.start",         "typeVersion": 1,         "position": [           130,           640         ]       },       {         "parameters": {           "authentication": "headerAuth",           "url": "https://internal.users.n8n.cloud/webhook/custom-erp",           "options": {             "splitIntoItems": true           },           "headerParametersUi": {             "parameter": [               {                 "name": "unique_id",                 "value": "recLhLYQbzNSFtHNq"               }             ]           }         },         "name": "HTTP Request",         "type": "n8n-nodes-base.httpRequest",         "typeVersion": 1,         "position": [           430,           300         ],         "credentials": {           "httpHeaderAuth": "beginner_course"         }       },       {         "parameters": {           "operation": "append",           "application": "appKBGQfbm6NfW6bv",           "table": "processingOrders",           "options": {}         },         "name": "Airtable",         "type": "n8n-nodes-base.airtable",         "typeVersion": 1,         "position": [           990,           210         ],         "credentials": {           "airtableApi": "Airtable"         }       },       {         "parameters": {           "conditions": {             "string": [               {                 "value1": "={{$json[\"orderStatus\"]}}",                 "value2": "processing"               }             ]           }         },         "name": "IF",         "type": "n8n-nodes-base.if",         "typeVersion": 1,         "position": [           630,           300         ]       },       {         "parameters": {           "keepOnlySet": true,           "values": {             "number": [               {                 "name": "=orderId",                 "value": "={{$json[\"orderID\"]}}"               }             ],             "string": [               {                 "name": "employeeName",                 "value": "={{$json[\"employeeName\"]}}"               }             ]           },           "options": {}         },         "name": "Set",         "type": "n8n-nodes-base.set",         "typeVersion": 1,         "position": [           800,           210         ]       },       {         "parameters": {           "functionCode": "let totalBooked = items.length;\nlet bookedSum = 0;\n\nfor(let i=0; i < items.length; i++) {\n  bookedSum = bookedSum + items[i].json.orderPrice;\n}\nreturn [{json:{totalBooked, bookedSum}}]\n"         },         "name": "Function",         "type": "n8n-nodes-base.function",         "typeVersion": 1,         "position": [           800,           400         ]       },       {         "parameters": {           "webhookUri": "https://discord.com/api/webhooks/865213348202151968/oD5_WPDQwtr22Vjd_82QP3-_4b_lGhAeM7RynQ8Js5DzyXrQEnj0zeAQIA6fki1JLtXE",           "text": "=This week we have {{$json[\"totalBooked\"]}} booked orders with a total value of {{$json[\"bookedSum\"]}}. My Unique ID: {{$node[\"HTTP Request\"].parameter[\"headerParametersUi\"][\"parameter\"][0][\"value\"]}}"         },         "name": "Discord",         "type": "n8n-nodes-base.discord",         "typeVersion": 1,         "position": [           1000,           400         ]       },       {         "parameters": {           "triggerTimes": {             "item": [               {                 "mode": "everyWeek",                 "hour": 9               }             ]           }         },         "name": "Cron",         "type": "n8n-nodes-base.cron",         "typeVersion": 1,         "position": [           220,           300         ]       }     ],     "connections": {       "HTTP Request": {         "main": [           [             {               "node": "IF",               "type": "main",               "index": 0             }           ]         ]       },       "Start": {         "main": [           []         ]       },       "IF": {         "main": [           [             {               "node": "Set",               "type": "main",               "index": 0             }           ],           [             {               "node": "Function",               "type": "main",               "index": 0             }           ]         ]       },       "Set": {         "main": [           [             {               "node": "Airtable",               "type": "main",               "index": 0             }           ]         ]       },       "Function": {         "main": [           [             {               "node": "Discord",               "type": "main",               "index": 0             }           ]         ]       },       "Cron": {         "main": [           [             {               "node": "HTTP Request",               "type": "main",               "index": 0             }           ]         ]       }     },     "createdAt": "2021-07-16T11:15:46.066Z",     "updatedAt": "2021-07-16T12:05:44.045Z",     "settings": {},     "staticData": null,     "tags": []   } }`

1.  Save the returned JSON data and update any relevant credentials and fields for the new user.
    
2.  Create a new workflow using the updated JSON as the request body at endpoint: `https://<n8n-domain>/rest/workflows`
    
    1
    
    `POST https://<n8n-domain>/rest/workflows/`
    

The response will contain the ID of the new workflow, which you will use in the next step.

1.  Lastly, activate the new workflow:
    
    1
    
    `PATCH https://<n8n-domain>/rest/workflows/1012`
    

Passing the additional value `active` in your JSON payload:

1
2
3
4
5

`// ... "active":true, "settings": {}, "staticData": null, "tags": []`

## Single workflow[#](#single-workflow "Permanent link")

There are four steps to follow to implement this method:

*   Obtain the credentials for each user, and any additional parameters that may be required based on the workflow. See [Obtain user credentials](#1-obtain-user-credentials) above.
*   Create the n8n credentials for this user. See [Create user credentials](#2-create-user-credentials) above.
*   Create the workflow.
*   Call the workflow as needed.

### Create the workflow[#](#create-the-workflow "Permanent link")

The details and scope of this workflow will vary greatly according to the individual use case, however there are a few design implementations to keep in mind:

*   This workflow must be triggered by a [Webhook](../../integrations/builtin/core-nodes/n8n-nodes-base.webhook/) node.
*   The incoming webhook call must contain the user’s credentials and any other workflow parameters required.
*   Each node where the user’s credentials are needed should use an [expression](../../code/expressions/) so that the node’s credential field reads the credential provided in the webhook call.
*   Save and activate the workflow, ensuring the production URL is selected for the Webhook node. Refer to [webhook node](../../integrations/builtin/core-nodes/n8n-nodes-base.webhook/) for more information.

### Call the workflow[#](#call-the-workflow "Permanent link")

For each new user, or for any existing user as may be needed, call the webhook defined as the workflow trigger and provide the necessary credentials (and any other workflow parameters).