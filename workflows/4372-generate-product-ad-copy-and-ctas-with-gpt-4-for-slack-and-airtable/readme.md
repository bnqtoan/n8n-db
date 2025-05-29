# AI Copywriter Agent – From Product Info to Ad Copy + CTAs

## Use cases:
- Generate ad copy and calls-to-action (CTAs) for marketing campaigns based on product information.
- Automate the creation of marketing content for different products and store the results in Airtable.
- Quickly create ad variations by inputting product details, generating copy, and sending it to a Slack channel for review.

## How it works:
1.  The workflow starts with a **Form Trigger** node ("Product Info Input") that allows users to input product information, including the product name and features.
2.  The "Generate Ad Copy and CTAs" node receives the product information and uses a language model to generate ad copy and CTAs. It utilizes a prompt to instruct the model to create a 2-sentence ad copy and 3 CTAs.
3.  The "OpenAI Chat Model" node is configured with the `gpt-4o-mini` model to perform the text generation.
4.  The "Structured Output Parser" node parses the output from the language model to ensure it's in a structured format, defining "ad_copy" and "ctas" fields.
5.  The generated ad copy and CTAs are then sent to both "Slack" and "Airtable".
    -   The "Slack" node posts the generated ad copy and CTAs to a specified Slack channel.
    -   The "Airtable" node updates an Airtable record with the generated ad copy and CTAs, along with the original product information.

## Services:
- OpenAI: Utilized for generating ad copy and CTAs using the gpt-4o-mini model.
- Slack: Used to send the generated ad copy and CTAs to a specified Slack channel.
- Airtable: Used to store the generated ad copy, CTAs, and product information in a structured format.

## Hashtags:
#n8n #automation #AI #copywriting #marketing
