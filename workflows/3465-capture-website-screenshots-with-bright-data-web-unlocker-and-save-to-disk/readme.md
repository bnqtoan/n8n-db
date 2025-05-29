# Capture Website Screenshots with Bright Data Web Unlocker and Save to Disk

## Use cases:

- **Automated Website Monitoring:** Capture screenshots of websites regularly to monitor changes in content, layout, or design over time.
- **Archiving Webpages:** Create a visual archive of specific webpages for documentation, legal compliance, or historical records.
- **Generating Visual Content for Reports:** Automatically generate images of websites for inclusion in reports, presentations, or marketing materials.

## How it works:

1.  **Trigger:** The workflow starts when you manually click the "Test workflow" button.
2.  **Set Variables:** The "Set URL, Filename and Bright Data Zone" node defines the target URL, the desired filename for the screenshot, and the Bright Data zone to be used. These values are used in subsequent nodes.  **Important**:  This node needs to be configured with the actual URL, desired filename, and your Bright Data Web Unlocker zone.
3.  **Capture Screenshot:** The "Capture a screenshot" node sends a POST request to the Bright Data API, using the URL and zone defined in the previous step. It specifies that the desired format is a raw screenshot. The node uses the `Header Auth account` credential, configured for Bright Data API authentication.
4.  **Write to Disk:** The "Write a file to disk" node saves the screenshot received from the Bright Data API to a specified location on disk.  **Important**:  The "Write a file to disk" node needs to be configured with the correct path for saving the screenshot.

## Services:

-   **Bright Data:**  Uses the Bright Data Web Unlocker API to bypass website restrictions and capture screenshots.

## Hashtags:

#n8n #automation #webscreenshot #brightdata #webunlocker
