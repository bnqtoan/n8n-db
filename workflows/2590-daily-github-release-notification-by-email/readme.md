# New n8n Release Notifier

## Use cases:

- Automatically notify a team via email when a new release of n8n (or another GitHub repository) is published.
- Keep stakeholders informed about the latest updates, bug fixes, and features in a software project.
- Distribute release notes in a formatted HTML email for improved readability.

## How it works:

1.  **Daily Trigger:** The workflow starts with a `Daily Trigger` that runs once a day.
2.  **Fetch Github Repo Releases:** An `HTTP Request` node fetches the latest release information from the n8n GitHub repository (or a repository specified in the node's URL).  A sticky note reminds the user where to configure the URL.
3.  **If new release in the last day:** An `If` node checks if the release was published within the last 24 hours, based on the `published_at` field.
4.  **Split Out Content:** A `Split Out Content` node extract the `body` content.
5.  **Convert Markdown to HTML:** A `Markdown` node converts the release notes (which are in Markdown format) into HTML.
6.  **Send Email:** An `Email Send` node sends an email containing the HTML-formatted release notes to a specified email address. The email's subject is "New n8n release", and sticky notes remind the user where to configure the to Email and from email.

## Services:

-   GitHub API
-   SMTP (via n8n's Email Send node)

## Hashtags:

#n8n #automation #github #releaseNotes #emailNotification
