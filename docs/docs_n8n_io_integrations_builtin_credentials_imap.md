[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/imap/index.md "Edit this page")

# IMAP credentials[#](#imap-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [IMAP Email](../../core-nodes/n8n-nodes-base.emailimap/)

## Prerequisites[#](#prerequisites "Permanent link")

Create an email account on a service with IMAP support.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   User account

## Related resources[#](#related-resources "Permanent link")

Internet Message Access Protocol (IMAP) is a standard protocol for receiving email. Most email providers offer instructions on setting up their service with IMAP; refer to your provider's IMAP instructions.

## Using user account[#](#using-user-account "Permanent link")

To configure this credential, you'll need:

*   A **User** name: The email address you're retrieving email for.
*   A **Password**: Either the password you use to check email or an app password. Your provider will tell you whether to use your own password or to generate an app password.
*   A **Host**: The IMAP host address for your email provider, often formatted as `imap.<provider>.com`. Check with your provider.
*   A **Port** number: The default is port `993`. Use this port unless your provider or email administrator tells you to use something different.

Choose whether to use **SSL/TLS** and whether to **Allow Self-Signed Certificates**.

### Provider instructions[#](#provider-instructions "Permanent link")

Refer to the quickstart guides for these common email providers.

#### Gmail[#](#gmail "Permanent link")

Refer to [Gmail](gmail/).

#### Outlook.com[#](#outlookcom "Permanent link")

Refer to [Outlook.com](outlook/).

#### Yahoo[#](#yahoo "Permanent link")

Refer to [Yahoo](yahoo/).

### My provider isn't listed[#](#my-provider-isnt-listed "Permanent link")

If your email provider isn't listed here, search for their `IMAP settings` or `IMAP instructions`.