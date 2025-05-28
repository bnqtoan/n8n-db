# Contact Form Text Classifier for eCommerce

## Use cases:

- **Automated Customer Inquiry Routing:** Automatically route customer inquiries submitted through a contact form to the appropriate department (e.g., Sales, Support, or Product Inquiry) based on the content of their message.
- **Prioritized Customer Support:** Classify incoming customer messages based on urgency or topic, allowing support teams to prioritize critical issues and respond more efficiently.
- **Lead Qualification:** Analyze contact form submissions to identify potential leads and route them to the sales team for follow-up.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a contact form on your website. The "On form submission" node captures the data from the form, including name, email, and message.
2.  **Text Classification:** The "Text Classifier" node analyzes the message content and categorizes it into one of the predefined categories: "Request Quote", "Product info", "General problem", or "Order". This node uses a large language model.
3.  **Email Dispatch:** Based on the classification result, the workflow routes the form data to one of the department-specific email nodes ("Quote Dep.", "Prod. Dep.", "Gen. Dep.", "Order Dep.", "Other Dep."). Each node sends an email to a designated email address with the form data and the identified message type.
4. **Database Update**: In parallel with the email dispatch, the workflow also updates Google Sheets with the contact form data, including the classification result. This allows for tracking and analysis of customer inquiries over time.

## Services:

-   **Google Sheets:** Used to store contact form data and classification results.
-   **SMTP:** Used to send emails to different departments based on the classification.
-   **OpenAI:** Used as a Large Language Model to classify the data from the form.

## Hashtags:

#n8n #automation #ecommerce #contactform #textclassification
