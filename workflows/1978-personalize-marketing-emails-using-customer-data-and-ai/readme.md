# Personalize Marketing Emails based on Customer Purchase History

## Use cases:

- **Re-engage unhappy customers:** Automatically identify customers who left negative feedback and send them a personalized email with a coupon to encourage them to make another purchase.
- **Personalized marketing campaigns:** Tailor email content based on past purchases and customer feedback to increase engagement and conversion rates.
- **Feedback-driven product improvement:** Collect customer feedback, analyze sentiment, and automatically generate targeted marketing messages to address concerns or highlight positive aspects of products.

## How it works:

1.  **Trigger:** The workflow starts when you manually execute it.
2.  **Download Data:** Downloads customer data (including purchase history and feedback) from an Excel file hosted online.
3.  **Extract and Set Options:** Extracts data from the Excel file and sets campaign options like "Campaign Target" and "Flavor" (tone of the email).
4.  **AI-Powered Content Generation:**
    *   It passes the customer data and feedback to the Langchain "Information Extractor" node.
    *   The Langchain node uses the OpenAI chat model to generate a personalized email headline and body based on the customer's feedback and purchase history. The AI also decides whether to include a coupon.
5.  **Data Validation:** Checks if the generated headline and body are not empty. If they are, it stops with an error.
6.  **Coupon Decision:** Determines whether to include a coupon in the email based on the AI's decision.
7.  **Coupon Generation (Mock):** If a coupon is needed, a "Fake coupon" node generates a placeholder coupon code, value, and terms. *Note: In a real-world scenario, you would replace this with a node that generates actual unique coupon codes.*
8.  **HTML Email Template:** Selects the appropriate HTML email template. One template is used for emails without coupons, and another includes a coupon section. The headline and body text are populated within the chosen template.
9.  **Compose Email:** Merges the generated content (headline, body, and coupon details if applicable) with the HTML email template.
10. **Send Email:** Finally, the workflow sends the personalized email to the customer using SMTP.

## Services:

*   **OpenAI:** Used through the Langchain node for generating personalized email content.
*   **SMTP:** Used to send emails.

## Hashtags:

#n8n #automation #emailmarketing #AI #langchain
