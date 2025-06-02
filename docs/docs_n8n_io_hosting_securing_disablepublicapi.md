[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/securing/disable-public-api.md "Edit this page")

# Disable the public REST API[#](#disable-the-public-rest-api "Permanent link")

The [n8n public REST API](../../../api/) allows you to programmatically perform many of the same tasks as you can in the n8n GUI.

If you don't plan on using this API, n8n recommends disabling it to improve the security of your n8n installation.

To disable the [public REST API](../../../api/), set the `N8N_PUBLIC_API_DISABLED` environment variable to `true`, for example:

1

`export N8N_PUBLIC_API_DISABLED=true`

## Disable the API playground[#](#disable-the-api-playground "Permanent link")

To disable the [API playground](../../../api/using-api-playground/), set the `N8N_PUBLIC_API_SWAGGERUI_DISABLED` environment variable to `true`, for example:

1

`export N8N_PUBLIC_API_SWAGGERUI_DISABLED=true`

## Related resources[#](#related-resources "Permanent link")

Refer to [Deployment environment variables](../../configuration/environment-variables/deployment/) for more information on these environment variables.

Refer to [Configuration](../../configuration/configuration-methods/) for more information on setting environment variables.