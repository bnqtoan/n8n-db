# Send Slack message from Webflow form submission

## Use cases:

- **Customer Inquiry Management:** Automatically create a dedicated Slack channel for each new inquiry submitted through a Webflow form, allowing teams to manage and respond to customer questions in an organized manner.
- **Project Kickoffs:** When a new project request is submitted via Webflow, a Slack channel is created to facilitate team communication and collaboration specific to that project.
- **Event Registration:** Upon submission of an event registration form on Webflow, a Slack channel can be created to coordinate logistics, share updates, and engage with attendees.

## How it works:

1.  **Webflow Form Submission Trigger:** The workflow is initiated when a form is submitted on a specified Webflow site.
2.  **List Slack Channels:** Retrieves a list of all existing Slack channels.
3.  **Check if Webflow form has an existing channel:** The workflow checks if a Slack channel with the same name as the Webflow form already exists. This is done by transforming the Webflow form name to match the Slack channel naming convention (lowercase, hyphen-separated).
4.  **Does the channel exist?:** A conditional statement checks whether a channel with the corresponding form name was found.
5.  **If channel does NOT exist:**
    *   **Create Slack channel with form name:** A new Slack channel is created using the transformed Webflow form name.
    *   **Transform data to send message:** Creates the `formData`, `formName`, and `channel` objects for use later in the workflow.
    *   **Notify #general channel of newly created channel:** A notification is sent to the `#general` Slack channel informing members that a new channel has been created, including a direct link to the channel.
    *   **Compose Slack message:** A Slack message containing the Webflow form submission data is formatted.
    *   **Send slack message to channel:** Sends message to channel
6.  **If channel DOES exist:**
    *   **Compose Slack message:** A Slack message containing the Webflow form submission data is formatted.
    *   **Send slack message to channel:** The formatted message is sent to the existing Slack channel associated with the Webflow form.

## Services:

-   Webflow
-   Slack

## Hashtags:

#n8n #automation #webflow #slack #formsubmission
