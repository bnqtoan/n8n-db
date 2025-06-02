[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/configuration-examples/modules-in-code-node.md "Edit this page")

# Enable modules in Code node[#](#enable-modules-in-code-node "Permanent link")

For security reasons, the Code node restricts importing modules. It's possible to lift that restriction for built-in and external modules by setting the following environment variables:

*   `NODE_FUNCTION_ALLOW_BUILTIN`: For built-in modules
*   `NODE_FUNCTION_ALLOW_EXTERNAL`: For external modules sourced from n8n/node\_modules directory. External module support is disabled when an environment variable isn't set.

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

`# Allows usage of all builtin modules export NODE_FUNCTION_ALLOW_BUILTIN=*  # Allows usage of only crypto export NODE_FUNCTION_ALLOW_BUILTIN=crypto  # Allows usage of only crypto and fs export NODE_FUNCTION_ALLOW_BUILTIN=crypto,fs  # Allow usage of external npm modules. export NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash`

Refer to [Environment variables reference](../../environment-variables/nodes/) for more information on these variables.