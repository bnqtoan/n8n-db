# Analyze the sentiment of feedback and send a message on Mattermost

## Use cases:

- **Event Feedback Analysis:** Automatically analyze feedback from event attendees collected via Typeform and notify the team on Mattermost if the feedback sentiment is negative.
- **Customer Satisfaction Monitoring:** Monitor customer feedback forms for negative sentiment and alert support teams to address potential issues proactively.
- **Product Review Analysis:** Analyze product reviews submitted through Typeform, identify negative comments, and notify product managers to investigate areas for improvement.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new response is submitted in a specified Typeform form.
2.  **Google Cloud Natural Language:** The "What did you think about the event?" field from the Typeform response is sent to Google Cloud Natural Language API to determine its sentiment score.
3.  **IF:**  The workflow checks the sentiment score returned by the Google Cloud Natural Language API.
4.  **Mattermost:** If the sentiment score is determined to be negative the workflow sends a message to a specific Mattermost channel with the sentiment score and the original feedback.
5. **NoOp:** If the sentiment score is positive, the workflow does nothing.

## Services:

-   Typeform
-   Google Cloud Natural Language API
-   Mattermost

## Hashtags:

#n8n #sentimentanalysis #mattermost #automation #feedback
