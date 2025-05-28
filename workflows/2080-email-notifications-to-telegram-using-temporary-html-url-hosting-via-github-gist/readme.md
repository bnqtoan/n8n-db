# Email to Telegram via GitHub Gist

## Use cases:

*   **Email Notification with Web Preview:** Receive Telegram notifications for new emails with a link to a temporary webpage displaying the email's HTML content.
*   **Personal Email Archiving (Temporary):**  Quickly archive email content as temporary, private GitHub Gists for personal reference, accessible via a Telegram bot.
*   **Simple Email Content Sharing (Self-Hosted):** Share email content via a self-hosted webpage (using GitHub Pages as an example), accessible through a link sent to Telegram.

## How it works:

1.  **Email Trigger (IMAP):** The workflow starts when a new, unseen email arrives in your configured IMAP inbox.
2.  **Github Gist:** This node sends a POST request to GitHub's Gist API to create a new, private Gist. The Gist's description includes the email's date, sender, and recipient. The email's HTML content is saved as a file named "email.html" within the Gist.  The node requires GitHub API credentials.
3.  **Telegram:**  A Telegram message is sent to the specified chat ID. The message includes:
    *   A notification "📧 You've got mail!"
    *   The sender's email address.
    *   A link to a webpage (hosted on `emails.nskha.com`) that displays the email content from the created Gist.  The link is constructed using the Gist's ID.
    *   An inline keyboard button with the name of the file on Github Gist that redirect to the email HTML preview.
4.  **Wait:** Pauses the workflow execution for 3 hours. This allows time for the email content to be viewed.
5.  **Github Gist  ‌:** After the waiting period, this node deletes the created Gist using its ID.  This node requires GitHub API credentials.
6.  **Telegram ‌:** Deletes the previously sent Telegram message using its message ID.

## Services:

*   **IMAP:**  Connects to an email server using the IMAP protocol to monitor for new emails.
*   **GitHub Gist API:** Used to create and delete temporary, private Gists for storing email HTML content.
*   **Telegram API:** Used to send and delete messages in a Telegram chat.
*   **emails.nskha.com:** External service to visualize the email content.

## Hashtags:

#n8n #automation #email #telegram #github #gist
