[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/logging-monitoring/monitoring.md "Edit this page")

# Monitoring[#](#monitoring "Permanent link")

There are three API endpoints you can call to check the status of your instance: `/healthz`, `healthz/readiness`, and `/metrics`.

## healthz and healthz/readiness[#](#healthz-and-healthzreadiness "Permanent link")

The `/healthz` endpoint returns a standard HTTP status code. 200 indicates the instance is reachable. It doesn't indicate DB status. It's available for both self-hosted and Cloud users.

Access the endpoint:

1

`<your-instance-url>/healthz`

The `/healthz/readiness` endpoint is similar to the `/healthz` endpoint, but it returns a HTTP status code of 200 if the DB is connected and migrated and therefore the instance is ready to accept traffic.

Access the endpoint:

1

`<your-instance-url>/healthz/readiness`

## metrics[#](#metrics "Permanent link")

The `/metrics` endpoint provides more detailed information about the current status of the instance.

Access the endpoint:

1

`<your-instance-url>/metrics`

Feature availability

The `/metrics` endpoint isn't available on n8n Cloud.

## Enable metrics and healthz for self-hosted n8n[#](#enable-metrics-and-healthz-for-self-hosted-n8n "Permanent link")

The `/metrics` and `/healthz` endpoints are disabled by default. To enable them, configure your n8n instance:

1
2
3
4

`# metrics N8N_METRICS=true # healthz QUEUE_HEALTH_CHECK_ACTIVE=true`

Refer to [Configuration methods](../../configuration/configuration-methods/) for more information on how to configure your instance using environment variables.