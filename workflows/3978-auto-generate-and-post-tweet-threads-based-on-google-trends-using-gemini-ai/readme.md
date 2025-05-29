# My Workflow

## Use cases:
- **Automated Tweet Generation based on Google Trends:** This workflow automatically identifies trending topics on Google Trends and generates tweets to engage with current conversations.
- **Content Creation for Social Media:** It can be used to create a consistent stream of relevant content for social media platforms, enhancing brand visibility and attracting new followers.
- **Real-time Marketing Campaigns:** It allows businesses to react quickly to emerging trends by automatically creating and posting tweets related to those trends, which increases the relevance and effectiveness of marketing campaigns.

## How it works:
1. **Schedule Trigger:** The workflow starts with a "Schedule Trigger" node that initiates the process at defined intervals.
2. **Google Trends AUS:** The "Google Trends AUS" node retrieves trending topics from Google Trends for Australia.
3. **Aggregate:** The "Aggregate" node combines the data from Google Trends.
4. **Simple Memory:** Uses a Simple Memory node
5. **Google Gemini Chat Model:** Uses Google Gemini as its chat model.
6. **Trend Selector:** An "Trend Selector" node powered by a Langchain agent uses Google Gemini Chat Model to process the trends and select the most relevant ones.
7. **Tweet Generator:** A "Tweet Generator" node, also powered by a Langchain agent using Google Gemini Chat Model, generates tweets based on the selected trends.
8. **Code:** A "Code" node processes the generated tweets, formatting them for posting.
9. **Loop Over Items:** The "Loop Over Items" node iterates over the generated tweets, readying them for posting.
10. **X (Twitter):** The "X" node then posts the generated tweets to Twitter.
11. **Wait:** A "Wait" node delays the execution.

## Services:
- Google Trends
- Google Gemini
- Twitter (X)
- LangChain

## Hashtags:
#n8n #automation #twitter #googletrends #socialmedia
