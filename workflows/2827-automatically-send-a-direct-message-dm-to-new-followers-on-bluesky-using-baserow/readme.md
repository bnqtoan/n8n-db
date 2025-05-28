# Automatically Send a Direct Message (DM) to New Followers on Bluesky

## Use cases:

- **Automated Welcome:** Automatically send a personalized welcome message to each new follower on Bluesky, improving engagement and making new followers feel valued.
- **Lead Generation:** Use the welcome message to subtly promote a product, service, or call to action, turning new followers into potential leads.
- **Community Building:** Kickstart conversations and foster a sense of community by prompting new followers with relevant questions or inviting them to share their interests.

## How it works:

This workflow automates sending welcome messages to new followers on Bluesky. Here's a breakdown:

1.  **Scheduler:** The workflow starts with the "Run Daily at 9 AM" node, which triggers the process every day at 9 AM.
2.  **Bluesky Credentials:** Sets the necessary credentials for interacting with the Bluesky API.
3.  **Create Bluesky Session:** Establishes a session with the Bluesky API to authenticate requests.
4.  **Get Latest Followers:** Retrieves the list of the most recent followers from Bluesky via an HTTP Request.
5.  **Extract Followers Array:** Parse the followers list into an array that can be used by the workflow.
6.  **Loop Followers:** Iterates through each follower in the extracted array.
7.  **Limit:** Limits the total number of new followers to get.
8.  **Get All New Followers:** Get an array of new followers.
9.  **Loop New Followers:** Loops through the new followers list.
10. **Get Firstname:** Parse the firstname of each new follower.
11. **Get ConvoId:** Use the firstname and get the conversation ID.
12. **Get Follower Record:** Checks in a Baserow database if a follower record exists for the current follower.
13. **If Follower Exists:** Conditionally branches the workflow based on whether a follower record already exists in the database.
    *   **If No:** The workflow proceeds to "Create Follower Record" to create a new entry in Baserow.
    *   **If Yes:** The workflow proceeds to "Loop Followers".
14. **Create Follower Record:** Creates a new record in a Baserow database to store information about the new follower.
15. **Wait Follower Loop:** Pauses the workflow before executing the "Loop Followers" node.
16. **Loop Followers:** The workflow splits the records into batches so we can process them.
17. **Double Check If Welcome Has Already Been Sent:** Checks in a Baserow database if a welcome has already been sent for the current follower.
18. **Create Welcome Message:** Creates a custom welcome message using the first name of the new follower.
19. **Send Welcome Message:** Sends the personalized welcome message to the new follower on Bluesky via an HTTP Request.
20. **Update Follower Record to SentWelcome = TRUE:** Updates the Baserow record to flag that a welcome message has been sent to the follower.
21. **Wait New Follower Loop:** Pauses the workflow before executing the "Loop New Followers" node.

## Services:

-   Bluesky API
-   Baserow

## Hashtags:

#n8n #Bluesky #Automation #SocialMedia #FollowerEngagement
