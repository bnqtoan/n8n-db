# Create Asana Task From Webhook

## Use cases

- Automatically create Asana tasks when a specific event occurs in another application and sends a webhook.
- Integrate a form submission tool with Asana to generate tasks directly from user inputs.
- Trigger the creation of Asana tasks based on custom events within a monitoring system or other internal tools.

## How it works

1.  **Webhook:** Listens for incoming HTTP requests at the `/asana` endpoint. This acts as the trigger for the workflow.
2.  **Asana:** Creates a new task in Asana. The node uses the `query` parameter from the webhook's JSON payload to name the task dynamically and needs workspace and oAuth2 credentials.
3.  **Set:** Creates a new field called `response`, containing the URL of the created Asana Task

## Services

-   Asana

## Hashtags

#n8n #asana #automation #webhook #taskmanagement
