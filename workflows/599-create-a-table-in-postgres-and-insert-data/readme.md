# My Workflow

## Use Cases

- **Database Initialization:** Automatically create necessary tables in a PostgreSQL database when setting up a new application or environment.
- **Simplified Database Setup:** Execute database schema creation scripts with a single click, abstracting away complex command-line operations.

## How it Works

This workflow initializes a PostgreSQL database table named "test" with two columns: `id` (integer, primary key) and `name` (string).

1.  **On clicking 'execute':** The workflow is triggered manually.
2.  **Postgres:** An `executeQuery` operation executes a SQL statement to create the `test` table in the PostgreSQL database.  The credentials to access the database are stored in the n8n credential `postgres_docker_creds`.
3.  **Set:** Sets the value of the `name` field to `n8n`. This is not used in the `CREATE TABLE` query, but could be used for later operations.
4.  **Postgres1:** This node is configured to interact with the `test` table. Although it sets columns, the node operation is not specified, so no action is performed.

## Services

-   PostgreSQL

## Hashtags

#n8n #PostgreSQL #Database #Automation #SchemaCreation
