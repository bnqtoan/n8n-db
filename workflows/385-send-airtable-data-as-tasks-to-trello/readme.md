# CFP Selection 2 Workflow Readme

## Use Cases:

*   **Automated Content Creation for Speakers:** Automatically generate promotional banners for speakers selected for a conference or event, using their profile information and talk details.
*   **Streamlined Task Management:** Create Trello cards for selected speakers, including their information and a link to their promotional banner, facilitating task tracking and organization for the event planning team.
*   **Efficient CFP (Call for Proposals) Management:** After scoring proposals, this workflow automates the process of creating visual assets and adding selected proposals to a Trello board for further processing.

## How it works:

1.  **Trigger:** The workflow starts manually when the "On clicking 'execute'" node is triggered.
2.  **Fetch Proposals from Airtable:** The "Airtable" node retrieves a list of proposals from a specified Airtable base and table, filtering for proposals with a "Total Score" greater than 15. It uses the "Airtable" credential.
3.  **Generate Banner with Bannerbear:** The "Bannerbear" node takes the data from the Airtable records (talk title, abstract, profile picture URL, Twitter handle, and full name) and uses it to generate a banner image based on a specified template.  It uses the "Bannerbear" credential. The workflow waits for the image generation to complete.
4.  **Create Trello Card:** The "Trello" node creates a new card on a specified Trello list using the generated banner URL as an attachment. The card's name is set to the talk title. The description includes the abstract, speaker name, bio, email, and Twitter handle. It uses the "Trello" credential.

## Services:

*   **Airtable:** Used to store and retrieve Call for Proposal (CFP) data.
*   **Bannerbear:** Used to dynamically generate banner images based on CFP data.
*   **Trello:** Used for project management and tracking selected speakers.

## Hashtags:

#n8n #automation #workflow #cfp #bannerbear #trello
