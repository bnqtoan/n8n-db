[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/http-node-variables.md "Edit this page")

# HTTP node variables[#](#http-node-variables "Permanent link")

Variables for working with HTTP node requests and responses when using pagination.

Refer to [HTTP Request](../../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) for guidance on using the HTTP node, including configuring pagination.

Refer to [HTTP Request node cookbook | Pagination](../../cookbook/http-node/pagination/) for example pagination configurations.

HTTP node only

These variables are for use in expressions in the HTTP node. You can't use them in other nodes.

Variable

Description

`$pageCount`

The pagination count. Tracks how many pages the node has fetched.

`$request`

The request object sent by the HTTP node.

`$response`

The response object from the HTTP call. Includes `$response.body`, `$response.headers`, and `$response.statusCode`. The contents of `body` and `headers` depend on the data sent by the API.