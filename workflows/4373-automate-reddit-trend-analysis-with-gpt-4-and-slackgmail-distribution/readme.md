# Reddit Insight Broadcaster

## Use cases:
- **Market Monitoring:** Track trends and user sentiment in specific subreddits related to your industry, products, or competitors.
- **Content Curation:** Automatically discover and summarize engaging discussions to share with your team or include in newsletters.
- **Brand Reputation Management:** Monitor discussions about your brand or related topics to identify potential issues or opportunities.

## How it works:
The workflow starts with a scheduled trigger that runs daily at 9 AM. It fetches the top 5 Reddit posts from the specified subreddit ("Chatgpt") that contain the keyword "why I stopped using it". An AI Agent then analyzes each post, classifies its main topic, and writes a one-sentence summary using the OpenAI Chat Model. Finally, the workflow sends the topic, summary, and a link to the Reddit post to both a Slack channel and a Gmail address.

## Services:
- Reddit
- OpenAI
- Slack
- Gmail

## Hashtags:
#n8n #automation #reddit #openai #slack #gmail #workflow
