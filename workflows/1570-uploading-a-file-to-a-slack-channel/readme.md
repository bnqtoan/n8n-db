# Download File and Post to Slack

## Use cases:
- Automatically share newly generated reports or documents from a specific URL to a Slack channel for team review.
- Distribute marketing materials or promotional images to a Slack channel for immediate feedback and approval.
- Notify a Slack channel with updated files, such as database backups or configuration files, after they are downloaded from a server.

## How it works:
1.  The workflow is manually triggered.
2.  The "Download the file" node sends an HTTP request to download a file from the specified URL (`https://n8n.io/_nuxt/img/sync-data-between-apps.a4be8c7.png`). It saves the response as a file.
3.  The "Post to Slack" node then takes the downloaded file and posts it to a designated Slack channel ("C02GP22NHJ6") with an initial comment "This is the file." The node uses OAuth2 authentication to connect to Slack.

## Services:
- Slack
- HTTP Request

## Hashtags:
#n8n #Slack #FileSharing #Automation #HTTP
