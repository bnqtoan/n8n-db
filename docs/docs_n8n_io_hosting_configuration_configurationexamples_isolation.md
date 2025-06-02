[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/configuration-examples/isolation.md "Edit this page")

# Isolate n8n[#](#isolate-n8n "Permanent link")

By default, a self-hosted n8n instance sends data to n8n's servers. It notifies users about available updates, workflow templates, and diagnostics.

To prevent your n8n instance from connecting to n8n's servers, set these environment variables to false:

1
2
3

`N8N_DIAGNOSTICS_ENABLED=false N8N_VERSION_NOTIFICATIONS_ENABLED=false N8N_TEMPLATES_ENABLED=false`

Unset n8n's diagnostics configuration:

1
2
3

`EXTERNAL_FRONTEND_HOOKS_URLS= N8N_DIAGNOSTICS_CONFIG_FRONTEND= N8N_DIAGNOSTICS_CONFIG_BACKEND=`

Refer to [Environment variables reference](../../environment-variables/deployment/) for more information on these variables.