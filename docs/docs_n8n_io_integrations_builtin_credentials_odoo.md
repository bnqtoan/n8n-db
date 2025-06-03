[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/odoo.md "Edit this page")

# Odoo credentials[#](#odoo-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Odoo](../../app-nodes/n8n-nodes-base.odoo/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key (Recommended)
*   Password

## Related resources[#](#related-resources "Permanent link")

Refer to [Odoo's External API documentation](https://www.odoo.com/documentation/17.0/developer/reference/external_api.html) for more information about the service.

Refer to the Odoo [Getting Started tutorial](https://www.odoo.com/slides/getting-started-15) if you're new to Odoo.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a user account on an [Odoo](https://www.odoo.com/) database and:

*   Your **Site URL**
*   Your **Username**
*   An **API key**
*   Your **Database name**

To set up the credential with an API key:

1.  Enter your Odoo server or site URL as the **Site URL**.
2.  Enter your **Username** as it's displayed on your **Change password** screen in Odoo.
3.  To use an API key, go to **Your Profile > Preferences > Account Security > Developer API Keys**.
    *   If you don't have this option, you may need to upgrade your Odoo plan. Refer to [Required plan type](#required-plan-type) for more information.
4.  Select **New API Key**.
5.  Enter a **Description** for the key, like `n8n integration`.
6.  Select **Generate Key**.
7.  Copy the key and enter it as the **Password or API key** in your n8n credential.
8.  Enter your Odoo **Database name**, also known as the instance name.

Refer to [Odoo API Keys](https://www.odoo.com/documentation/15.0/developer/reference/external_api.html?#api-keys) for more information.

## Using password[#](#using-password "Permanent link")

To configure this credential, you'll need a user account on an [Odoo](https://www.odoo.com/) database and:

*   Your **Site URL**
*   Your **Username**
*   Your **Password**
*   Your **Database name**

To set up the credential with a password:

1.  Enter your Odoo server or site URL as the **Site URL**.
2.  Enter your **Username** as it's displayed on your **Change password** screen in Odoo.
3.  To use a password, enter your user password in the **Password or API key** field.
4.  Enter your Odoo **Database name**, also known as the instance name.

Password compatibility

If you try a password credential and it doesn't work for a specific node function, try switching to an API key. Odoo requires an API key for certain modules or based on certain settings.

## Required plan type[#](#required-plan-type "Permanent link")

Required plan type

Access to the external API is only available on a **Custom** Odoo plan. (The One App Free or Standard plans won't give you access.)

Refer to [Odoo Pricing Plans](https://www.odoo.com/pricing-plan) for more information.