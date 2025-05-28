# Automatic Weekly Digital PR Stories Suggestions

## Use cases:
- **Weekly Trend Analysis:** Automatically identify trending topics on Reddit and analyze news articles related to those topics to provide a weekly summary of potential PR opportunities.
- **Competitor Monitoring:** Track specific keywords or topics relevant to your industry and analyze the public sentiment around them to identify potential risks and opportunities.
- **Content Ideation:** Generate fresh ideas for blog posts, articles, and social media content based on the analysis of trending news and Reddit discussions.

## How it works:
1. **Schedule Trigger:** The workflow starts with a scheduled trigger to run every week (Mondays at 6 AM).
2. **Set Data:** Sets the topics to be searched on Reddit and the Jina API key for news content extraction.
3. **Split Topics into Items:** Splits the topics set in the previous node into individual items for processing.
4. **Search Posts:** Searches Reddit for posts related to the specified topics, sorted by "hot."
5. **Upvotes Requirement Filtering:** Filters the search results to only include posts with more than 100 upvotes, that are links (excluding text-based posts), and that don't link to "bsky.app".
6. **Set Reddit Posts:** Extracts relevant information from Reddit posts, such as title, subreddit, upvotes, comments, Reddit URL, URL, and post ID.
7. **Remove Duplicates:** Removes duplicate posts based on the URL, keeping the one with the most upvotes.
8. **Loop Over Items:** This splits the incoming data into individual items, to process each Reddit post separately in the following steps.
9. **Set for Loop:** Sets the data for the loop
10. **Get Comments:** Retrieves all comments for each Reddit post.
11. **Extract Top Comments:** Extracts and structures the top 30 comments (including replies) from the Reddit post, sorted by score.
12. **Format Comments:** Formats the extracted comments into a Markdown structure, preserving the comment hierarchy.
13. **Anthropic Chat Model:** Analyzes the Reddit post and its comments to extract meaningful patterns, sentiments, and insights for PR strategy development.
14. **Comments Analysis:** Performs sentiment analysis on the Reddit comments and identifies key narratives and potential PR implications.
15. **Get News Content:** Retrieves the content of the news article linked in the Reddit post using the Jina AI API.
16. **Keep Last:** Extracts relevant information from the news article, such as title and content.
17. **Anthropic Chat Model1:** Analyzes news content while leveraging Reddit engagement metrics and sentiment data to evaluate news popularity and potential PR opportunities.
18. **News Analysis:** Analyzes the news content, Reddit engagement metrics, and sentiment data to identify viral elements, narrative opportunities, and strategic recommendations.
19. **Anthropic Chat Model2:** Generates a comprehensive PR strategy report based on the news analysis, Reddit metrics, and sentiment analysis.
20. **Stories Report:** Generates story ideas, prioritizes them, and provides an execution roadmap for PR activities.
21. **Set Final Report:** Combines the Reddit metrics, news content analysis, and comment analysis into a final report.
22. **Convert to File:** Converts the final report into a text file.
23. **Loop Over Items:** Returns to the begining of the loop to start processing the next item
24. **Aggregate:** Combines all the files for the loop into a single item.
25. **Merge Binary Files:** Combines the binary data of the generated files into a single item.
26. **Compress files:** Compresses the generated text file into a zip archive.
27. **Google Drive6:** Uploads the zip archive to a specific folder in Google Drive.
28. **Google Drive7:** Shares the uploaded file on Google Drive with anyone who has the link.
29. **Send files to Mattermost3:** Sends a message to a specific Mattermost channel with a link to download the generated report from Google Drive.

## Services:
- Reddit API
- Jina AI API
- Google Drive API
- Mattermost API
- Anthropic API

## Hashtags:
#n8n #automation #digitalPR #workflow #sentimentanalysis
