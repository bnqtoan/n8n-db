# My Workflow

## Use Cases

*   **Automated Story Generation:** This workflow can be used to automatically generate story drafts from initial ideas, character outlines, and story rules.
*   **Content Creation for Writers:** Writers can use this workflow to enhance their stories by adding layers of plot, character development, and thematic elements.
*   **AI-Assisted Creative Writing:** It can assist in creative writing by suggesting improvements to a story's baseline, developing character arcs, and ensuring the story aligns with predefined rules and emotional sentiments.

## How it works

1.  The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered, initializing the story generation process.
2.  The `$INPUTS$` node serves as a starting point, feeding into the `story rules` node to define the initial constraints.
3.  **Initial Story Elements:** The `story rules` and `story baseline` nodes use the Langchain Agent to define the groundwork, and create a baseline for the story. These are parsed by `rules json` and `json schema` respectively.
4.  **Sentiment Analysis:** The `Sentiment Analysis` node analyzes the emotional tone of the generated content.
5.  **Character Development:** The workflow defines the characters for the story using `characters` node, after this is created it is parsed in the `character json` node.
6.  **Plot and Timeline:** The `story plot` node further develops the plot, and the `story timeline` refines the chronological order of events. The results are parsed by `Structured Output Parser1` and `timeline json` respectively.
7.  **Story Enhancement:** The main story content is iteratively enhanced. The `Split Out` and `Loop Over Items` nodes ensure each enhancement is processed individually and then aggregated. The `story enhancement` node handles the development of the story. It is parsed on `story enhancements json`.
8.  **Drafting and Editing:** The `story draft` and `edit notes` nodes generate the story draft and apply edits based on the defined rules and sentiments. Parsed by `Structured Output Parser3` and `edit notes json` respectively.
9.  **Finalization:** `story_final` node finalizes the story and then it's parsed by `Structured Output Parser2`.
10. **File Creation:** Finally, the `create_story_file` node creates a file (presumably on Google Drive, based on the node type) with the completed story and it is edited by the node `Edit Fields`.

## Services

*   **Langchain:** Used extensively via the Langchain nodes for AI-driven content generation and parsing (agent, sentiment analysis, and output parser nodes).
*   **Azure OpenAI or similar:** Used via `gpt-4o1` node to process and generate text.
*   **Google Drive:** Used to save the final story to a Google Drive file.

## Hashtags

#n8n #automation #storygeneration #langchain #contentcreation