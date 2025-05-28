# Enrich new Hubspot contacts with contact and company data from ExactBuyer

## Use cases:
1. **Automated Contact Enrichment:** Automatically enrich new HubSpot contacts with data from ExactBuyer, such as social profiles, contact information (phone, email), and location data, saving time and improving data quality.
2. **Lead Qualification:** Use the enriched data to better qualify leads by identifying their job title, company, and other relevant information, allowing sales and marketing teams to prioritize their efforts.
3. **Improved Personalization:** Leverage the enriched data to personalize marketing campaigns and sales outreach, increasing engagement and conversion rates.

## How it works:
1. **HubSpot Trigger:** The workflow starts when a new contact is created in HubSpot, triggering the "On contact created" node.
2. **Get HubSpot Contact:** Retrieves the newly created contact's information from HubSpot using the "Get HubSpot contact" node.
3. **Set Keys:** Extracts the `user_id` and `email` from the HubSpot contact data and stores them as variables using the "Set keys" node.
4. **Check Email Existence:** Checks if the contact has an email to avoid errors in the process.
5. **ExactBuyer Enrichment:** If email exist, it sends an API request to ExactBuyer using the contact's email to enrich the contact's profile with additional information such as job title, company details, location, and contact details, using the "Enrich user from ExactBuyer" node.
6. **Update HubSpot Contact:** Updates the HubSpot contact with the enriched data received from ExactBuyer, using the "Update contact from Hubspot" node.  It maps fields like gender, school, country, job title, name, company.
7. **Error Handling:** If ExactBuyer fails to find a user, the "Could not find user" node is triggered, allowing for custom error handling or notifications.

## Services:
- HubSpot
- ExactBuyer

## Hashtags:
#n8n #automation #HubSpot #ExactBuyer #contactenrichment
