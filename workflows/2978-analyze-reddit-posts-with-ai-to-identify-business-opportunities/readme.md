# Analyze Reddit Posts with AI to Identify Business Opportunities

## Use cases:
- **Market Research:** Identify unmet needs and pain points discussed in Reddit communities to discover potential business opportunities.
- **Product Development:** Gather insights from Reddit posts to refine product features, improve customer service, or create new offerings.
- **Competitive Analysis:** Analyze discussions about competitors to understand their strengths and weaknesses from a customer perspective.

## How it works:
1. **Data Retrieval:** The workflow starts with a manual trigger, fetching recent popular posts from a specified Reddit community (e.g., smallbusiness) using keywords like "looking for a solution." The `Get Posts` node retrieves data like post content, author, date, and score.
2. **Filtering**: It filters posts based on upvotes (more than 2), if the content is not empty, and if the post creation date is after the last 180 days using the node `Filter Posts By Features`.
3. **Content Extraction:** Extract key fields from the posts such as upvotes, number of subcribers, content of the post, url and date, storing it in new variables.
4. **AI-Powered Content Analysis:** Determines if the reddit post describes a business-related problem or a need for a solution, outputting 'yes' or 'no' using the node `Analysis Content By AI`.
5. **Content Filtering:** Using the node `Filter Posts By Content`, it will only continue with the analysis if the previous step results in a `yes`.
6. **Summarization:** Summarizes the content of the post using the node `Post Summarization` and `OpenAI Chat Model1`.
7. **Solution Generation:** Generates business ideas or services based on the content, suggesting ways to address identified problems using the node `Find Proper Solutions` and `OpenAI Chat Model`.
8. **Sentiment Analysis:** Assesses the sentiment of the post (positive, neutral, negative) to understand the emotional tone of the discussion using the node `Post Sentiment Analysis` and `OpenAI Chat Model2`.
9. **Email Notifications:** Sends email notifications via Gmail about posts and its content based on its sentiment using the nodes `Positive Posts Draft`, `Neutral Posts Draft` and `Negative Posts Draft`.
10. **Output to Google Sheets:** Combines the original post data with the AI-generated summary, solution, and sentiment analysis. Then, all the information is structured and appended to a Google Sheets document for further analysis or review.

## Services:
- Reddit API
- OpenAI API (Langchain)
- Gmail
- Google Sheets API

## Hashtags:
#n8n #automation #AI #Reddit #BusinessIntelligence
