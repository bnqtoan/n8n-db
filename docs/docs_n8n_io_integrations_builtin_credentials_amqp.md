[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/amqp.md "Edit this page")

# AMQP credentials[#](#amqp-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [AMQP Sender](../../app-nodes/n8n-nodes-base.amqp/)
*   [AMQP Trigger](../../trigger-nodes/n8n-nodes-base.amqptrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Install an AMQP 1.0-compatible message broker like [ActiveMQ](https://activemq.apache.org/). Refer to [AMQP Products](https://www.amqp.org/about/examples) for a list of options.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   AMQP connection

## Related resources[#](#related-resources "Permanent link")

Advanced Message Queuing Protocol (AMQP) is an open standard application layer protocol for message-oriented middleware. The defining features of AMQP are message orientation, queuing, routing, reliability and security. Refer to the [OASIS AMQP Version 1.0 Standard](https://docs.oasis-open.org/amqp/core/v1.0/amqp-core-overview-v1.0.html) for more information.

Refer to your provider's documentation for more information about the service. Refer to [ActiveMQ's API documentation](https://activemq.apache.org/components/classic/documentation/rest) as one example.

## Using AMQP connection[#](#using-amqp-connection "Permanent link")

To configure this credential, you'll need:

*   A **Hostname**: Enter the hostname of your AMQP message broker.
*   A **Port**: Enter the port number the connection should use.
*   A **User**: Enter the name of the user to establish the connection as.
    *   For example, the default username in ActiveMQ is `admin`.
*   A **Password**: Enter the user's password.
    *   For example, the default password in ActiveMQ is `admin`.
*   _Optional:_ **Transport Type**: Enter either `tcp` or `tls`.

Refer to your provider's documentation for more detailed instructions.