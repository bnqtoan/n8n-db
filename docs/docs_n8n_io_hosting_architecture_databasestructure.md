[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/architecture/database-structure.md "Edit this page")

# Database structure[#](#database-structure "Permanent link")

This page describes the purpose of each table in the n8n database.

## Database and query technology[#](#database-and-query-technology "Permanent link")

By default, n8n uses SQLite as the database. If you are using another database the structure will be similar, but the data-types may be different depending on the database.

n8n uses [TypeORM](https://github.com/typeorm/typeorm) for queries and migrations.

To inspect the n8n database, you can use [DBeaver](https://dbeaver.io), which is an open-source universal database tool.

## Tables[#](#tables "Permanent link")

These are the tables n8n creates during setup.

### auth\_identity[#](#auth_identity "Permanent link")

Stores details of external authentication providers when using [SAML](../../../user-management/saml/).

### auth\_provider\_sync\_history[#](#auth_provider_sync_history "Permanent link")

Stores the history of a SAML connection.

### credentials\_entity[#](#credentials_entity "Permanent link")

Stores the [credentials](../../../glossary/#credential-n8n) used to authenticate with integrations.

### event\_destinations[#](#event_destinations "Permanent link")

Contains the destination configurations for [Log streaming](../../../log-streaming/).

### execution\_data[#](#execution_data "Permanent link")

Contains the workflow at time of running, and the execution data.

### execution\_entity[#](#execution_entity "Permanent link")

Stores all saved workflow executions. Workflow settings can affect which executions n8n saves.

### execution\_metadata[#](#execution_metadata "Permanent link")

Stores [Custom executions data](../../../workflows/executions/custom-executions-data/).

### installed\_nodes[#](#installed_nodes "Permanent link")

Lists the [community nodes](../../../integrations/community-nodes/installation/) installed in your n8n instance.

### installed\_packages[#](#installed_packages "Permanent link")

Details of npm community nodes packages installed in your n8n instance. [installed\_nodes](#installed_nodes) lists each individual node. `installed_packages` lists npm packages, which may contain more than one node.

### migrations[#](#migrations "Permanent link")

A log of all database migrations. Read more about [Migrations](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md) in TypeORM's documentation.

### project[#](#project "Permanent link")

Lists the [projects](../../../user-management/rbac/projects/) in your instance.

### project\_relation[#](#project_relation "Permanent link")

Describes the relationship between a user and a [project](../../../user-management/rbac/projects/), including the user's [role type](../../../user-management/rbac/role-types/).

### role[#](#role "Permanent link")

Not currently used. Foruse in future work on custom roles.

### settings[#](#settings "Permanent link")

Records custom instance settings. These are settings that you can't control using environment variables. They include:

*   Whether the instance owner is set up
*   Whether the user chose to skip owner and user management setup
*   License key

### shared\_credentials[#](#shared_credentials "Permanent link")

Maps credentials to users.

### shared\_workflow[#](#shared_workflow "Permanent link")

Maps workflows to users.

### tag\_entity[#](#tag_entity "Permanent link")

All workflow tags created in the n8n instance. This table lists the tags. [workflows\_tags](#workflows_tags) records which workflows have which tags.

### user[#](#user "Permanent link")

Contains user data.

### variables[#](#variables "Permanent link")

Store [variables](../../../code/variables/).

### webhook\_entity[#](#webhook_entity "Permanent link")

Records the active webhooks in your n8n instance's workflows. This isn't just webhooks uses in the Webhook node. It includes all active webhooks used by any trigger node.

### workflow\_entity[#](#workflow_entity "Permanent link")

Your n8n instance's saved workflows.

### workflow\_history[#](#workflow_history "Permanent link")

Store previous versions of workflows.

### workflow\_statistics[#](#workflow_statistics "Permanent link")

Counts workflow IDs and their status.

### workflows\_tags[#](#workflows_tags "Permanent link")

Maps tags to workflows. [tag\_entity](#tag_entity) contains tag details.

## Entity Relationship Diagram (ERD)[#](#entity-relationship-diagram-erd "Permanent link")

[!["n8n ERD"](../../../_images/hosting/architecture/n8n-database-diagram.png)](https://docs.n8n.io/_images/hosting/architecture/n8n-database-diagram.png)