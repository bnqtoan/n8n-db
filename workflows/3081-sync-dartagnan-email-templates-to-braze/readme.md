# My workflow 2

## Use cases:

- **Automated Email Template Synchronization:** Automatically syncs email templates between Dartagnan and Braze, ensuring consistency across platforms.
- **Campaign Management:** Streamlines campaign management by creating and updating email templates in Braze based on changes in Dartagnan, saving time and reducing manual effort.
- **Centralized Marketing Content:** Helps maintain a centralized repository of marketing content by keeping Braze email templates up-to-date with the latest content from Dartagnan.

## How it works:

1.  **Authentication**:The workflow starts by authenticating with Dartagnan to obtain an access token, and also requires credentials for Braze.
2.  **Template Discovery (Braze)**: It retrieves all existing email templates from Braze using the Braze API.
3.  **Template Discovery (Dartagnan)**:The workflow fetches a list of projects from Dartagnan, then retrieves campaign details (including HTML content and media) for each project.
4.  **Template Comparison**: The workflow compares Dartagnan campaigns with existing Braze email templates, using the unified campaign name for matching.
5.  **Conditional Logic**: Based on the comparison, the workflow identifies whether to update an existing template or create a new one in Braze.  It checks if a campaign has been modified recently.
6.  **Content Processing**: Before updating or creating templates, the workflow extracts HTML and media content from Dartagnan, replacing image references with direct URLs using a JavaScript code node. The HTML and plaintext content are then encoded.
7.  **Braze Template Update/Creation**: Finally, the workflow either updates existing email templates in Braze or creates new ones using the Braze API, incorporating the processed HTML content.

## Services:

- Dartagnan API
- Braze API

## Hashtags:

#n8n #automation #emailmarketing #braze #dartagnan
