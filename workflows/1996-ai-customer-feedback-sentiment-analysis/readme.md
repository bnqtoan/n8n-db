# Customer Feedback Analysis and Storage Workflow

## Use cases:

- Automatically analyze customer feedback from a form and store both the raw feedback and its sentiment in a Google Sheet for tracking and analysis.
- Monitor customer sentiment trends over time to identify areas for improvement in products or services.
- Provide a centralized repository of customer feedback, categorized by topic and sentiment, for use by customer service, product development, and marketing teams.

## How it works:

1.  **Submit form with customer feedback (Form Trigger):** The workflow starts when a customer submits a form with their feedback.
2.  **Classify feedback with OpenAI (OpenAI):** The customer's feedback is sent to OpenAI to determine the sentiment (e.g., positive, negative, neutral).
3.  **Merge sentiment with form content (Merge):** The original form data and the sentiment analysis results from OpenAI are combined into a single data structure.
4.  **Add customer feedback to Google Sheets (Google Sheets):** The combined data (original feedback and sentiment) is appended to a specified Google Sheet for storage and analysis.

## Services:

-   Google Sheets: Used to store customer feedback and sentiment analysis results.
-   OpenAI: Used to analyze the sentiment of the customer feedback.

## Hashtags:

#n8n #automation #workflow #customerfeedback #sentimentanalysis
