# dub.co URL Shortener

## Use cases:

- **Automated URL Shortening for Marketing Campaigns:** Automatically shorten long campaign URLs and track their performance within n8n workflows, feeding data into analytics dashboards.
- **Dynamic Link Generation for Social Media:** Create shortened URLs for social media posts based on content updates, ensuring consistent branding and easy link management.
- **Personalized Short Links for Customer Communication:** Generate unique, shortened URLs for individual customer interactions, allowing for personalized tracking and improved engagement.

## How it works:

1.  The workflow is manually triggered by clicking "Test Workflow".
2.  The **API Auth** node stores the required credentials and input, Long URL, Custom Slug, Project Slug and Custom Domain.
3.  The **CREATE** node sends a POST request to the Dub.co API to create a shortened URL using the provided Long URL, optional custom slug, and project slug. The Dub API Key is used for authentication.
4.  The **IF Slug available** node checks the HTTP status code of the API response. If the status code is 200 (success), it proceeds to the **Shortened URL** node. If not, it will proceed to **RETRIEVE** node
5.  If the **IF Slug available** node is not 200. The **RETRIEVE** node retrieves existing link information based on the custom slug, project slug, and optional custom domain.
6.  The **UPDATE** node updates an existing shortened URL on Dub.co with the provided Long URL, optional custom slug, and project slug. The Dub API Key is used for authentication.
7.  The **Shortened URL** node extracts the shortened URL from the API response and stores it in a new field called "Shortened URL".
8.  The **Done** node will end the automation

## Services:

*   Dub.co API

## Hashtags:

#n8n #automation #urlshortener #dubco #api
