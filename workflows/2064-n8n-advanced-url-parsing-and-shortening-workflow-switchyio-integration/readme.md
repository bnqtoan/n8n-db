# [n8n] Advanced URL Parsing and Shortening Workflow - Switchy.io Integration

## Use cases:

- **Automated Link Shortening for Marketing Campaigns:** Shorten URLs automatically for social media posts, email campaigns, or print materials, ensuring consistent branding and trackability via Switchy.io.
- **Content Curation with Enhanced Previews:** When sharing articles or resources, automatically generate shortened links with attractive previews (titles, descriptions, and images) to increase click-through rates and engagement.
- **Internal Link Management with Security Checks:** Use this workflow to shorten internal links, adding an extra layer of security by scanning for potential phishing or virus threats before creating the shortened URL.

## How it works:

1.  **Triggered by n8n Form:** The workflow starts when a user submits a form containing a long URL, Switchy.io API key, and other optional parameters like a custom slug, tags, Switchy folder ID, OpenGraph Image Mode and custom domain.
2.  **URL Preparation and Scanning:** The workflow checks URL.
3.  **Meta Tag Extraction:**  The workflow retrieves website metadata (title, description, image, favicon) from the provided URL using various methods, including direct HTTP requests, OpenGraph API, and meta tag scraping from dub.sh. It uses the first available data source to get meta tags for the main URL.
4.  **Screenshot Generation (Optional):** If enabled, the workflow captures a screenshot of the webpage using external APIs (microlink.io or pxl.to).
5.  **Image Hosting:** The workflow stores the generated screenshot, OG Image, and favicon image, in GitHub repository.
6.  **Data Aggregation:** All extracted metadata, hosted image URLs, and user-provided settings are combined into a final data structure.
7.  **Switchy.io Integration:**  The workflow sends a request to the Switchy.io API to create a shortened link using the aggregated data, including setting the title, description, image, custom slug (if provided), and tags. It first attempts to create a new link.  If a link with the specified slug already exists, it updates the existing link.
8.  **Response:** The workflow responds to n8n form with shortened URL.

## Services:

-   **Switchy.io:** A URL shortening and management platform.
-   **OpenGraph.xyz:** An API for retrieving Open Graph metadata from URLs.
-   **Dub.sh:** A platform for scraping meta tags from web pages.
-   **microlink.io:** An API for generating website screenshots.
-   **pxl.to:** An API for generating website screenshots.
-   **Norton Safe Web:** A service for scanning URLs for security threats.
-   **Bitdefender:** A service for checking URLs for fraud.
-   **URLVoid:** A service for scanning URLs for threats.
-   **PhishTank:** A collaborative clearing house for data and information about phishing.
-   **GitHub:** A web-based platform to store code.
-   **favicone.com:** Favicon downloader from target domain.
-   **ogcdn.net:** CDN to generate dynamic open graph images.
-   **cdn.statically.io:** CDN to generate images.

## Hashtags:

#n8n #automation #workflow #urlshortener #switchyio
