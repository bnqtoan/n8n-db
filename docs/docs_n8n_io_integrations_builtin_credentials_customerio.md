[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/customerio.md "Edit this page")

# Customer.io credentials[#](#customerio-credentials "Permanent link")

You can use these credentials to authenticate the following nodes with Customer.io.

*   [Customer.io](../../app-nodes/n8n-nodes-base.customerio/)
*   [Customer.io Trigger](../../trigger-nodes/n8n-nodes-base.customeriotrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Customer.io](https://customer.io/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API Key

## Related resources[#](#related-resources "Permanent link")

Refer to [Customer.io's summary API documentation](https://customer.io/docs/api/?api=journeys) for more information about the service.

For detailed API reference documentation for each API, refer to the [Track API documentation](https://customer.io/docs/api/track/) and the [App API documentation](https://customer.io/docs/api/app/).

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   A **Tracking API Key**: For use with the [Track API](https://customer.io/docs/api/track/) at `https://track.customer.io/api/v1/`. See the FAQs below for more details.
*   Your **Region**: Customer.io uses different API subdomains depending on the region you select. Options include:
    *   **Global region**: Keeps the default URLs for both APIs; for use in all non-EU countries/regions.
    *   **EU region**: Adjusts the Track API subdomain to `track-eu` and the App API subdomain to `api-eu`; only use this if you are in the EU.
*   A **Tracking Site ID**: Required with your **Tracking API Key**
*   An **App API Key**: For use with the [App API](https://customer.io/docs/api/app/) at `https://api.customer.io/v1/api/`. See the FAQs below for more details.

Refer to the [Customer.io Finding and managing your API credentials documentation](https://customer.io/docs/accounts-and-workspaces/managing-credentials/) for instructions on creating both Tracking API and App API keys.

## Why you need a Tracking API Key and an App API Key[#](#why-you-need-a-tracking-api-key-and-an-app-api-key "Permanent link")

Customer.io has two different API endpoints and generates and stores the keys for each slightly differently:

*   The [Track API](https://customer.io/docs/api/track/) at `https://track.customer.io/api/v1/`
*   The [App API](https://customer.io/docs/api/app/) at `https://api.customer.io/v1/api/`

The Track API requires a Tracking Site ID; the App API doesn't.

Based on the operation you want to perform, n8n uses the correct API key and its corresponding endpoint.