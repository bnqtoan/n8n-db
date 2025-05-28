# GitHub Pull Request to Pipedrive Integration

## Use cases:

- Automatically create a note in Pipedrive when a pull request is created in a specific GitHub repository. This helps sales or customer success teams track customer development activities and engage proactively.
- Enrich Pipedrive contact profiles with information about their pull requests, providing valuable context for sales and support interactions.
- Alert relevant stakeholders in Pipedrive about important pull requests, such as those from key customers or those addressing critical issues.

## How it works:

1.  **ON Pull Request (GitHub Trigger):** This node triggers the workflow when a pull request event occurs in the specified GitHub repository ("DemoRepo" owned by "John-n8n").
2.  **HTTP Request:** Retrieves the URL of the sender, using the URL provided in the webhook's body. Uses the GitHub API with the configured credentials ("GitHub account").
3.  **Search PR user in Pipedrive by email:** Searches for a person in Pipedrive using the email address extracted from the GitHub event data.  Uses the Pipedrive API with the configured credentials ("Pipedrive account").
4.  **person exists (IF):** Checks if a person was found by checking that the name field returned by Pipedrive is not empty.
5.  **Pipedrive:** If the person exists, creates a note in Pipedrive associated with the found person, including a link to the pull request.
6. **NoOp:** If the person does not exist, does nothing.

## Services:

-   GitHub API
-   Pipedrive API

## Hashtags:

#n8n #github #pipedrive #automation #crm
