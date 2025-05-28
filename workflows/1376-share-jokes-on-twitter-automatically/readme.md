# Tweet image jokes at 17H

## Use cases:

*   **Automated Daily Joke Posting:** Automatically post a joke with an image every day at 5 PM to your Twitter account, keeping your followers entertained.
*   **Content Scheduling:** Schedule humorous content in advance to maintain a consistent presence on Twitter without manual intervention.
*   **Engagement Booster:** Use a scheduled joke to spark conversations and increase engagement with your Twitter audience.

## How it works:

1.  **Scheduled Trigger (At 17H image jokes):** The workflow starts at 5 PM every day using a cron trigger.
2.  **Request Joke (Request blablagues):** An HTTP Request node fetches a joke from the `https://api.blablagues.net/?rub=images` API. The response format is set to "string".
3.  **Retrieve Image (Recup image):**  Another HTTP Request node extracts the image URL from the previous API response (`{{$node["Request blablagues"].json["data"]["data"]["content"]["media"]}}`) and downloads the image as a file.
4.  **Tweet Joke (Tweet image jokes):** The Twitter node composes a tweet with the joke's text (`{{$node["Request blablagues"].json["data"]["data"]["content"]["text"]}}`) and attaches the downloaded image (`data`). The tweet is then posted to the specified Twitter account.

## Services:

*   Blablagues API (`https://api.blablagues.net/?rub=images`)
*   Twitter API

## Hashtags:

#n8n #automation #twitter #jokes #scheduledposting
