[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/common-issues.md "Edit this page")

# HTTP Request node common issues[#](#http-request-node-common-issues "Permanent link")

Here are some common errors and issues with the [HTTP Request node](../) and steps to resolve or troubleshoot them.

## Bad request - please check your parameters[#](#bad-request-please-check-your-parameters "Permanent link")

This error displays when the node receives a 400 error indicating a bad request. This error most often occurs because:

*   You're using an invalid name or value in a **Query Parameter**.
*   You're passing array values in a **Query Parameter** but the array isn't formatted correctly. Try using the [**Array Format in Query Parameters**](../#array-format-in-query-parameters) option.

Review the API documentation for your service to format your query parameters.

## The resource you are requesting could not be found[#](#the-resource-you-are-requesting-could-not-be-found "Permanent link")

This error displays when the endpoint **URL** you entered is invalid.

This may be due to a typo in the URL or a deprecated API. Refer to your service's API documentation to verify you have a valid endpoint.

## JSON parameter need to be an valid JSON[#](#json-parameter-need-to-be-an-valid-json "Permanent link")

This error displays when you've passed a parameter as JSON and it's not formatted as valid JSON.

To resolve, review the JSON you've entered for these issues:

*   Test your JSON in a JSON checker or syntax parser to find errors like missing quotation marks, extra or missing commas, incorrectly formatted arrays, extra or missing square brackets or curly brackets, and so on.
*   If you've used an **Expression** in the node, be sure you've wrapped the entire JSON in double curly brackets, for example:
    
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
    
    `{{     {     "myjson":     {         "name1": "value1",         "name2": "value2",         "array1":             ["value1","value2"]     }     } }}`
    

## Forbidden - perhaps check your credentials[#](#forbidden-perhaps-check-your-credentials "Permanent link")

This error displays when the node receives a 403 error indicating authentication failed.

To resolve, review the selected credentials and make sure you can authenticate with them. You may need to:

*   Update permissions or scopes so that your API key or account can perform the operation you've selected.
*   Format your generic credential in a different way.
*   Generate a new API key or token with the appropriate permissions or scopes.

## 429 - The service is receiving too many requests from you[#](#429-the-service-is-receiving-too-many-requests-from-you "Permanent link")

This error displays when the node receives a [429 error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) from the service that you're calling. This often means that you have hit the rate limits of that service. You can find out more on the [Handling API rate limits](../../../rate-limits/) page.

To resolve the error, you can use one of the built-in options of the HTTP request node:

### Batching[#](#batching "Permanent link")

Use this option to send requests in batches and introduce a delay between them.

1.  In the HTTP Request node, select **Add Option > Batching**.
2.  Set **Items per Batch** to the number of input items to include in each request.
3.  Set **Batch Interval (ms)** to introduce a delay between requests in milliseconds. For example, to send one request to an API per second, set **Batch Interval (ms)** to `1000`.

### Retry on Fail[#](#retry-on-fail "Permanent link")

Use this option to retry the node after a failed attempt.

1.  In the HTTP Request node, go to **Settings** and enable **Retry on Fail**.
2.  Set **Max Tries** to the maximum number of times n8n should retry the node.
3.  Set **Wait Between Tries (ms)** to the desired delay in milliseconds between retries. For example, to wait one second before retrying the request again, set **Wait Between Tries (ms)** to `1000`.