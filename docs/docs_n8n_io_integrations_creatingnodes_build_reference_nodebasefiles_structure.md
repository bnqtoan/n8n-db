[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-base-files/structure.md "Edit this page")

# Structure of the node base file[#](#structure-of-the-node-base-file "Permanent link")

The node base file follows this basic structure:

1.  Add import statements.
2.  Create a class for the node.
3.  Within the node class, create a `description` object, which defines the node.

A programmatic-style node also has an `execute()` method, which reads incoming data and parameters, then builds a request. The declarative style handles this using the `routing` key in the `properties` object, within `descriptions`.

## Outline structure for a declarative-style node[#](#outline-structure-for-a-declarative-style-node "Permanent link")

This code snippet gives an outline of the node structure.

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

`import { INodeType, INodeTypeDescription } from 'n8n-workflow';  export class ExampleNode implements INodeType { 	description: INodeTypeDescription = { 		// Basic node details here 		properties: [ 			// Resources and operations here 		] 	}; }`

Refer to [Standard parameters](../standard-parameters/) for information on parameters available to all node types. Refer to [Declarative-style parameters](../declarative-style-parameters/) for the parameters available for declarative-style nodes.

## Outline structure for a programmatic-style node[#](#outline-structure-for-a-programmatic-style-node "Permanent link")

This code snippet gives an outline of the node structure.

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

`import { IExecuteFunctions } from 'n8n-core'; import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';  export class ExampleNode implements INodeType { 	description: INodeTypeDescription = {     // Basic node details here     properties: [       // Resources and operations here     ]   };    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {     // Process data and return   } };`

Refer to [Standard parameters](../standard-parameters/) for information on parameters available to all node types. Refer to [Programmatic-style parameters](../programmatic-style-parameters/) and [Programmatic-style execute method](../programmatic-style-execute-method/) for more information on working with programmatic-style nodes.