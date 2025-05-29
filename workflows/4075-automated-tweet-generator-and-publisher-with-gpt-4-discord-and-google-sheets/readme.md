# AI Automated X (Twitter) post publisher- Build your personal brand

## Use cases:

- **Automated Content Creation:** Generate engaging Twitter posts to consistently maintain a brand presence without manual effort.
- **Personal Brand Enhancement:** Tailor content to align with a defined brand brief, ensuring consistency and relevance to the target audience.
- **Content Recycling and Optimization:**  Avoid duplicate content by checking post history, and continuously improve post quality based on feedback and rewriting.

## How it works:

1.  **Idea Generation:** The workflow starts by triggering manually or by another workflow. It retrieves the brand brief using a sub-workflow ("Get Brand Brief") and leverages it to generate 10 post topic suggestions using an OpenAI Chat Model.
2.  **Content Creation:** It selects one of the post ideas and uses another OpenAI Chat Model to create a draft post based on the brand brief and the chosen topic. The system incorporates memory buffers to maintain context.
3.  **Content Evaluation and Refinement:** The draft post is then evaluated using a "Get Content Feedback" sub-workflow, which scores the content's alignment with the brand brief. If the score is below 0.7, the post is refined based on the feedback, and the evaluation is repeated. It also checks Google Sheets to see if the post has already been published.
4.  **Content Rewriting**: The draft post rewritten using Google Sheets examples to match the personal style of the user
5.  **Approval Process:** The refined post is sent to a Discord channel for approval. This step allows for human oversight before posting. If the post isn't approved, it can be sent back to the "AI Content creator" node. The "Try Again" Discord approval is used to trigger this process again.
6.  **Publishing:** Once approved, the post is published on X (Twitter).
7.  **History Update and Examples:** Finally, the workflow updates a Google Sheet with the published post and adds the content to examples, recording the event and the post's content, and confirm the end of workflow to Discord Channel.

## Services:

-   OpenAI: For generating content ideas, creating post drafts, and content rewritting.
-   Discord: For content approval workflow.
-   Google Sheets: For storing brand brief, published post history, and examples to guide the content generation and rewriting.
-   X (Twitter): For publishing the final post.
-   Notion: Used in sub-workflow Get Brand Brief to generate brand brief.

## Hashtags:

\#n8n #automation #AIContent #TwitterAutomation #PersonalBranding
