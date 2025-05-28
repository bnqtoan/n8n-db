# Gravity Forms to KlickTipp Integration Workflow

## Use cases:

- Automatically add new subscribers to KlickTipp from Gravity Forms submissions, ensuring all contacts are captured for marketing and communication purposes.
- Dynamically tag contacts in KlickTipp based on their responses in Gravity Forms, allowing for personalized email campaigns and targeted follow-ups.
- Streamline webinar registration by automatically subscribing and tagging registrants in KlickTipp, ensuring efficient management of attendees.

## How it works:

1.  **New submission via Gravityforms**: The workflow starts when a new form is submitted via Gravity Forms on your website. The Webhook node listens for POST requests on a specific path.
2.  **Convert and set feedback data**: Transforms and prepares the data received from Gravity Forms into a format suitable for KlickTipp. This includes converting the phone number to international format, converting the birthday to UNIX timestamp and scaling the webinar rating.
3.  **Subscribe contact in KlickTipp**: This node subscribes the formatted contact data to a specific KlickTipp list.
4.  **Define Array of tags from Gravityforms**: Defines an array of tags based on the user's selections and inputs in the Gravity Forms submission, storing them for subsequent processing.
5.  **Split Out Gravityforms tags**: Splits the array of tags from the previous node into individual items, allowing for individual processing.
6.  **Get list of all existing tags**: Retrieves all existing tags from KlickTipp.
7.  **Merge**: Combines the tags from Gravity Forms with the existing tags from KlickTipp to determine if any new tags need to be created.
8.  **Tag creation check**: Checks if the tag already exists in KlickTipp based on the merge result.
9.  **If tag exists**:
    -   **Aggregate tags to add to contact**: Collects IDs of existing tags to be added to the contact.
    -   **Tag contact directly in KlickTipp**: Applies existing tags to the subscriber in KlickTipp.
10. **If tag does not exist**:
    -   **Create the tag in KlickTipp**: Creates a new tag in KlickTipp with the name derived from the form submission.
    -   **Aggregate array of created tags**: Collects IDs of the newly created tags.
    -   **Tag contact KlickTipp after trag creation**: Applies the newly created tag to the subscriber in KlickTipp.

## Services:

-   Gravity Forms
-   KlickTipp

## Hashtags:

#n8n #automation #KlickTipp #GravityForms #CRM
