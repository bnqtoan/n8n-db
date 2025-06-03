[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/redis.md "Edit this page")

# Redis credentials[#](#redis-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Redis](../../app-nodes/n8n-nodes-base.redis/)
*   [Redis Chat Memory](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Database connection

## Related resources[#](#related-resources "Permanent link")

Refer to [Redis's developer documentation](https://redis.readthedocs.io/en/stable/index.html) for more information about the service.

## Using database connection[#](#using-database-connection "Permanent link")

You'll need a user account on a [Redis](https://redis.io/) server and:

*   A **Password**
*   The **Host** name
*   The **Port** number
*   A **Database Number**
*   **SSL**

To configure this credential:

1.  Enter your user account **Password**.
2.  Enter the **Host** name of the Redis server. The default is `localhost`.
3.  Enter the **Port** number the connection should use. The default is `6379`.
    *   This number should match the `tcp_port` listed when you run the `INFO` command.
4.  Enter the **Database Number**. The default is `0`.
5.  If the connection should use SSL, turn on the **SSL** toggle. If this toggle is off, the connection uses TCP only.

Refer to [Connecting to Redis | Generic client](https://redis.readthedocs.io/en/stable/connections.html) for more information.