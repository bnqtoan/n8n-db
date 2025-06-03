[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/elasticsecurity.md "Edit this page")

# Elastic Security credentials[#](#elastic-security-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Elastic Security](../../app-nodes/n8n-nodes-base.elasticsecurity/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create an [Elastic Security](https://www.elastic.co/security) account.
*   [Deploy](https://www.elastic.co/guide/en/cloud/current/ec-create-deployment.html) an application.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth
*   API Key

## Related resources[#](#related-resources "Permanent link")

Refer to [Elastic Security's documentation](https://www.elastic.co/guide/en/security/current/es-overview.html) for more information about the service.

## Using basic auth[#](#using-basic-auth "Permanent link")

To configure this credential, you'll need:

*   A **Username**: For the user account you log into Elasticsearch with.
*   A **Password**: For the user account you log into Elasticsearch with.
*   Your Elasticsearch application's **Base URL** (also known as the Elasticsearch application endpoint):
    
    1.  In Elasticsearch, select the option to **Manage this deployment**.
    2.  In the **Applications** section, copy the endpoint of the **Elasticsearch** application.
    3.  Add this in n8n as the **Base URL**.

Custom endpoint aliases

If you add a [custom endpoint alias](https://www.elastic.co/guide/en/cloud/current/ec-regional-deployment-aliases.html) to a deployment, update your n8n credential **Base URL** with the new endpoint.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: For the user account you log into Elasticsearch with. Refer to Elasticsearch's [Create API key documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/security-api-create-api-key.html) for more information.
*   Your Elasticsearch application's **Base URL** (also known as the Elasticsearch application endpoint):
    
    1.  In Elasticsearch, select the option to **Manage this deployment**.
    2.  In the **Applications** section, copy the endpoint of the **Elasticsearch** application.
    3.  Add this in n8n as the **Base URL**.