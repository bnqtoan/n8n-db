# Clone n8n Workflows between Instances using n8n API

## Use cases:

- **Workflow Backup and Migration:**  Regularly clone workflows from a production n8n instance to a development or backup instance, ensuring that you have a safe copy of your automations and can quickly restore them in case of issues.
- **Cross-Account Workflow Deployment:**  Deploy workflows from a central n8n account to multiple client accounts or regional n8n instances, streamlining the setup process and ensuring consistency across different environments.
- **Template Distribution:**  Create a set of base workflows in one n8n instance and easily distribute them to other instances for customization and use by different teams or users.

## How it works:

1.  **Trigger:** The workflow starts when you manually click 'Test workflow'.
2.  **Get Workflows from Source:** Fetches all workflows from a source n8n instance using the "GET - Workflows" node, utilizing the n8n API credential "AK n8n original account".
3.  **Get Workflows from Destination:** Fetches all workflows from a destination n8n instance using the "GET - Destination Workflows" node, utilizing the n8n API credential "AlexK1919 n8n ent account".
4.  **Split Out Workflows:** Splits the workflows into individual items for both the source and destination n8n instances, using "Split Out Workflows" and "Split Out Workflows1" nodes respectively.
5.  **Merge Workflows:** Merges the source and destination workflows, identifying workflows that exist in the source but not in the destination. The merge is done using a SQL query to find workflows with unique names.
6.  **Loop Over Items:** Split the merged list of workflows for processing.
7.  **Create Workflow in Destination:** Creates the new workflows on the destination n8n instance using the "CREATE - Workflow" node, utilizing the "AlexK1919 n8n ent account" credential.  It extracts the workflow name, nodes, and connections from the source workflow.
8.  **Get Projects in Destination:** Fetches all the projects from the destination n8n instance using the "n8n - GET - Projects" node, utilizing the "AlexK1919 n8n ent account" credential.
9.  **Split Out Projects:** Splits the projects into individual items using the "Split Out Projects" node.
10. **Filter Project:** Filters the projects by project name to find a specific project, in this case, "z Original n8n Workflows from AlexK1919" using the "Filter Project" node.
11. **SET Project ID:** Sets the ID of the found project into a variable using the "SET Project ID" node.
12. **PUT Workflow in Project:** Transfers the newly created workflow to the specified project in the destination n8n instance using the "PUT - Workflow in Project" node, utilizing the "AlexK1919 n8n ent account" credential.
13. **Loop Again:** Loops back over the list of workflows to be created.

## Services:

-   n8n API (for both source and destination n8n instances)

## Hashtags:

#n8n #automation #workflow #clone #migration
