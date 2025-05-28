# Add a datapoint to Beeminder when new activity is added to Strava

## Use cases:

*   Automatically track your Strava activities (e.g., runs, bike rides) in Beeminder to monitor your fitness goals.
*   Use Strava activity data to keep yourself accountable and achieve consistent progress in your chosen sport.
*   Log each new Strava activity in Beeminder to visualize your long-term training patterns.

## How it works:

1.  The workflow starts with the "Strava Trigger" node, which listens for new activity events (specifically, the 'create' event) in your Strava account via a webhook.
2.  When a new activity is detected in Strava, the "Strava Trigger" node sends the activity data to the "Beeminder" node.
3.  The "Beeminder" node creates a new datapoint in your specified Beeminder goal ("testing"). The comment for the datapoint is set to the name of the Strava activity.

## Services:

*   Strava
*   Beeminder

## Hashtags:

#n8n #automation #Strava #Beeminder #fitness
