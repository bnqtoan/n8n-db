[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-base-files/declarative-style-parameters.md "Edit this page")

# Declarative-style parameters[#](#declarative-style-parameters "Permanent link")

These are the parameters available for [node base file](../) of declarative-style nodes.

This document gives short code snippets to help understand the code structure and concepts. For a full walk-through of building a node, including real-world code examples, refer to [Build a declarative-style node](../../../declarative-style-node/).

Refer to [Standard parameters](../standard-parameters/) for parameters available to all nodes.

## `methods` and `loadOptions`[#](#methods-and-loadoptions "Permanent link")

_Object_ | _Optional_

`methods` contains the `loadOptions` object. You can use `loadOptions` to query the service to get user-specific settings, then return them and render them in the GUI so the user can include them in subsequent queries. The object must include routing information for how to query the service, and output settings that define how to handle the returned options. For example:

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

`methods : { 	loadOptions: { 		routing: { 			request: { 				url: '/webhook/example-option-parameters', 				method: 'GET', 			}, 			output: { 				postReceive: [ 					{ 						// When the returned data is nested under another property 						// Specify that property key 						type: 'rootProperty', 						properties: { 							property: 'responseData', 						}, 					}, 					{ 						type: 'setKeyValue', 						properties: { 							name: '={{$responseItem.key}} ({{$responseItem.value}})', 							value: '={{$responseItem.value}}', 						}, 					}, 					{ 						// If incoming data is an array of objects, sort alphabetically by key 						type: 'sort', 						properties: { 							key: 'name', 						}, 					}, 				], 			}, 		}, 	} },`

## `routing`[#](#routing "Permanent link")

_Object_ | _Required_

`routing` is an object used within an `options` array in operations and input field objects. It contains the details of an API call.

The code example below comes from the [Declarative-style tutorial](../../../declarative-style-node/). It sets up an integration with a NASA API. It shows how to use `requestDefaults` to set up the basic API call details, and `routing` to add information for each operation.

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

`description: INodeTypeDescription = {   // Other node info here   requestDefaults: { 			baseURL: 'https://api.nasa.gov', 			url: '', 			headers: { 				Accept: 'application/json', 				'Content-Type': 'application/json', 			}, 		},     properties: [       // Resources here       {         displayName: 'Operation'         // Other operation details         options: [           {             name: 'Get'             value: 'get',             description: '',             routing: {               request: {                 method: 'GET',                 url: '/planetary/apod'               }             }           }         ]       }     ] }`

## `version`[#](#version "Permanent link")

_Number_ or _Array_ | _Optional_

If you have one version of your node, this can be a number. If you want to support more than one version, turn this into an array, containing numbers for each node version.

n8n supports two methods of node versioning, but declarative-style nodes must use the light versioning approach. Refer to [Node versioning](../../node-versioning/) for more information.