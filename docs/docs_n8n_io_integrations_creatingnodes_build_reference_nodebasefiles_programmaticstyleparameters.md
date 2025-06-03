[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-base-files/programmatic-style-parameters.md "Edit this page")

# Programmatic-style parameters[#](#programmatic-style-parameters "Permanent link")

These are the parameters available for [node base file](../) of programmatic-style nodes.

This document gives short code snippets to help understand the code structure and concepts. For a full walk-through of building a node, including real-world code examples, refer to [Build a programmatic-style node](../../../programmatic-style-node/).

Programmatic-style nodes also use the `execute()` method. Refer to [Programmatic-style execute method](../programmatic-style-execute-method/) for more information.

Refer to [Standard parameters](../standard-parameters/) for parameters available to all nodes.

## `defaultVersion`[#](#defaultversion "Permanent link")

_Number_ | _Optional_

Use `defaultVersion` when using the full versioning approach.

n8n support two methods of node versioning. Refer to [Node versioning](../../node-versioning/) for more information.

## `methods` and `loadOptions`[#](#methods-and-loadoptions "Permanent link")

_Object_ | _Optional_

Contains the `loadOptions` method for programmatic-style nodes. You can use this method to query the service to get user-specific settings (such as getting a user's email labels from Gmail), then return them and render them in the GUI so the user can include them in subsequent queries.

For example, n8n's [Gmail node](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Gmail/Gmail.node.ts) uses `loadOptions` to get all email labels:

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

	`methods = { 		loadOptions: { 			// Get all the labels and display them 			async getLabels( 				this: ILoadOptionsFunctions, 			): Promise<INodePropertyOptions[]> { 				const returnData: INodePropertyOptions[] = []; 				const labels = await googleApiRequestAllItems.call( 					this, 					'labels', 					'GET', 					'/gmail/v1/users/me/labels', 				); 				for (const label of labels) { 					const labelName = label.name; 					const labelId = label.id; 					returnData.push({ 						name: labelName, 						value: labelId, 					}); 				} 				return returnData; 			}, 		}, 	};`

## `version`[#](#version "Permanent link")

_Number_ or _Array_ | _Optional_

Use `version` when using the light versioning approach.

If you have one version of your node, this can be a number. If you want to support multiple versions, turn this into an array, containing numbers for each node version.

n8n support two methods of node versioning. Programmatic-style nodes can use either. Refer to [Node versioning](../../node-versioning/) for more information.