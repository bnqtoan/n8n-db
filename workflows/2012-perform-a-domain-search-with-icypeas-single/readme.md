# Perform a domain search (single) with Icypeas

## Use cases:

- **Brand Monitoring:** Automatically check for unauthorized use of your brand name across different domains.
- **Competitor Analysis:** Regularly scan competitor domains to stay informed about their online presence and activities.
- **Lead Generation:** Identify potential leads by scanning domains related to your target industry or niche.

## How it works:

1.  The workflow starts with a "When clicking 'Execute Workflow'" node, which triggers the workflow manually.
2.  The "Authenticates to your Icypeas account" Code node takes your API key, API secret, and User ID to generate a signature and timestamp, then prepares the necessary authentication headers for the Icypeas API.  **Important:** You must update the placeholder values for `API_KEY`, `API_SECRET`, and `USER_ID` in this node with your actual Icypeas credentials, which you can find on your profile at `https://app.icypeas.com/bo/profile`.
3.  The "Run domain scan (single)" HTTP Request node sends a POST request to the Icypeas API to initiate a domain scan. The `domainOrCompany` parameter in the request body specifies the domain to be scanned (e.g., google.com). You can modify this value to scan different domains or companies. Note that the credential for `Authorization` must use the expression `{{ $json.api.key + ':' + $json.api.signature }}`.

## Services:

-   Icypeas ([https://icypeas.com](https://icypeas.com)): Domain intelligence and security platform.

## Hashtags:

#n8n #automation #workflow #domainscan #icypeas
