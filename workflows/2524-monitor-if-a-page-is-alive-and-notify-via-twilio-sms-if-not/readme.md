# My Workflow

## Use cases

*   **Website Monitoring:** This workflow can be used to monitor the status of a website or web service and send an SMS alert if it's down.
*   **API Health Checks:**  Regularly check the health of critical APIs and receive notifications if an API endpoint returns an error.
*   **Scheduled Status Updates:**  Even if not for error monitoring, this could be adapted to send scheduled status updates from an endpoint, though the current setup is geared towards error detection.

## How it works

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger node that runs every minute.
2.  **HTTP Request:** It then sends an HTTP request to a specified URL. The "Full Response" option is enabled, so the entire response, including headers and status code, is retrieved.
3.  **If:** An If node checks the HTTP response's status code.  Specifically, it verifies if the `statusCode` is equal to 200 (OK).
4.  **Twilio:** If the status code is *not* 200 (meaning the request failed or returned an error), the workflow sends an SMS message using Twilio to a predefined phone number. The message says "Service Down".

## Services

*   Twilio
*   Any service with an HTTP endpoint

## Hashtags

#n8n #automation #monitoring #http #twilio
