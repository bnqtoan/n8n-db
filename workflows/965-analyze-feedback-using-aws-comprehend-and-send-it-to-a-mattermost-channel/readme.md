# Typeform Feedback Sentiment Analysis and Mattermost Notification

## Use cases:

*   **Real-time Feedback Monitoring:** Automatically analyze feedback submitted through Typeform and get notified on Mattermost about negative feedback, allowing for quick responses and issue resolution.
*   **Event Evaluation:** Collect post-event feedback and instantly identify attendees with negative experiences, enabling targeted follow-up actions.
*   **Product/Service Improvement:** Gather user opinions through Typeform and immediately highlight negative sentiment for review and improvement of products or services.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new response is submitted via a specific Typeform form ("DuJHEGW5").
2.  **AWS Comprehend:** The "What did you think about the event?" question from the Typeform response is sent to AWS Comprehend for sentiment analysis.  AWS Comprehend determines the overall sentiment (POSITIVE, NEGATIVE, NEUTRAL, or MIXED) and provides a sentiment score.
3.  **IF Condition:** The workflow checks if the sentiment is "NEGATIVE".
4.  **Mattermost Notification:** If the sentiment is negative, a message is sent to a specified Mattermost channel ("h7cxrd1cefr13x689enzyw7xhc"). The message includes the sentiment score and the original feedback text from Typeform.
5.  **NoOp:** If the sentiment is not negative, the workflow does nothing

## Services:

*   Typeform
*   AWS Comprehend
*   Mattermost

## Hashtags:

#n8n #automation #sentimentanalysis #typeform #mattermost
