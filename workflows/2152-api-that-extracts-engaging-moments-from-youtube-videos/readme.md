# Youtube Engaging Moments Extractor

## Use cases:

- **Content Highlight Generation:** Automatically identify the most engaging parts of a YouTube video for creating highlight reels or promotional snippets.
- **Audience Retention Analysis:** Analyze viewer engagement by pinpointing moments with high intensity, helping content creators understand what resonates with their audience.
- **Educational Content Improvement:** In educational videos, identify moments where viewers are most engaged to understand which explanations or sections are most effective.

## How it works:

1.  The workflow starts with a **Webhook** node that listens for a request containing a YouTube video ID (`ytID`) as a query parameter.
2.  The **Input variables** node sets the `youtubeVideoID` variable based on the `ytID` received from the webhook.
3.  An **HTTP Request** node then calls the `yt.lemnoslife.com` API with the YouTube video ID to retrieve the "most replayed" markers, which indicate engaging moments.
4.  The **has intensity data?** node checks if the API response contains intensity data for the video.
5.  If there is NO intensity data **No intensity data available for video**, it will execute the node **Respond with "no results"** and will return a `JSON` response with `engagingMoments` equal to `null` and the `youtubeID`.
6.  If intensity data is available, the **Split Out** node extracts individual "most replayed" markers from the API response.
7.  The **intensity > 0.6** node filters these markers, keeping only the ones with an intensity score above 0.6.
8.  The **millisecs to seconds** node converts the `startMillis` value to `startSec`.
9.  The **Filter out moments close to each other** node ensures that the engaging moments are at least 20 seconds apart to avoid redundancy.
10. The **Create each moment (human readable)** node enriches the data creating properties with human-friendly data.
11. The **Aggregate** node collects all the filtered and processed engaging moments into a single list.
12. The **prepare response** node prepares a formatted response with the extracted engaging moments.
13. Finally, the **Respond with moments** node sends the formatted response back to the requestor. If the video has no intensity data, the **Respond with "no results"** node sends a message indicating that no engaging moments were found.

## Services:

-   YouTube (via `yt.lemnoslife.com` API)

## Hashtags:

#n8n #youtube #engagement #automation #contentanalysis
