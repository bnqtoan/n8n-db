[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/cookbook/code-node/number-items-last-node.md "Edit this page")

# Get number of items returned by the previous node[#](#get-number-of-items-returned-by-the-previous-node "Permanent link")

To get the number of items returned by the previous node:

[JavaScript](#__tabbed_1_1)[Python](#__tabbed_1_2)

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

`if (Object.keys(items[0].json).length === 0) { return [ 	{ 		json: { 			results: 0, 		} 	} ] } return [ 	{ 		json: { 			results: items.length, 		} 	} ];`

The output will be similar to the following.

1
2
3
4
5

`[ 	{ 		"results": 8 	} ]`

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

`if len(items[0].json) == 0: 	return [ 		{ 			"json": { 				"results": 0, 			} 		} 	] else: 	return [ 		{ 			"json": { 				"results": items.length, 			} 		} 	]`

The output will be similar to the following.

1
2
3
4
5

`[ 	{ 		"results": 8 	} ]`