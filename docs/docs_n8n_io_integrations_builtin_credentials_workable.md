[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/workable.md "Edit this page")

# Workable credentials[#](#workable-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Workable Trigger](../../trigger-nodes/n8n-nodes-base.workabletrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Workable](https://www.workable.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Workable's API documentation](https://workable.readme.io/reference/generate-an-access-token) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   A **Subdomain**: Your Workable subdomain is the part of your Workable domain between `https://` and `.workable.com`. So if the full domain is `https://n8n.workable.com`, the subdomain is `n8n`. The subdomain is also displayed on your Workable **Company Profile** page.
*   An **Access Token**: Go to your **profile >** [**Integrations**](https://workable.com/backend/settings/integrations) **\> Apps** and select **Generate API token**. Refer to [Generate a new token](https://help.workable.com/hc/en-us/articles/115015785428-Generating-revoking-access-tokens-for-Workable-s-API#Generateanewtoken) for more information.
    
    Token scopes
    
    If you're using this credential with the [Workable Trigger](../../trigger-nodes/n8n-nodes-base.workabletrigger/) node, select the `r_candidates` and `r_jobs` scopes when you generate your token. If you're using this credential in other ways, select scopes that are relevant for your use case.
    
    Refer to [Supported API scopes](https://help.workable.com/hc/en-us/articles/115015785428-Generating-revoking-access-tokens-for-Workable-s-API#SupportedAPIscopes) for more information on scopes.