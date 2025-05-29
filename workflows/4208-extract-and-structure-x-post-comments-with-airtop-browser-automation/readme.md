# Extract X Post Comments

## Use cases:
- **Market Research:** Extract comments from X posts to analyze public sentiment towards a brand, product, or campaign.
- **Lead Generation:** Identify potential leads by extracting comments from relevant X posts and gathering user information.
- **Competitor Analysis:** Monitor competitor X posts and extract comments to understand customer feedback and identify areas for improvement.

## How it works:
1.  The workflow is triggered either by a form submission or execution from another workflow. The form collects the X post URL, Airtop profile name (connected to X), and the maximum number of comments to extract.
2.  The "Unify params" node combines the input parameters into a single data structure, handling cases where the workflow is triggered by a form or another workflow.
3.  The "Extract X Post Comments" node uses Airtop to extract comments from the specified X post based on the provided URL, Airtop profile, and the maximum number of comments. It extracts the author's name, X profile URL, and the comment text for each comment.
4.  The "Edit Fields" node takes the `modelResponse` from the Airtop node and assigns it to `data.modelResponse` to keep only the necessary information.

## Services:
- Airtop: Automates web browser actions, extracts data from web pages

## Hashtags:
#n8n #automation #socialmediamarketing #X #Airtop
