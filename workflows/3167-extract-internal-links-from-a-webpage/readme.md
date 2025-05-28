# My Workflow

## Use cases:

*   **Website Link Extraction and Processing:** This workflow can be used to automatically extract all links from a website, identify and resolve relative links by appending the base URL, and then filter out external links for further analysis or archival.
*   **Content Migration Preparation:** Before migrating website content, this workflow can identify internal links that need to be updated to reflect the new site structure, ensuring a smooth transition.
*   **Broken Link Detection:** By slightly modifying the workflow to check the HTTP status of each extracted link, it can be used to find broken links on a website, allowing for proactive maintenance and improved user experience.

## How it works:

1.  **Manual Trigger:** The workflow starts when triggered manually using the "When clicking 'Test workflow'" node.
2.  **Set Base URL:** The "Set Base URL" node defines the base URL of the website from which links will be extracted. *Note: The node does not contain the URL so it needs to be added manually to make it work*
3.  **Fetch base URL:** The "Fetch base URL" node makes an HTTP request to retrieve the HTML content of the specified base URL. *Note: The node does not contain the URL so it needs to be added manually to make it work*
4.  **Extract links:** The "Extract links" node parses the HTML content and extracts all the links present in the HTML.
5.  **Split Out:** The "Split Out" node splits the extracted links into individual items for further processing.
6.  **Find relative links:** The "Find relative links" node checks if each link is a relative link (i.e., doesn't start with "http" or "https").
7.  **Append base URL:** If a link is relative, the "Append base URL" node appends the base URL to the relative link, creating an absolute URL.
8.  **Merge:** The "Merge" node merges the absolute links (created by the "Append base URL" node) and the external links into a single stream.
9.  **Filter external links:** The "Filter external links" node filters the links based on specific criteria. *Note: The node does not contain the filter so it needs to be added manually to make it work*

## Services:

*   **HTTP Request:** Used to fetch the HTML content of a webpage.

## Hashtags:

#n8n #webscraping #linkextraction #automation #workflow
