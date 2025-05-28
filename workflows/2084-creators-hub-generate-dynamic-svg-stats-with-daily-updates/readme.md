# Creators Hub: N8N Creator Profile Stats

## Use cases:

- **Automated Social Media Updates:** Regularly update a profile image or banner on social media platforms with the latest n8n creator statistics.
- **Performance Tracking Dashboard:** Generate a shareable URL for a dashboard displaying key metrics about your n8n workflows and community engagement.
- **Internal Reporting:** Automatically create reports to track workflow adoption, complexity, and user engagement within an organization using n8n.

## How it works:

1.  **Schedule Trigger:** The workflow starts automatically based on a defined schedule.
2.  **Configuration (Config Node):** This node stores essential configuration parameters, including the n8n creator username, GitHub credentials, and color settings for the SVG.
3.  **Get Workflows (HTTP Request):** It retrieves data from a specified URL (stats.nskha.com) related to the creator's workflows using the creator username.
4.  **Workflows Data (Set Node):** This node extracts relevant data from the API response, such as the total number of workflows, complex workflows (with node count >= 15), approved workflows, pending workflows, total nodes, and total views.
5.  **Get User (HTTP Request):** Obtains user information, specifically the avatar URL, from the n8n community platform using another HTTP request to `https://n8n-s4.nskha.com/creators/{{creator username}}`.
6.  **Download Image (HTTP Request):** Downloads the creator's avatar image from the URL obtained in the previous step.  The `size` parameter in the URL is adjusted to 100 for optimization.
7.  **Extract From File (Extract From File):** Converts the downloaded image to a base64 encoded format.
8.  **SVG (Set Node):** Creates the SVG code for the creator profile card, embedding the extracted data, profile image, and configuration settings (colors, etc.). The SVG includes dynamic values for metrics like total workflows, views, and the creator's username.
9.  **GitHub ‌ (GitHub Node):** Attempts to edit/update an existing `stats.min.svg` file in the specified GitHub repository with the new SVG content. If this node fails for any reason it will not stop the workflow because of the "continueErrorOutput" setting.
10. **GitHub (GitHub Node):** Uploads the generated SVG content to a GitHub repository as `stats.min.svg`.
11. **Aggregate (Aggregate Node):** Combines the data from previous nodes into a single item.
12. **Final (Set Node):** Generates two URLs for accessing the SVG: one served via a CDN for faster loading and another served directly from GitHub.

## Services:

-   **GitHub API:** Used for storing and serving the SVG image and for version control.
-   **stats.nskha.com API:** Used to retrieve creators' workflow data.
-   **n8n Community API:** Used to retrieve user information.
-   **CDN (statically.io):** Used to deliver the SVG image with caching for faster loading.

## Hashtags:

#n8n #automation #creatorprofile #stats #github #SVG
