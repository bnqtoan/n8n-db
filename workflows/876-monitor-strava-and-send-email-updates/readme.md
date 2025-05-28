# Activity Encouragement

## Use cases:

- **Encourage Regular Exercise:** Automatically monitor a user's Strava activity and notify an accountability team if their activity level falls below a specified threshold, prompting them to offer support.
- **Promote Consistent Training:** Help athletes or individuals in training maintain their fitness goals by identifying periods of inactivity and encouraging them to get back on track.
- **Support Health and Wellness Programs:** Integrate with fitness trackers to identify participants who may need extra encouragement or support in achieving their activity goals within a wellness program.

## How it works:

1.  **Scheduled Trigger:** The workflow starts daily at 11:00 AM, as set in the "Check Daily at 11:AM" node.
2.  **Accountability Settings:** Sets several parameters, including minimum move time, accountability partner emails, user's name and email.
3.  **Fetch Strava Activities:** The "Strava" node retrieves all activity data for the authenticated user.
4.  **Check Activity Level:** Compares the user's "moving_time" (from Strava data) with the "moveTime" threshold defined in the "Accountability Settings" node.
5.  **Conditional Branching:**
    -   If the activity time is greater than or equal to the set threshold, the workflow ends at the "Enough Activity" node.
    -   If the activity time is less than the set threshold, the workflow proceeds to the "Send Email" node.
6.  **Send Encouragement Email:** The "Send Email" node sends a pre-defined email to the accountability partners, notifying them that the user may need encouragement due to insufficient activity. The email includes the user's name and a message suggesting they offer support.

## Services:

-   **Strava:** Used to retrieve the user's activity data.
-   **Email (SMTP):** Used to send encouragement emails to accountability partners.

## Hashtags:

#n8n #automation #strava #fitness #email #accountability
