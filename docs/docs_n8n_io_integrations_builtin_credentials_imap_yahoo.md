[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/imap/yahoo.md "Edit this page")

# Yahoo IMAP credentials[#](#yahoo-imap-credentials "Permanent link")

Follow these steps to configure the IMAP credentials with a Yahoo account.

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

To set up the IMAP credential with a Yahoo Mail account, use these settings:

1.  Enter your Yahoo email address as the **User**.
2.  Enter the app password you generated above as the **Password**.
3.  Enter `imap.mail.yahoo.com` as the **Host**.
4.  Keep the default **Port** number of `993`. Check with your email administrator if this port doesn't work.
5.  Turn on the **SSL/TLS** toggle.
6.  Check with your email administrator about whether to **Allow Self-Signed Certificates**.

Refer to [Set up IMAP for Yahoo mail account](https://help.yahoo.com/kb/sln4075.html) for more information.