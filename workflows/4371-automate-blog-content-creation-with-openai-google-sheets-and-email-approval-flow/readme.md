# Automated Blog Post Generation Workflow

## Use cases:

- **Content Marketing at Scale:** Automatically generate blog posts for various topics, ideal for businesses and marketers seeking to increase their online presence and drive traffic.
- **SEO Optimization:** Enhance existing blog content by improving titles, incorporating relevant keywords, and ensuring a structure that ranks well on search engines.
- **Consistent Content Creation:** Maintain a steady stream of blog posts without manual writing, ensuring a regular publishing schedule and fresh content for your audience.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a scheduled trigger, automatically initiating the content generation process at specified intervals.
2.  **Get Topic from Google Sheets:** It fetches a "Pending" topic from a Google Sheets document, ensuring no duplicate processing.
3.  **Copywriter AI Agent:** An AI agent uses the fetched topic to generate an SEO-optimized blog post, complete with an improved title, introduction, headings, subheadings, and a conclusion. The AI adheres to a specific format, outputting the result as a JSON object.
4. **Set Data:** Set the topic title and content generated from the previous node
5.  **Send Content for Approval:** The generated title and content are sent via email for human review and approval. The workflow pauses until a response (Approve, Reject, or Cancel) is received.
6.  **Approval Result:** A switch node routes the workflow based on the approval response.
    -   If approved, the workflow proceeds to update the topic status in Google Sheets to "Completed" and adds the generated content to a "Generated Content" sheet.
    -   If rejected, the workflow sends the topic, original content, and feedback to a revision agent for further processing.
    - If Canceled, the workflow ends
7.  **Copywriter Revision Agent:** If revisions are requested, another AI agent refines the content based on the provided feedback, ensuring the final output meets the required standards.
8.  **Update Topic Status on Google Sheets:** The topic status is updated to "Completed" in the Google Sheets document.
9.  **Add Generated Content to Google Sheets:** The approved content (title and body) along with the generation date is added to the "Generated Content" Google Sheets document.

## Services:

-   Google Sheets: Used for storing and managing topics and generated content.
-   OpenAI: Powers the AI agents for content generation and revision.
-   Gmail: Enables sending content for approval and receiving feedback.

## Hashtags:

#n8n #automation #contentcreation #AI #googlesheets
