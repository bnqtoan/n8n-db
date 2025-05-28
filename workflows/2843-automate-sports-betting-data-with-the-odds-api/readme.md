# Automating Betting Data Retrieval with TheOddsAPI and Airtable

## Use cases:

1.  **Automated Sports Betting Data Tracking:** This workflow automatically retrieves upcoming NHL (Ice Hockey) game data and end-of-day results, storing them in Airtable for easy tracking and analysis.
2.  **Real-time Odds Monitoring (Adaptable):** While currently configured to retrieve events and scores, this workflow can be adapted (as the documentation links show) to monitor real-time odds from various sportsbooks for informed betting decisions.
3.  **Personalized Sports Dashboard:** By using Airtable as a backend, users can create a personalized dashboard to view upcoming games, track results, and analyze betting data based on their preferences.

## How it works:

1.  **Scheduled Triggers:** The workflow starts with two Schedule Trigger nodes. One triggers at 7:00 am to retrieve upcoming Ice Hockey (NHL) events, and the other at 11:00 pm to retrieve the scores for those events.
2.  **Retrieve Upcoming Events:** The "Retrieve Data Of Upcoming Sport Events For The Day" node uses an HTTP Request to fetch upcoming NHL events from TheOddsAPI. The API key is included in the URL.
3.  **Create Airtable Records:** The "Create Records Of Upcoming Events For The Day" node then creates new records in an Airtable table with the data retrieved from TheOddsAPI, including game ID, teams, sport key/title and commence time.
4.  **Retrieve Sport Results:** The "Retrieve Sport Results Data At The End Of The Day" node uses another HTTP Request to fetch the scores of the NHL events from TheOddsAPI.
5.  **Combine Data:** The "Combine Sport Results With Upcoming Events Records By Matching ID" node merges the data from upcoming events and the results, using the "id" field as the matching key.
6.  **Update Airtable Records:** The "Update Table Records With Scores And Results For Sport Events" node updates the existing Airtable records with the scores and results, marking if the event is completed, the scores and the last updated timestamp..

## Services:

*   TheOddsAPI: Used to retrieve upcoming sports events and their results.
*   Airtable: Used as a database to store and manage the retrieved sports data.

## Hashtags:

#n8n #automation #sportsbetting #dataanalysis #Airtable
