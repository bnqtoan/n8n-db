# Lead Sentiment Qualifier

## Use cases:

- **Automated Lead Qualification:** Automatically qualify leads coming from marketing campaigns based on the sentiment expressed in their initial message, allowing sales teams to prioritize outreach.
- **Personalized Customer Onboarding:** Tailor the onboarding experience for new users based on their initial sentiment, addressing concerns or amplifying positive enthusiasm.
- **Proactive Customer Support:** Identify and address negative feedback from customers immediately by analyzing sentiment in their support requests.

## How it works:

1.  **Receive New Lead (Typeform):** The workflow starts when a new lead submits a form via Typeform, triggering a webhook to send the lead data to n8n.
2.  **Prepare Lead Data:** This node prepares the relevant lead information for sentiment analysis.
3.  **Classify Sentiment (Gemini or other ai model):** Uses Google Gemini (or another configured AI model) to analyze the sentiment of the lead's message (extracted from the "message," "mensagem," or "resposta" field). The AI categorizes the sentiment as positive, neutral, or negative.
4.  **Store Hot/Neutral/Cold Lead:** Based on the sentiment analysis result, the lead data is stored in the appropriate Supabase table (Hot, Neutral, or Cold).
5.  **Combine Lead Data:** All the lead data from each sentiment analysed are combined in this node.
6.  **Send WhatsApp Message:** A personalized WhatsApp message is sent to the lead using the WhatsApp Cloud API, confirming receipt of their submission.

## Services:

-   Typeform
-   Google Gemini
-   Supabase
-   WhatsApp Cloud API

## Hashtags:

#n8n #automation #leadgeneration #sentimentanalysis #whatsapp
