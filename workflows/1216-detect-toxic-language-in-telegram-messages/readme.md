# Telegram Toxicity Detector

## Use cases:

- **Moderating Telegram Groups:** Automatically identify and flag toxic messages in Telegram groups, enabling admins to take appropriate action.
- **Personal Safety:** Get notified when someone sends you a potentially offensive or threatening message on Telegram.
- **Content Filtering:**  Filter out toxic comments from Telegram channels to maintain a positive community environment.

## How it works:

1.  The workflow starts with a **Telegram Trigger** node, which listens for new messages in a specified Telegram chat or channel.
2.  When a new message arrives, the **Google Perspective** node analyzes the message text for various attributes like identity attack, threat, and profanity, using the Perspective API.
3.  The **IF** node checks if the profanity score returned by the Perspective API is greater than 0.7 (a threshold for determining toxicity).
4.  If the profanity score exceeds the threshold, the workflow sends a warning message "I don't tolerate toxic language!" back to the Telegram chat using the **Telegram** node, replying to the original toxic message.
5.  If the profanity score is below the threshold, the workflow does nothing, and the **NoOp** node simply terminates that branch.

## Services:

-   Telegram API
-   Google Perspective API

## Hashtags:

#n8n #automation #telegram #toxicity #moderation
