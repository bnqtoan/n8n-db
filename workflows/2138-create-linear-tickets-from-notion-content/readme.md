# Import Linear issues from Notion

## Use cases:

- **Automated Task Management:** Automatically create Linear issues from a designated Notion page, streamlining task creation and management.
- **Design Review Workflow:** Convert design review feedback in a Notion page into actionable Linear issues for the development team.
- **Meeting Action Items:** Transform meeting notes and action items recorded in Notion into Linear issues, ensuring follow-up and accountability.

## How it works:

1.  **Form Trigger:** The workflow starts when a user submits a form with the Notion page URL and the Linear team name.
2.  **Fetch Linear Team Details:** Retrieves the Linear team details based on the team name provided in the form.
3.  **Check if Team Exists:** Checks if the Linear team exists. If not, it responds with an error.
4.  **Get Issues from Notion:** Extracts to-do blocks from the specified Notion page using the Notion API.
5.  **Filter Issues:** Filters the to-do blocks to only include unchecked items that don't already have the "[In Linear]" tag.
6.  **Loop Over Items:** Iterates through each filtered to-do block.
7.  **Set Assignee and Title:** Extracts the assignee (if mentioned using square brackets) and title from the to-do block's text. If the title is too long, it uses OpenAI to shorten it.
8.  **Get issue contents:** Gets all the blocks that compound the issue in Notion.
9.  **Convert Contents to Markdown:** Converts the Notion content into Markdown format.
10. **Aggregate:** It aggregates the generated Markdown contents.
11. **Prepare Issue Data:** Creates the description for the Linear issue including the generated Markdown, Notion page link, and assignee.
12. **Create Linear Issue:** Creates a new issue in Linear with the extracted title, description, and assignee.
13. **Get Issue URL:** Retrieves the newly created Linear issue's URL.
14. **Add Link to Notion Block:** Updates the original Notion to-do block by prepending a link to the created Linear issue using the Notion API.

## Services:

-   **Notion API:** Used to retrieve and update content within Notion pages.
-   **Linear API:** Used to create issues in Linear.
-   **OpenAI API:** Used to shorten long titles.

## Hashtags:

#n8n #automation #Notion #Linear #workflow
