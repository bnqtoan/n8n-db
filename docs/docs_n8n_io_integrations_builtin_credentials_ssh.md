[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/ssh.md "Edit this page")

# SSH credentials[#](#ssh-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [SSH](../../core-nodes/n8n-nodes-base.ssh/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a remote server with SSH enabled.
*   Create a user account that can `ssh` into the server using one of the following:
    *   Their own [password](#using-password)
    *   An SSH [private key](#using-private-key)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   [Password](#using-password): Use this method if you have a user account that can `ssh` into the server using their own password.
*   [Private key](#using-private-key): Use this method if you have a user account that uses an SSH key for the server or service.

## Related resources[#](#related-resources "Permanent link")

Secure Shell (SSH) protocol is a method for securely sending commands over a network. Refer to [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for an example of SSH setup.

## Using password[#](#using-password "Permanent link")

Use this method if you have a user account that can `ssh` into the server using their own password.

To configure this credential, you'll need to:

1.  Enter the IP address of the server you're connecting to as the **Host**.
2.  Enter the **Port** to use for the connection. SSH uses port `22` by default.
3.  Enter the **Username** for a user account with `ssh` access on the server.
4.  Enter the **Password** for that user account.

## Using private key[#](#using-private-key "Permanent link")

Use this method if you have a user account that uses an SSH key for the server or service.

To configure this credential, you'll need to:

1.  Enter the IP address of the server you're connecting to as the **Host**.
2.  Enter the **Port** to use for the connection. SSH uses port `22` by default.
3.  Enter the **Username** of the account that generated the private key.
4.  Enter the entire contents of your SSH **Private Key**.
5.  If you created a **Passphrase** for the **Private Key**, enter the passphrase.
    *   If you didn't create a passphrase for the key, leave blank.