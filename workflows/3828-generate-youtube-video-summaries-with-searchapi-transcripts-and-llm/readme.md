# SearchApi Youtube Video Summary

## Use cases:

-   **Content Summarization:** Automatically generate concise summaries of YouTube videos for quick information consumption.
-   **Research Assistance:** Extract key insights from lengthy video content to support research or analysis tasks.
-   **Note-Taking Automation:** Convert video transcripts into summarized notes for personal learning or reference.

## How it works:

1.  The workflow starts with a **"When clicking 'Test workflow'"** node, which triggers the workflow execution.
2.  The **"SearchApi"** node uses the SearchApi service to retrieve video transcripts based on the provided `video_id` (e.g., "aigDyaxGsRo").
3.  The **"Split Out"** node separates the array of transcripts into individual items for processing.
4.  The **"Summarize"** node concatenates all the individual text transcripts.
5.  The **"OpenAI Chat Model"** node uses the `gpt-4o-mini` model to process the data.
6.  The **"Recursive Character Text Splitter"** splits the data to be smaller.
7.  Finally, the **"Summarization Chain"** node (Langchain) takes the concatenated data and generates a summary of the video content.

## Services:

-   SearchApi: Used to retrieve YouTube video transcripts.
-   OpenAI: Used for Language Model to process data.

## Hashtags:

#n8n #automation #youtube #summarization #langchain
