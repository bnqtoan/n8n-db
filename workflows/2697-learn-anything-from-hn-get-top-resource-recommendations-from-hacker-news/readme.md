# Top HN Recommendations Workflow

## Use cases:

- **Personalized Learning Recommendations:** Automatically gather top resources from Hacker News discussions based on a specific topic and email them to a user.
- **Content Curation:** Quickly identify and categorize valuable learning materials from online forums or communities.
- **Competitive Analysis:** Discover popular resources and community sentiment around specific technologies or skills.

## How it works:

1.  **GetTopicFromToLearn (Form Trigger):**  A form is presented to the user, asking for the topic they want to learn and their email address.
2.  **SearchAskHN (HackerNews):** Searches Hacker News for "Ask HN" posts related to the user's topic using the HackerNews node. It retrieves a specified number of posts.
3.  **SplitOutChildrenIDs (Split Out):** Extracts the comment IDs (`children`) from the Hacker News post.
4.  **FindHNComments (HTTP Request):**  For each comment ID, an HTTP request is made to the Hacker News API to fetch the comment's content.
5.  **CombineIntoSingleText (Aggregate):** All the comments are combined into a single text string.
6.  **Basic LLM Chain (LLM Chain):** The combined text is sent to the Google Gemini Chat Model.  A prompt instructs the LLM to analyze the comments and extract top resource recommendations, categorizing them by type and difficulty. The output is formatted in Markdown.
7. **Google Gemini Chat Model (Google Gemini Chat Model):** Uses Google's Gemini API to process the prompt and generate the formatted response.
8.  **Convert2HTML (Markdown):** Converts the Markdown-formatted response from the LLM Chain into HTML.
9.  **SendEmailWithTopResources (Email Send):** Sends an email to the user with the HTML-formatted recommendations.  Includes the topic, email address, and a summary of comments read.
10. **Finished (NoOp):** A No-Op node to mark the end of the workflow.

## Services:

- Hacker News API
- Google Gemini API
- SMTP (for sending emails)

## Hashtags:

#n8n #automation #hackernews #learningresources #llm
