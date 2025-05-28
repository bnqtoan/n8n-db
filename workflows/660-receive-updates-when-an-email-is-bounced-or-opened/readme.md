# Receive updates when an email is bounced or opened

## Use cases

*   **Monitor email deliverability:** Track bounced emails to identify and address issues with email lists or sending practices, ensuring better deliverability rates.
*   **Analyze email engagement:** Receive notifications when emails are opened to gauge recipient interest and optimize future email campaigns based on open rates.
*   **Real-time feedback on email performance:** Get immediate feedback on email performance, allowing for quick adjustments to email content or targeting strategies.

## How it works

This workflow is triggered by events from Postmark. Specifically, it listens for "bounce" and "open" events. When either a bounce or an open event occurs in Postmark, the "Postmark Trigger" node receives the relevant data, including the content if `includeContent` is set to true.  The workflow then makes this event data available for further processing (though this example workflow currently only receives the data).  To make this workflow useful, you would add additional nodes to process and act upon the received data (e.g. send a Slack message, update a Google Sheet, etc.).

## Services

*   Postmark

## Hashtags

#n8n #email #postmark #automation #emailtracking
