[](https://github.com/n8n-io/n8n-docs/edit/main/docs/privacy-security/what-you-can-do.md "Edit this page")

# What you can do[#](#what-you-can-do "Permanent link")

It's also your responsibility as a customer to ensure you are securing your code and data. This document lists some steps you can take.

## All users[#](#all-users "Permanent link")

*   Report security issues and [terms of service](https://n8n.io/legal/#terms) violations to security@n8n.io.
*   If more than one person uses your n8n instance, set up [User management](../../user-management/) and follow the [Best practices](../../user-management/best-practices/).
*   Use OAuth to connect integrations whenever possible.

## Self-hosted users[#](#self-hosted-users "Permanent link")

If you self-host n8n, there are additional steps you can take:

*   Set up a reverse proxy to handle TLS, ensuring data is encrypted in transit.
*   Ensure data is encrypted at rest by using encrypted partitions, or encryption at the hardware level, and ensuring n8n and its database is written to that location.
*   Run a [Security audit](../../hosting/securing/security-audit/).
*   Be aware of the [Risks](../../integrations/community-nodes/risks/) when installing community nodes, or choose to disable them.
*   Make sure users can't import external modules in the Code node. Refer to [Environment variables | Nodes](https://docs.n8n.io/hosting/configuration/environment-variables/nodes) for more information.
*   Choose to exclude certain nodes. For example, you can disable nodes like Execute Command or SSH. Refer to [Environment variables | Nodes](https://docs.n8n.io/hosting/configuration/environment-variables/nodes) for more information.
*   For maximum privacy, you can [Isolate n8n](../../hosting/configuration/configuration-examples/isolation/).

### GDPR for self-hosted users[#](#gdpr-for-self-hosted-users "Permanent link")

If you self-host n8n, you are responsible for deleting user data. If you need to delete data on behalf of one of your users, you can delete the respective execution. n8n recommends configuring n8n to prune execution data automatically every few days to avoid effortful GDPR request handling as much as possible. Configure this using the `EXECUTIONS_DATA_MAX_AGE` environment variable. Refer to [Environment variables](../../hosting/configuration/environment-variables/) for more information.