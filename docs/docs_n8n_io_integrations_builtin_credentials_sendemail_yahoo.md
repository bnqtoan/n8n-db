[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/sendemail/yahoo.md "Edit this page")

# Yahoo Send Email credentials[#](#yahoo-send-email-credentials "Permanent link")

Follow these steps to configure the Send Email credentials with a Yahoo account.

## Prerequisites[#](#prerequisites "Permanent link")

To follow these instructions, you must first generate an app password:

1.  Log in to your Yahoo account [Security page](https://login.yahoo.com/account/security).
2.  Select **Generate app password** or **Generate and manage app passwords**.
3.  Select **Get Started**.
4.  Enter an **App name** for your new app password, like `n8n credential`.
5.  Select **Generate password**.
6.  Copy the generated app password. You'll use this in your n8n credential.

Refer to Yahoo's [Generate and manage 3rd-party app passwords](https://help.yahoo.com/kb/generate-manage-third-party-passwords-sln15241.html) for more information.

## Set up the credential[#](#set-up-the-credential "Permanent link")

To configure the Send Email credential to use Yahoo Mail:

1.  Enter your Yahoo email address as the **User**.
2.  Enter the app password you generated above as the **Password**.
3.  Enter `smtp.mail.yahoo.com` as the **Host**.
4.  For the **Port**:
    *   Keep the default `465` for SSL or if you're unsure what to use.
    *   Enter `587` for TLS.
5.  Turn on the **SSL/TLS** toggle.

Refer to [IMAP server settings for Yahoo Mail](https://help.yahoo.com/kb/sln4075.html) for more information. If the settings above don't work for you, check with your email administrator.