# Send LinkedIn Connection Request

## Use cases:

- **Automated Lead Generation:** Automatically send connection requests to leads identified through other platforms or data sources.
- **Streamlined Networking:** Quickly connect with individuals after attending a conference or event by automating the connection request process.
- **Targeted Outreach:** Send personalized connection requests with tailored messages based on specific criteria, such as industry or job title.

## How it works:

This workflow automates sending LinkedIn connection requests using Airtop. Here's a breakdown:

1.  **Trigger:** The workflow starts either via a web form submission ("On form submission" node) or when triggered by another workflow ("When Executed by Another Workflow" node).  Both triggers require `linkedin_url`, `airtop_profile` and `message`(optional).
2.  **Unify Parameters:** The "Unify Params" node consolidates input parameters from either trigger, ensuring consistent data structure (`linkedin_url`, `airtop_profile`, `message`).
3.  **Airtop Session:**
    -   "Create a Session" node initiates an Airtop browser session using the specified Airtop profile (`airtop_profile`), which should be authenticated with LinkedIn.
    -   "Create a window" node opens a new browser window within the Airtop session and navigates to the LinkedIn profile URL (`linkedin_url`).
4.  **Check Connection Status**: The "Click More button" node clicks the "More button" and "Check connection status" node uses Airtop extraction to determine if the target is already a connection by returning "Connect", "Pending" or "1st degree"
5.  **Conditional Connection Request:**  The "Is a connection?" node then routes the workflow:
    -   **If NOT already connected:** It proceeds to the "Click on connect" node that, well, clicks on the "Connect" button.
    -   **If already connected:** The "Terminate session" node terminates the Airtop session.
6. **Add a Note?** The "Switch1" node checks if a message was provided:
    - **If no message is provided:** The "Send connection w/out message" node sends the connection request without a note.
    - **If a message is provided:** The "Click add a note" node clicks the "Add a note" button and the "Type the message" node types the message and the "Send connection w/ message" node sends the request.
7.  **Airtop Session Termination:** The "Terminate session1" node terminates the Airtop session.

## Services:

*   Airtop: Used for browser automation to interact with LinkedIn.

## Hashtags:

#n8n #automation #linkedin #airtop #connectionrequest
