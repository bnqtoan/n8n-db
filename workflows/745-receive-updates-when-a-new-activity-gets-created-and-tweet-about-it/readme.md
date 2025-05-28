# Receive updates when a new activity gets created and tweet about it

## Use cases:
- Automatically share your Strava activities on Twitter to keep your followers updated on your fitness progress.
- Promote a fitness challenge or event by automatically tweeting when participants complete activities.
- Create a public record of your workouts for personal motivation and accountability.

## How it works:
This workflow listens for new activity events from Strava. When a new activity is created (e.g., a run, ride, or swim), the workflow triggers. It then composes a tweet with information about the activity, including the distance and name of the activity and posts it to Twitter.

1.  **Strava Trigger:** This node monitors your Strava account for new activity creation events.  It uses a webhook to receive real-time updates from Strava.
2.  **Twitter:** This node takes the data from the Strava Trigger node, formats it into a tweet, and posts it to your Twitter account. It uses an expression to dynamically insert the distance and name of the activity into the tweet text.

## Services:
-   Strava
-   Twitter

## Hashtags:
#n8n #automation #strava #twitter #fitness
