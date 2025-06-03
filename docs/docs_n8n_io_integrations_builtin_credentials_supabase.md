[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/supabase.md "Edit this page")

# Supabase credentials[#](#supabase-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Supabase](../../app-nodes/n8n-nodes-base.supabase/)
*   [Supabase Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoresupabase/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Supabase](https://supabase.com/dashboard/sign-up) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Supabase's API documentation](https://supabase.com/docs/guides/api) for more information about the service.

## Using access token[#](#using-access-token "Permanent link")

To configure this credential, you'll need:

*   A **Host**
*   A **Service Role Secret**

To generate your API Key:

1.  In your Supabase account, go to the **Dashboard** and create or select a project for which you want to create an API key.
2.  Go to [**Project Settings > API**](https://supabase.com/dashboard/project/_/settings/api) to see the API Settings for your project.
3.  Copy the **URL** from the **Project URL** section and enter it as your n8n **Host**. Refer to [API URL and keys](https://supabase.com/docs/guides/api#api-url-and-keys) for more detailed instruction.
4.  Reveal and copy the **Project API key** for the `service_role`. Copy that key and enter it as your n8n **Service Role Secret**. Refer to [Understanding API Keys](https://supabase.com/docs/guides/api/api-keys) for more information on the `service_role` privileges.