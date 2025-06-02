[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/securing/telemetry-opt-out.md "Edit this page")

# Data collection[#](#data-collection "Permanent link")

n8n collects some anonymous data from self-hosted n8n installations. Use the instructions below to opt out of data telemetry collection.

## Collected data[#](#collected-data "Permanent link")

Refer to [Privacy | Data collection in self-hosted n8n](../../../privacy-security/privacy/#data-collection-in-self-hosted-n8n) for details on the data n8n collects.

## How collection works[#](#how-collection-works "Permanent link")

Your n8n instance sends most data to n8n as the events that generate it occur. Workflow execution counts and an instance pulse are sent periodically (every 6 hours). These data types mostly fall into n8n telemetry collection.

## Opting out of data collection[#](#opting-out-of-data-collection "Permanent link")

n8n enables telemetry collection by default. To disable it, configure the following environment variables.

### Opt out of telemetry events[#](#opt-out-of-telemetry-events "Permanent link")

To opt out of telemetry events, set the `N8N_DIAGNOSTICS_ENABLED` environment variable to false, for example:

1

`export N8N_DIAGNOSTICS_ENABLED=false`

### Opt out of checking for new versions of n8n[#](#opt-out-of-checking-for-new-versions-of-n8n "Permanent link")

To opt out of checking for new versions of n8n, set the `N8N_VERSION_NOTIFICATIONS_ENABLED` environment variable to false, for example:

1

`export N8N_VERSION_NOTIFICATIONS_ENABLED=false`

## Disable all connection to n8n servers[#](#disable-all-connection-to-n8n-servers "Permanent link")

If you want to fully prevent all communication with n8n's servers, refer to [Isolate n8n](../../configuration/configuration-examples/isolation/).

## Related resources[#](#related-resources "Permanent link")

Refer to [Deployment environment variables](../../configuration/environment-variables/deployment/) for more information on these environment variables.

Refer to [Configuration](../../configuration/configuration-methods/) for more information on setting environment variables.