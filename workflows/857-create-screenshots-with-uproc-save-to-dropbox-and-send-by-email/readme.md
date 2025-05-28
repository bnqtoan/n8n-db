# Screenshot Workflow

## Use cases:

- **Automated Website Monitoring:** Automatically capture screenshots of a website (both full page and regular) and send them via email for visual monitoring of content and layout changes.
- **Archiving Webpages:** Create a system to regularly archive webpages as images for compliance or historical record-keeping purposes.
- **Visual Bug Reporting:** Generate screenshots of specific website sections when a bug is detected, and automatically send them to the development team via email, along with full-page screenshots for context.

## How it works:

1.  **Trigger:** The workflow starts when you manually execute it using the "On clicking 'execute'" node.
2.  **Create Web + Email Item:** A "Function Item" node sets the website URL to `https://uproc.io` and the recipient email address to `miquel@uproc.io`.
3.  **Generate Screenshots (Full Page and Regular):** Two "Uproc" nodes use the Uproc API to generate a full-page screenshot and a regular screenshot of the specified website.
4.  **Download the Images:** Two "HTTP Request" nodes fetch the screenshot images from the URLs returned by the Uproc API. They are configured to handle the response as a file.
5.  **Upload to Dropbox:** The "Dropbox" nodes uploads the screenshot images to your Dropbox account, saving the full-page screenshot as `/screenshots/sample_fullpage.png` and the regular screenshot as `/screenshots/sample.png`.
6.  **Merge Images:** The "Merge" node combines the outputs of the two "Upload to Dropbox" nodes into a single output.
7.  **Send Email:** An "AWS SES" node sends an email to the specified recipient. The email contains an HTML table displaying both screenshots inline. The images are referenced directly from the URLs provided by Uproc.

## Services:

-   **Uproc:** Used for generating website screenshots.
-   **AWS SES (Simple Email Service):** Used for sending emails.
-   **Dropbox:** Used for storing the generated screenshots.

## Hashtags:

#n8n #automation #screenshot #websiteMonitoring #emailNotification
