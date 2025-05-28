# SurveyMonkey Response Trigger

## Use cases:

*   **Real-time Notifications:** Immediately notify a team or individual via Slack or email when a new survey response is submitted.
*   **Data Integration:** Automatically add survey responses to a Google Sheet or database for analysis and reporting.
*   **Automated Follow-up:** Trigger follow-up actions, such as sending a thank-you email or scheduling a call, based on survey responses.

## How it works:

This workflow is triggered by a new survey response in SurveyMonkey.

1.  **SurveyMonkey Trigger:** The workflow starts with the "SurveyMonkey Trigger" node, which listens for the `response_created` event for a specific survey (ID: 288506979). This node requires OAuth2 authentication to access the SurveyMonkey API. Once a new response is submitted to the survey, the trigger activates the workflow. Because there are no connections from this node to another, the workflow ends here, but you can connect other nodes, like Google Sheets to add responses.

## Services:

*   SurveyMonkey

## Hashtags:

#n8n #SurveyMonkey #Automation #Webhook #SurveyResponses
