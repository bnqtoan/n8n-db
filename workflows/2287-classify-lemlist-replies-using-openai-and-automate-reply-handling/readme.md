# Lemlist Reply Automation with OpenAI and Slack Integration

## Use cases:

- **Automated Lead Qualification:** Automatically categorize replies from Lemlist campaigns (e.g., "Interested," "Not Interested," "Unsubscribe") and take actions accordingly, such as unsubscribing leads or marking them as interested in Lemlist.
- **Real-time Slack Notifications for Important Replies:** Receive instant Slack notifications for new Lemlist replies, categorized by their intent, allowing sales or marketing teams to promptly address positive or critical responses.
- **Improved Sales Efficiency:** Streamline lead management by automatically identifying and prioritizing leads who express interest, enabling sales teams to focus on the most promising prospects.

## How it works:

1. **Lemlist Trigger:** The workflow starts when a new reply is received in a Lemlist campaign, specifically when `emailsReplied` event happen.
2. **Format Text with Markdown:** The reply text is formatted using Markdown to ensure it's clean and readable in Slack notifications.
3. **Categorize lemlist reply:** The text is sent to OpenAI, which classifies the reply into categories like "Interested", "Out of office", "Unsubscribe", "Not interested", or "Other."
4. **Merge Data:** Combine all the output data from the previous nodes.
5. **Route reply to the right branch:** Based on the category assigned by OpenAI, the workflow routes the reply to different branches:
    - **Send all replies to Slack:** A Slack message is sent to a specified channel with details about the reply, including the category, campaign information, sender and lead emails, LinkedIn URL, and a snippet of the reply text.
    - **Unsubscribe:** If the reply is categorized as "Unsubscribe", the lead is automatically unsubscribed from the Lemlist campaign.
    - **Interested:** If the reply is categorized as "Interested", the lead is marked as interested in Lemlist.

## Services:

- **Lemlist:** Used as the trigger and for unsubscribing leads and marking leads as interested.
- **OpenAI:** Used to categorize the intent of the email reply.
- **Slack:** Used to send notifications about new replies.

## Hashtags:

#n8n #automation #lemlist #openai #slack #leadmanagement
