# My Workflow

## Use cases

*   **Database Initialization:** Quickly set up a new table in a CrateDB database with a predefined schema for testing or development purposes.
*   **Data Insertion:** Create a workflow to insert a fixed set of data into a CrateDB table. Useful for seeding databases with initial configuration values.

## How it works

The workflow is triggered manually. First, the workflow executes a query to create a table named `test` in CrateDB with two columns: `id` (integer) and `name` (string). Then a Set node defines the values to be added in the table (id = 0, name = "n8n"). Finally the workflow inserts the values in the table created.

## Services

*   CrateDB

## Hashtags

#n8n #CrateDB #database #automation #SQL
