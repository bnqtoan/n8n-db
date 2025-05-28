# Reply Draft with OpenAI Assistant

## Use cases:
- Automatically generate reply drafts for incoming emails with specific labels, saving time and effort in composing responses.
- Streamline customer support by using an AI assistant to draft responses to common inquiries received via email.
- Automate email management by filtering important emails, generating drafts, and removing labels after processing, keeping the inbox organized.

## How it works:
1.  The workflow is triggered on a schedule (every 1 minute).
2.  It fetches Gmail threads that have specific labels.
3.  The workflow loops through each thread and retrieves the content of the last message in the thread.
4.  The message content is sent to an OpenAI Assistant to generate a reply draft.
5.  The AI-generated reply is converted into HTML format.
6.  The workflow constructs a raw email message in RFC format with the AI-generated reply, recipient, and subject.
7.  The raw message is encoded into a base64 string.
8.  A draft email is created in Gmail with the encoded message, associated with the original thread.
9.  Finally, the workflow removes the trigger label from the Gmail thread.

## Services:
- Gmail
- OpenAI Assistant API

## Hashtags:
#n8n #automation #gmail #openai #emailAutomation
