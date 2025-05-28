# Strava Activities to Google Sheets

## Use cases:

- **Automatic tracking of Strava activities:** This workflow automates the process of pulling your Strava cycling activities and saving them to a Google Sheet. This eliminates manual data entry and ensures an up-to-date record of your rides.
- **Fitness progress monitoring:** By storing your Strava data in Google Sheets, you can easily create charts and graphs to visualize your cycling progress over time, track distance, elevation gain, and other metrics.
- **Backup and analysis of Strava data:** Strava activities saved in Google Sheets serve as backup and facilitate more detailed analysis using spreadsheet tools.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "Schedule Trigger" that runs every 2 hours.
2.  **Google Sheets (activities):** Fetches data from Google Sheets, specifically from a sheet named "n8n" within the "Sherlo_Bike" document. This sheet presumably contains a list of already-recorded Strava activity IDs.
3.  **Sort (sort_saved):** Sorts the records fetched from Google Sheets, by the "Ref" column.
4.  **Limit (last_saved):** It takes the last 10 items from the sorted data.
5.  **Set (saved_last):** Extracts the "Ref" (activity ID) field from each record from "activities" sheet and saves it to a variable named `id` for later comparison.
6.  **Strava:** Retrieves the latest 10 Strava activities.
7.  **Sort (sort_strava):** Sorts the records fetched from Strava, by the "id" column.
8.  **Remove Duplicates:** This node will remove the duplicate data based on the `id` field.
9.  **Limit (last_strava):** It takes the last 10 items from the sorted data.
10. **Set (strava_last):** Transforms the Strava activity data, extracting key fields like id, date, distance, elevation gain, and time, and converting them to appropriate formats.
11. **Code:**  This node filters new activities in strava against the activities saved in the google sheets. It will identify any activities that do not exist in the google sheets.
12. **Sort (sort_results):** Sorts the new activities records by the "id" field.
13. **Google Sheets:** Appends the filtered Strava activity data to the same Google Sheet, updating your record with new rides. It maps the extracted fields to specific columns in the sheet (Kms, Ref, Fecha, Track, Tiempo, Desnivel).

## Services:

-   Strava API
-   Google Sheets API

## Hashtags:

#n8n #strava #googleSheets #automation #fitnessTracking
