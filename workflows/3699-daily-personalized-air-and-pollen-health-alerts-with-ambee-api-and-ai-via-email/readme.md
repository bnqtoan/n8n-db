# AirQuality Scheduler

## Use cases:

- **Personalized Environmental Health Alerts:** Sends daily email alerts with a summary of air quality and pollen levels tailored to an individual's age and health sensitivities.
- **Proactive Health Management:**  Provides users with timely information and suggestions to manage their exposure to pollutants and allergens, helping them make informed decisions about outdoor activities.
- **Location-Based Health Advisory:**  Offers location-specific environmental health advice, useful for people living in areas with fluctuating air quality or high pollen counts.

## How it works:

1.  **Schedule Trigger:** The workflow starts at a scheduled time (e.g., 7 AM) using the "Schedule Trigger" node.
2.  **Set Location Coordinates:** Sets the latitude and longitude coordinates for the location being monitored using the "Set Your Location Coordinates" node.
3.  **Set User Profile:** Defines a user profile including age and health sensitivities. The "Set User Profile" node stores this information.
4.  **Get Air data:** Retrieves air quality data from the Ambee API for the specified coordinates using the "Get Air data" node. It sends an HTTP request with the coordinates and API key.
5.  **Get Pollen data:** Retrieves pollen data from the Ambee API for the same location using the "Get Pollen data" node. It also sends an HTTP request.
6.  **AI Agent:** Integrates with a Large Language Model through an AI Agent to generate environmental data report
7.  **Gmail:** Email is sent to the user containing the summary and suggestions.

## Services:

*   Ambee API: Used to retrieve air quality and pollen data.
*   Gmail: Used to send email notifications.
*   OpenAI: Used via the AI Agent to analyse data.

## Hashtags:

#n8n #automation #airquality #pollen #health #environmental
