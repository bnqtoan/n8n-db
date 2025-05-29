# WordPress Contact Form (CF7) Responses and Classification

## Use Cases

- **Automated Customer Support:** Automatically classify and respond to customer inquiries submitted through a WordPress contact form, ensuring timely and relevant responses.
- **Lead Qualification:** Qualify leads based on the content of their messages and route them to the appropriate sales or marketing team.
- **Efficient Data Management:** Store contact form submissions and AI-generated responses in a Google Sheet for easy tracking and analysis.

## How it Works

1.  **Webhook Trigger:** The workflow is initiated when a new submission is received through a WordPress Contact Form 7 (CF7). The "From Wordpress" node listens for POST requests from the CF7 webhook (configured using the "CF7 to Webhook" plugin).
2.  **Data Extraction:** The "Set Fields" node extracts relevant data (first name, last name, email, phone, message) from the webhook payload.
3.  **Message Classification:** The "Message Classifier" node uses a Langchain Text Classifier to categorize the message into predefined categories (Product Info, Order Info, or other). The Google Gemini Chat Model is used to classify the text.
4.  **Response Generation:**
    -   Based on the classification, the workflow routes the data to one of three "Email writer" nodes (Email writer (Product info), Email writer (Order info), Email writer (Others)).
    -   Each "Email writer" node uses a Langchain Chain LLM to generate a draft email response using Google Gemini. The LLM is provided with a system prompt to guide the response generation process. Subject and Text node parse the LLM response.
5.  **Email Draft Creation:** The workflow then uses one of three "Email draft" nodes (Email draft - Product info, Email draft - Order info, Email draft - Other info) to create an email draft in Gmail using the generated response and the extracted contact information.
6.  **Data Storage:** Finally, the data and the generated email draft are appended to a Google Sheet using one of the "Save on Sheet" nodes (Save on Sheet (product), Save on Sheet (order), Save on Sheet (other)), categorized accordingly.

## Services

-   **WordPress:** Used as the platform for the contact form.
-   **Contact Form 7 (CF7):** WordPress plugin for creating contact forms.
-   **Gmail:** Used for creating and sending email drafts.
-   **Google Sheets:** Used for storing form data and generated responses.
-   **Google Gemini (PaLM) API:** Used via Langchain nodes for message classification and email draft generation.

## Hashtags

#n8n #automation #workflow #contactform #AI
