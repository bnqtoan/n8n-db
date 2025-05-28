# Create, update, and get an issue on Taiga

## Use cases:

- **Automated Issue Creation:** Automatically create Taiga issues for new feature requests or bug reports submitted through a different platform (e.g., a web form).
- **Issue Status Synchronization:** Keep issue descriptions synchronized between Taiga and other systems, such as documentation platforms or knowledge bases.
- **Retrieving Issue Details:** Retrieve issue information to use within other n8n workflows.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which requires manual execution within n8n.
2.  The "Taiga" node creates a new issue in Taiga with the subject "n8n-docs" in the project with ID 385605.
3.  The "Taiga1" node updates the issue created in the previous step. It sets the description of the issue to "This ticket is for the documentation for the Taiga node".
4.  Finally, the "Taiga2" node retrieves the details of the created issue.

## Services:

-   Taiga

## Hashtags:

#n8n #automation #Taiga #issueTracking #workflow
