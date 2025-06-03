[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/formiotrigger.md "Edit this page")

# Form.io Trigger credentials[#](#formio-trigger-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Form.io Trigger](../../trigger-nodes/n8n-nodes-base.formiotrigger/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth

## Related resources[#](#related-resources "Permanent link")

Refer to [Form.io's API documentation](https://apidocs.form.io/) for more information about the service.

## Using basic auth[#](#using-basic-auth "Permanent link")

To configure this credential, you'll need a [Form.io](https://www.form.io/) account and:

*   Your **Environment**
*   Your login **Email address**
*   Your **Password**

To set up the credential:

1.  Select your **Environment**:
    *   Choose **Cloud hosted** if you aren't hosting Form.io yourself.
    *   Choose **Self-hosted** if you're hosting Form.io yourself. Then add:
        *   Your **Self-Hosted Domain**. Use only the domain itself. For example, if you view a form at `https://yourserver.com/yourproject/manage/view`, the Self-Hosted Domain is `https://yourserver.com`.
2.  Enter the **Email address** you use to log in to Form.io.
3.  Enter the **Password** you use to log in to Form.io.