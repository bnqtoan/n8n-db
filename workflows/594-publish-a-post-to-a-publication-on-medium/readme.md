# Publish post to a publication

## Use cases:

- Automatically publish articles to a specified publication on Medium when triggered manually.
- Streamline content publishing workflows by connecting manual approval with automated posting.

## How it works:

This workflow starts with a "On clicking 'execute'" node, which serves as a manual trigger. When executed, it sends data to the "Medium" node. The "Medium" node then uses your Medium API credentials to publish a post to a specified publication.  The content and title of the post can be configured within the Medium node. Since the parameters `title` and `content` are empty, the workflow requires these values to be provided or populated dynamically for a successful execution. The `publication` parameter is set to `true` indicating this will be published to a publication, the publication ID needs to be set in `publicationId`.

## Services:

- Medium API

## Hashtags:

#n8n #automation #medium #contentcreation #publishing
