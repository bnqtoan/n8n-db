# n8n Subworkflow Dependency Graph & Auto-Tagging

## Use cases:

- **Dependency Tracking:** Automatically identify and track dependencies between workflows, making it easier to understand how changes in one workflow might impact others.
- **Workflow Documentation:** Generate a dependency graph to visually represent the relationships between workflows, aiding in documentation and knowledge sharing.
- **Automated Tagging:** Automatically tag subworkflows with the names of the workflows that call them, improving organization and discoverability within n8n.

## How it works:

1.  **Triggers:** The workflow starts either when the workflow is activated, on a weekly schedule (every Sunday), or when accessed via a webhook.
2.  **Get All Workflows:** Retrieves all workflows from the n8n instance using the n8n API.
3.  **List Callers of Subworkflows:** A code node iterates through each workflow to identify workflows that are called by other workflows (subworkflows) using the `Execute Workflow` node. It builds a dependency graph in memory.
4.  **Filter Uncalled Workflows:** Removes workflows that are not called by any other workflows, focusing on subworkflows.
5.  **Filter Missing Workflows:** Checks if the subworkflows exist in the instance.
6.  **Count Callers and Identify New Callers:** Identifies which workflows call a specific subworkflow. It also identifies new callers that are not yet tags on the subworkflow.
7.  **Loop Through Workflows:** Iterates through each subworkflow to apply tags.
8.  **Set Instance URL:** Sets the n8n instance URL (user configuration required).
9.  **Get All Tags:** Retrieves all existing tags from the n8n instance.
10. **Remove Existing Tags From New Callers List:** Compares the new callers with existing tags to avoid duplicate tag creation.
11. **If Any New Callers:** Checks if there are new callers that need to be added as tags.
12. **Split Out New Callers as New Tags:** Splits the list of new callers into individual items to create tags for each.
13. **Create New Tags:** Creates new tags in n8n using the new caller names.
14. **Merge:** Merge the original workflow data for processing.
15. **GET all tags again:** Retrieves all existing tags from the n8n instance to update tags.
16. **Create Tag ID:Name Dictionary:** Creates a dictionary (object) mapping tag IDs to tag names.
17. **Retrieve Tag IDs and Names from Dictionary:** Retrieves the tag IDs based on the caller workflows, using the dictionary created in the previous step.
18. **Update workflow tags:** Updates the tags of the subworkflow with the caller workflows
19.  **Return Dependency Graph Data:** Returns the data related to the dependency graph
20. **Combine dependency graph values into labels:** combines the dependency graph name, id and callers_count to prepare data to graph.
21. **Visualize subworkflow dependency graph:** Generate a pie chart with dependency graph values.
22. **Format workflow relationship data for rendering:** builds a graph in [Mermaid](https://mermaid.js.org/) format
23. **Visualize dependency graph with MermaidJS:** respond to webhook by rendering the [Mermaid](https://mermaid.js.org/) chart

## Services:

-   n8n API (for retrieving workflows and tags)
-   QuickChart API (for visualizing data)

## Hashtags:

#n8n #automation #workflow #dependencygraph #autotagging
