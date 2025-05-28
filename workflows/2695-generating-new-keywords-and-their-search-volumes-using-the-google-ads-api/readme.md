# Generate New Keywords with Search Volumes⚒️⚒️🟢🟢

## Use cases:
- **SEO Keyword Research:** Generate a list of potential keywords for SEO campaigns, along with their monthly search volumes and competition data, to inform content strategy and targeting.
- **Google Ads Campaign Optimization:** Discover new keywords to target in Google Ads campaigns, using search volume and competition metrics to identify cost-effective opportunities.
- **Market Trend Analysis:** Analyze search trends related to specific keywords to understand market interest and identify emerging opportunities.

## How it works:
1.  The workflow is triggered (e.g., manually or via webhook) with an initial array of keywords.
2.  The `Set Keywords` node assigns the input keywords to the `$json.Keyword` variable.
3.  The `Generate new keywords` node sends a request to the Google Ads API, using the keywords as a seed to generate related keyword ideas. It retrieves data such as monthly search volume, competition, and suggested bid prices.  It's crucial to configure the `customer-id`, `developer-token`, and `login-customer-id` in the node's settings.
4.  The `Split Out` node separates the results into individual items for processing.
5.  The `Edit Fields` node extracts and transforms specific data points from the API response, such as keyword text, competition, average monthly searches, and bid prices. It also formats the bid prices to a readable format.
6.  The `Upsert` node appends the extracted keyword data, including search volume and competition metrics, to a specified Google Sheet.

## Services:
- Google Ads API
- Google Sheets

## Hashtags:
#n8n #SEO #GoogleAds #KeywordResearch #Automation
