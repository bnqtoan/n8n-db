[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/cratedb.md "Edit this page")

# CrateDB credentials[#](#cratedb-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [CrateDB](../../app-nodes/n8n-nodes-base.cratedb/)

## Prerequisites[#](#prerequisites "Permanent link")

An available instance of CrateDB.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   account connection

## Related resources[#](#related-resources "Permanent link")

Refer to [CrateDB's documentation](https://cratedb.com/docs/crate/reference/en/latest/) for more information about the service.

## Using account connection[#](#using-account-connection "Permanent link")

To configure this credential, you'll need:

*   Your **Host** name
*   Your **Database** name
*   A **User** name
*   A user **Password**
*   To set the **SSL** parameter. Refer to the [CrateDB Secured Communications (SSL/TLS) documentation](https://cratedb.com/docs/crate/reference/en/5.7/admin/ssl.html#admin-ssl) for more information. The options n8n supports are:
    *   Allow
    *   Disable
    *   Require
*   A **Port** number

Refer to the [Connect to a CrateDB cluster documentation](https://cratedb.com/docs/crate/clients-tools/en/latest/connect/) for detailed instructions on these fields and their default values.