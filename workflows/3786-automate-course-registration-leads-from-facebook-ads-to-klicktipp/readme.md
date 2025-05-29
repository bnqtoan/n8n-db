# Facebook Lead Ads to KlickTipp Integration

## Use cases:
- Automatically add leads captured from Facebook Lead Ads to KlickTipp for email marketing campaigns.
- Trigger personalized email sequences in KlickTipp based on specific form responses from Facebook Lead Ads.
- Segment new subscribers in KlickTipp based on their interests expressed in Facebook Lead Ads forms (e.g., course selection, payment method).

## How it works:
1. **Facebook Lead Ads Trigger:** The workflow starts when a new lead submits a form on Facebook or Instagram through a Facebook Lead Ad. The "Facebook Lead Ads Trigger" node listens for these submissions and captures the lead's data.
2. **Data Mapping and Subscription:** The "Subscribe lead in KlickTipp" node takes the data received from the Facebook Lead Ads Trigger and maps it to the corresponding fields in KlickTipp. This includes:
    - Email address
    - First Name (extracted from the full name)
    - Last Name (extracted from the full name)
    - "Facebook_Leads_Ads_Kommentar" to KlickTipp custom field `field216784`
    - "Facebook_Leads_Ads_Kursauswahl" to KlickTipp custom field `field216785`
    - "Facebook_Leads_Ads_Zahlungsweise" to KlickTipp custom field `field216786`
3. **KlickTipp Subscription:** The workflow subscribes the lead to a specified KlickTipp list.

## Services:
- Facebook Lead Ads
- KlickTipp

## Hashtags:
#n8n #automation #facebookleads #klicktipp #emailmarketing
