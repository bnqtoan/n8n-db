# Create, update, and get activity in Strava

## Use cases:

*   **Automated Activity Logging:** Automatically create Strava activities from other fitness trackers or applications when specific conditions are met (e.g., completing a workout in a fitness app).
*   **Post-Activity Update:** Update activity details (e.g., description, gear used) in Strava after manually recording or importing them.
*   **Activity Monitoring:** Regularly fetch activity data from Strava to monitor progress, analyze performance, or create custom reports.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "On clicking 'execute'" node.
2.  **Create Activity:** The "Strava" node creates a new activity with the name "Morning Run," sets the type to "Run," specifies a start date, elapsed time, and distance.
3.  **Update Activity:** The "Strava1" node updates the activity created in the previous step, using the activity ID obtained from the previous node's output. It adds a description, "Morning run in the park".
4.  **Get Activity:** The "Strava2" node retrieves the details of the updated activity from Strava, again using the activity ID obtained earlier.

## Services:

*   Strava API

## Hashtags:

#n8n #Strava #automation #fitness #API
