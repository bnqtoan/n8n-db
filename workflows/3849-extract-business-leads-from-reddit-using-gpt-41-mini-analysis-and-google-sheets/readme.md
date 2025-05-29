# Reddit Business Opportunity Finder and Summarizer

## Use cases:

- **Lead Generation**: Automatically identify potential leads from Reddit discussions by analyzing posts related to business needs and problems.
- **Market Research**: Gather insights into the challenges and needs of entrepreneurs and small business owners by summarizing relevant Reddit posts.
- **Content Creation**: Discover trending topics and pain points in specific industries to create targeted content that addresses customer needs.

## How it works:

1.  **Trigger**: The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Fetch Reddit Posts**: The "Get Posts" node retrieves recent posts from a specified Reddit subreddit (Entrepreneur) based on a keyword ("how do I find leads"). It sorts the posts by "hot".
3.  **Filter by Post Features**: The "Filter Posts By Features" node filters the posts based on the number of upvotes (greater than 2), presence of content, and date (posts created within the last 180 days).
4.  **Select Key Fields**: The "Select Key Fields" node selects and renames the relevant fields from the Reddit posts. This includes upvotes, subreddit subscribers, post content, URL, and date.
5. **Identify business opporunities with LLM**: The "Basic LLM Chain" and "OpenRouter Chat Model" nodes work together to determine whether the post contains a business problem or need. The LLM is prompted to classify the post as 'yes' or 'no' based on its content.
6.  **Filter Posts by Content**: The "Filter Posts By Content" node filters the post that had a 'yes' as output from LLM model.
7.  **Summarize Posts**: The "Post Summarization" node uses the Langchain Summarization node with 'OpenRouter Chat Model1' to summarize the filtered Reddit posts to extract key information.
8.  **Edit Fields**: The "Edit Fields" node adds the summary to the existing fields.
9.  **Edit Fields1**: The "Edit Fields1" node adds business_opportunity flag to the existing fields.
10. **Merge Data**: The "Merge Input" node merges selected fields from original fetched data with the identified business opportunity.
11. **Merge 3 Inputs**: The "Merge 3 Inputs" node merge summarized post with business opportunity fields.
12. **Load to Google Sheets**: The "Output The Results" node appends the extracted data, including the post summary and key fields, to a specified Google Sheet ("Find-Leads").

## Services:

-   Reddit API
-   OpenRouter API
-   Google Sheets API

## Hashtags:

#n8n #automation #leadgeneration #marketresearch #reddit
