[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/rabbitmq.md "Edit this page")

# RabbitMQ credentials[#](#rabbitmq-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [RabbitMQ](../../app-nodes/n8n-nodes-base.rabbitmq/)
*   [RabbitMQ Trigger](../../trigger-nodes/n8n-nodes-base.rabbitmqtrigger/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   User connection

## Related resources[#](#related-resources "Permanent link")

Refer to [RabbitMQ's Connections documentation](https://www.rabbitmq.com/docs/connections) for more information about the service.

## Using user connection[#](#using-user-connection "Permanent link")

To configure this credential, you'll need to have a [RabbitMQ broker](https://www.rabbitmq.com/) installed and:

1.  Enter the **Hostname** for the RabbitMQ broker.
2.  Enter the **Port** the connection should use.
3.  Enter a **User** the connection should use to log in as.
    *   The default is `guest`. RabbitMQ recommends using a different user in production environments. Refer to [Access Control | The Basics](https://www.rabbitmq.com/docs/access-control#basics) for more information. If you're using the `guest` account with a non-localhost connection, refer to [`guest` user issues](#guest-user-issues) below for troubleshooting tips.
4.  Enter the user's **Password**.
    *   The default password for the `guest` user is `guest`.
5.  Enter the [virtual host](https://www.rabbitmq.com/docs/vhosts) the connection should use as the **Vhost**. The default virtual host is `/`.
6.  Select whether the connection should use **SSL**. If turned on, also set:
    *   **Passwordless**: Select whether the SSL certificate connection users SASL mechanism EXTERNAL (turned off) or doesn't use a password (turned on). If turned on, you'll also need to enter:
        *   The **Client Certificate**: Paste the text of the SSL client certificate to use.
        *   The **Client Key**: Paste the SSL client key to use.
        *   The **Passphrase**: Paste the SSL passphrase to use.
    *   **CA Certificates**: Paste the text of the SSL CA certificates to use.

## guest user issues[#](#guest-user-issues "Permanent link")

If you use the `guest` user for the credential and you try to access a remote host, you may see a connection error. The RabbitMQ logs show an error like this:

1

`[error] <0.918.0> PLAIN login refused: user 'guest' can only connect via localhost`

This happens because RabbitMQ prohibits the default `guest` user from connecting from remote hosts. It can only connect over the `localhost`.

To resolve this error, you can:

*   Update the `guest` user to allow it remote host access.
*   Create or use a different user to connect to the remote host. The `guest` user is the only user limited by default.

Refer to ["guest" user can only connect from localhost](https://www.rabbitmq.com/docs/access-control#loopback-users) for more information.