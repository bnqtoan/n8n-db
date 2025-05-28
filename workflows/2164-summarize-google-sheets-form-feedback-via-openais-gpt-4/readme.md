# Summarize Google Sheets form feedback via OpenAI's GPT-4

## Use cases:

- **Event Feedback Analysis:** Automatically summarize feedback collected after an event to quickly understand attendee sentiment and identify areas for improvement.
- **Customer Satisfaction Surveys:** Analyze customer survey responses from Google Sheets to generate concise reports on product or service satisfaction.
- **Employee Feedback Aggregation:** Summarize employee feedback collected via forms to get insights into workplace issues and improvement opportunities.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking 'Test workflow'" node.
2.  **Get Google Sheets records:** The "Get Google Sheets records" node retrieves data from a specified Google Sheet document.  It uses the document ID and sheet name to access the data, using "Ted's Tech Talks Google account" to authenticate.
3.  **Aggregate responses into arrays:** The "Aggregate responses into arrays" node consolidates the data into arrays, grouping responses for specific questions ("What went great?", "How can we improve?", and "What is the chance of recommending our event?").
4.  **Summarize via GPT model:** The "Summarize via GPT model" node utilizes OpenAI's GPT-4 to generate a summary report based on the aggregated feedback. It uses a system message to instruct GPT-4 on how to analyze the data and provide a Markdown-formatted response, using "Ted's Tech Talks OpenAi" to authenticate.
5.  **Convert from Markdown to HTML:** The "Convert from Markdown to HTML" node converts the Markdown-formatted summary from GPT-4 into HTML.
6.  **Send via Gmail:** The "Send via Gmail" node sends an email containing the HTML report to a specified email address (teds.tech.talks@gmail.com), using "Gmail account" to authenticate.

## Services:

-   Google Sheets
-   OpenAI
-   Gmail

## Hashtags:

#n8n #automation #googlesheets #openai #gpt4 #feedback #summary
