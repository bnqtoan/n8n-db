# Automate Product Data Collection & Customer Support via WhatsApp + GPT-4 + Google Sheets

## Use cases:

- **Automated Product Onboarding:** When a new product URL is sent via WhatsApp with the "train:" prefix, the workflow automatically extracts product information, enhances it with AI, and stores it in a Google Sheet.
- **Instant Customer Support:** Customers can ask questions about products via WhatsApp, and the AI-powered agent will understand their queries, fetch relevant product information from Google Sheets, and provide helpful solutions.
- **Proactive Issue Detection and Resolution:** The workflow identifies common customer issues, suggests solutions, and logs these interactions for further analysis and improvement.

## How it works:

1.  **Incoming WhatsApp Message:** The workflow listens for incoming messages via the `WhatsApp Business Cloud` trigger.
2.  **Check If Training:** It checks if the message starts with `train:`.
    *   If **yes**, it extracts the URL, fetches the HTML content, cleans it, and saves the raw product info into a Google Sheet.  Then, it uses an AI Agent to enhance product details such as name, price, topic, and FAQs, and updates the product sheet accordingly.
    *   If **no**, it treats the message as a customer support request and passes it to the customer support flow.  The AI agent analyzes the message, fetches product data from Google Sheets if needed, and identifies potential issues. It then suggests solutions, logs the interaction into a separate Google Sheet, and sends a response back to the user via WhatsApp.
3.  **Client Response:** Finally, the workflow sends the AI-generated or enhanced response back to the customer via WhatsApp.

## Services:

*   WhatsApp Business Cloud API
*   OpenAI API (GPT-4)
*   Google Sheets API

## Hashtags:

#n8n #automation #whatsapp #customersupport #ai
