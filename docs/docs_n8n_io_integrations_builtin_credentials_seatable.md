[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/seatable.md "Edit this page")

# SeaTable credentials[#](#seatable-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [SeaTable](../../app-nodes/n8n-nodes-base.seatable/)
*   [SeaTable Trigger](../../trigger-nodes/n8n-nodes-base.seatabletrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [SeaTable](https://seatable.io/en/) account on either a cloud or self-hosted SeaTable server.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [SeaTable's API documentation](https://api.seatable.io) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **Environment**: Select the environment that matches your SeaTable instance:
    *   **Cloud-Hosted**
    *   **Self-Hosted**
*   An **API Token (of a Base)**: Generate a **Base-Token** in SeaTable from the base options > **Advanced > API Token**.
    *   Use **Read-Write** permission for your token.
    *   Refer to [Creating an API token](https://seatable.io/en/docs/seatable-api/erzeugen-eines-api-tokens/) for more information.
*   A **Timezone**: Select the timezone of your SeaTable server.