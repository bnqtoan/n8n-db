# bsky_social_llm_n8n_workflow

## Use cases:

*   **Automated Content Generation and Posting to Bluesky:** Generate creative content using a language model (LLM) and automatically post it to a Bluesky social media account on a scheduled basis.
*   **Scheduled Information Sharing:** Regularly share information, updates, or curated content to a Bluesky account, sourced and potentially modified by an LLM.
*   **Experiment with LLM-driven Social Media Presence:** Test different prompts and LLM configurations to create engaging and diverse content for a Bluesky profile.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, which determines how often the workflow runs (e.g., daily, hourly).
2.  **Define Credentials:** The credentials to interact with the Bluesky API are loaded from a node named `Define Credentials`.
3.  **Create Bluesky Session:** An HTTP request is made to create and store a Bluesky session (`Create Bluesky Session`).
4.  **LLM Content Generation:** A `Groq Chat Model` node is used to generate content, which is then further processed by an `LLM Chain` node.
5.  **Content Length Control:** The `Code code to cap posts at 300 characters` node executes Javascript code that truncates post content.
6.  **Content Validation:** The Check if JSON is Valid node validates the content.
7.  **Execution Count:** A Javascript `Execution Count Code` node increases a counter.
8.  **Execution Count Check:** The `Execution Count Check` node determines whether to post to Bluesky or take a break with the `Wait` node.
9.  **Post to Bluesky:** The generated content is sent to the Bluesky API via an HTTP request (`Post to Bluesky`).
10. **Error Handling:** There is an error handling mechanism. If any of the API requests fail (`HTTP error`), it uses the `Stop and Error` node, preventing further actions.

## Services:

*   **Bluesky API:** The workflow interacts with the Bluesky social media platform to post content.
*   **Groq API:** The workflow uses the Groq API to use LLMs for content generation.

## Hashtags:

#n8n #automation #Bluesky #LLM #socialmedia
