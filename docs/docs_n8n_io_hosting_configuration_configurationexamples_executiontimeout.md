[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/configuration-examples/execution-timeout.md "Edit this page")

# Configure workflow timeout settings[#](#configure-workflow-timeout-settings "Permanent link")

A workflow times out and gets canceled after this time (in seconds). If the workflow runs in the main process, a soft timeout happens (takes effect after the current node finishes). If a workflow runs in its own process, n8n attempts a soft timeout first, then kills the process after waiting for a fifth of the given timeout duration.

`EXECUTIONS_TIMEOUT` default is `-1`. For example, if you want to set the timeout to one hour:

1

`export EXECUTIONS_TIMEOUT=3600`

You can also set maximum execution time (in seconds) for each workflow individually. For example, if you want to set maximum execution time to two hours:

1

`export EXECUTIONS_TIMEOUT_MAX=7200`

Refer to [Environment variables reference](../../environment-variables/executions/) for more information on these variables.