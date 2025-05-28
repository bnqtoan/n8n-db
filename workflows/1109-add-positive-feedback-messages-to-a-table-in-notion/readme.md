# My Workflow

## Use cases:

- **Customer Feedback Management:** Automatically process feedback from Typeform submissions, analyze the sentiment, and create entries in Notion for positive feedback and Trello cards for negative feedback.
- **Sentiment-Based Notifications:** Monitor customer feedback and send notifications to a Slack channel when highly positive feedback is received.
- **Automated Issue Tracking:** Use negative feedback to automatically create Trello cards for tracking and resolution.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new form is submitted via Typeform. It's configured to listen to the form with the ID "fBYjtY5e".
2.  **Google Cloud Natural Language:** The "Any suggestions for us?" field from the Typeform submission is sent to Google Cloud Natural Language API. This analyzes the sentiment of the feedback and returns a sentiment score.
3.  **IF:** This node checks if the sentiment score from Google Cloud Natural Language is greater than a certain threshold (implicitly 0 in this setup, since there is no value to compare against).
4.  **Notion:** If the sentiment score is above the threshold, a new page is created in a Notion database (ID: b7d1130a-3756-4bb3-aa56-0c77bf416437). The page title is set to the user's name from Typeform, and the "Feedback" property is populated with the user's suggestion.
5.  **Slack:** After creating the Notion page, a notification is sent to a specified Slack channel ("general" in this case). The notification includes the user's name and their feedback.
6.  **Trello:** If the sentiment score is not above the threshold, a new card is created in a Trello list (ID: 5fbb9e2eb1d5cc0a8a7ab8ac). The card's name and description include the sentiment score and the user's feedback. User's name is also added to the description.

## Services:

-   Typeform
-   Google Cloud Natural Language API
-   Notion
-   Slack
-   Trello

## Hashtags:

#n8n #automation #sentimentanalysis #feedback #nocode
