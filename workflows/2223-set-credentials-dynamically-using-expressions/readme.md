# Dynamic credentials using expressions

## Use cases:

- **Secure API Key Input:** Allows users to input their API keys through a form, avoiding hardcoding them directly into the workflow and enhancing security.
- **Personalized User Experience:**  Enables workflows to adapt to individual user credentials, providing a customized experience based on their specific API keys or settings.
- **Dynamic Credential Management:** Simplifies managing credentials for multiple users or accounts, as the workflow can handle credentials dynamically based on form input or other triggers.

## How it works:

1.  **n8n Form Trigger:** The workflow starts with a form where the user inputs their NASA API key.
2.  **NASA Node:** The NASA node receives the API key from the form through an expression. The expression `{{ $json["Enter your NASA API key"] }}` retrieves the value entered in the "Enter your NASA API key" field of the form. The credential for the NASA node is set dynamically using this expression.
3.  **Respond to Webhook:** After the NASA node retrieves data (likely the picture of the day, although the specific operation isn't detailed in the node parameters), the "Respond to Webhook" node redirects the user to a URL which seems to be an image based on the NASA API.

## Services:

-   NASA API

## Hashtags:

#n8n #automation #workflow #credentials #NASA
