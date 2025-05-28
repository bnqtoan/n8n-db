# Enrich New Intercom Users with Contact Details from ExactBuyer

## Use cases:

- **Lead Enrichment:** Automatically enrich new Intercom contact profiles with up-to-date information such as social profiles, location, and contact details, improving lead quality and sales efficiency.
- **Personalized Marketing:** Use the enriched data to create highly targeted and personalized marketing campaigns in Intercom, leading to better engagement and conversion rates.
- **Improved Customer Service:** Provide customer service teams with a comprehensive view of each customer by automatically adding enriched data to Intercom profiles, enabling faster and more effective support.

## How it works:

1.  **Intercom Webhook Trigger:** The workflow starts when a new user is created in Intercom, triggering a webhook event (`contact.user.created`).
2.  **Check Event Type:** A switch node checks the topic of the incoming webhook. If it matches `contact.user.created`, the workflow proceeds to enrich the user data.
3.  **Set Key Fields:** The `user_id` and `email` from the Intercom event data are extracted and set as variables for use in subsequent nodes.
4.  **Enrich User from ExactBuyer:** The user's `email` is used to query the ExactBuyer API for additional contact information. If the ExactBuyer API call fails, the workflow continues to the "Could not find user" node, otherwise it proceeds.
5.  **Massage data:** This node formats the data received from ExactBuyer. It transforms the `social_profiles` and `location` data into a format suitable for updating the Intercom contact profile.
6.  **Update Intercom Contact:** The enriched data, including social profiles, contact details (phone, email), and location, is used to update the corresponding contact profile in Intercom via the Intercom API.

## Services:

-   **Intercom:** Customer communication platform.
-   **ExactBuyer:** Contact enrichment API.

## Hashtags:

#n8n #automation #intercom #exactbuyer #contactenrichment
