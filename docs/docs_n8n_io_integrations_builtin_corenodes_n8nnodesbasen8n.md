[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.n8n.md "Edit this page")

# n8n[#](#n8n "Permanent link")

A node to integrate with n8n itself. This node allows you to consume the [n8n API](../../../../api/) in your workflows.

Refer to the [n8n REST API documentation](../../../../api/) for more information on using the n8n API. Refer to [API endpoint reference](../../../../api/api-reference/) for working with the API endpoints directly.

Credentials

You can find authentication information for this node in the [API authentication](../../../../api/authentication/) documentation.

SSL

This node doesn't support SSL. If your server requires an SSL connection, use the [HTTP Request node](../n8n-nodes-base.httprequest/) to call the [n8n API](../../../../api/). The HTTP Request node has options to [provide the SSL certificate](../../credentials/httprequest/#provide-an-ssl-certificate).

## Operations[#](#operations "Permanent link")

*   Audit
    *   [**Generate** a security audit](#generate-audit)
*   Credential
    *   [**Create** a credential](#create-credential)
    *   [**Delete** a credential](#delete-credential)
    *   [**Get Schema**](#get-credential-schema): Use this operation to get credential data schema for type
*   Execution
    *   [**Get** an execution](#get-execution)
    *   [**Get Many** executions](#get-many-executions)
    *   [**Delete** an execution](#delete-execution)
*   Workflow
    *   [**Activate** a workflow](#activate-deactivate-delete-and-get-workflow)
    *   [**Create** a workflow](#create-workflow)
    *   [**Deactivate** a workflow](#activate-deactivate-delete-and-get-workflow)
    *   [**Delete** a workflow](#activate-deactivate-delete-and-get-workflow)
    *   [**Get** a workflow](#activate-deactivate-delete-and-get-workflow)
    *   [**Get Many** workflows](#get-many-workflows)
    *   [**Update** a workflow](#update-workflow)

## Generate audit[#](#generate-audit "Permanent link")

This operation has no parameters. Configure it with these options:

*   **Categories**: Select the risk categories you want the audit to include. Options include:
    *   **Credentials**
    *   **Database**
    *   **Filesystem**
    *   **Instance**
    *   **Nodes**
*   **Days Abandoned Workflow**: Use this option to set the number of days without execution after which a workflow should be considered abandoned. Enter a number of days. The default is `90`.

## Create credential[#](#create-credential "Permanent link")

Configure this operation with these parameters:

*   **Name**: Enter the name of the credential you'd like to create.
*   **Credential Type**: Enter the credential's type. The available types depend on nodes installed on the n8n instance. Some built-in types include `githubApi`, `notionApi`, and `slackApi`.
*   **Data**: Enter a valid JSON object with the required properties for this **Credential Type**. To see the expected format, use the **Get Schema** operation.

## Delete credential[#](#delete-credential "Permanent link")

Configure this operation with this parameter:

*   **Credential ID**: Enter the ID of the credential you want to delete.

## Get credential schema[#](#get-credential-schema "Permanent link")

Configure this operation with this parameter:

*   **Credential Type**: Enter the credential's type. The available types depend on nodes installed on the n8n instance. Some built-in types include `githubApi`, `notionApi`, and `slackApi`.

## Get execution[#](#get-execution "Permanent link")

Configure this operation with this parameter:

*   **Execution ID**: Enter the ID of the execution you want to retrieve.

### Get execution option[#](#get-execution-option "Permanent link")

You can further configure this operation with this **Option**:

*   **Include Execution Details**: Use this control to set whether to include the detailed execution data (turned on) or not (turned off).

## Get many executions[#](#get-many-executions "Permanent link")

Configure this operation with these parameters:

*   **Return All**: Set whether to return all results (turned on) or whether to limit the results to the entered **Limit** (turned on).
*   **Limit**: Set the number of results to return if the **Return All** control is turned off.

### Get many executions filters[#](#get-many-executions-filters "Permanent link")

You can further configure this operation with these **Filters**:

*   **Workflow**: Filter the executions by workflow. Options include:
    *   **From list**: Select a workflow to use as a filter.
    *   **By URL**: Enter a workflow URL to use as a filter.
    *   **By ID**: Enter a workflow ID to use as a filter.
*   **Status**: Filter the executions by status. Options include:
    *   **Error**
    *   **Success**
    *   **Waiting**

### Get many execution options[#](#get-many-execution-options "Permanent link")

You can further configure this operation with this **Option**:

*   **Include Execution Details**: Use this control to set whether to include the detailed execution data (turned on) or not (turned off).

## Delete execution[#](#delete-execution "Permanent link")

Configure this operation with this parameter:

*   **Execution ID**: Enter the ID of the execution you want to delete.

## Activate, deactivate, delete, and get workflow[#](#activate-deactivate-delete-and-get-workflow "Permanent link")

The **Activate**, **Deactivate**, **Delete**, and **Get** workflow operations all include the same parameter for you to select the **Workflow** you want to perform the operation on. Options include:

*   **From list**: Select the workflow from the list.
*   **By URL**: Enter the URL of the workflow.
*   **By ID**: Enter the ID of the workflow.

## Create workflow[#](#create-workflow "Permanent link")

Configure this operation with this parameter:

*   **Workflow Object**: Enter a valid JSON object with the new workflow's details. The object requires these fields:
    *   `name`
    *   `nodes`
    *   `connections`
    *   `settings`

Refer to the [n8n API | Create a workflow documentation](../../../../api/api-reference/#tag/Workflow/paths/~1workflows/post) for more information.

## Get many workflows[#](#get-many-workflows "Permanent link")

Configure this operation with these parameters:

*   **Return All**: Set whether to return all results (turned on) or whether to limit the results to the entered **Limit** (turned on).
*   **Limit**: Set the number of results to return if the **Return All** control is turned off.

### Get many workflows filters[#](#get-many-workflows-filters "Permanent link")

You can further configure this operation with these **Filters**:

*   **Return Only Active Workflows**: Select whether to return only active workflows (turned on) or active and inactive workflows (turned off).
*   **Tags**: Enter a comma-separated list of tags the returned workflows must have.

## Update workflow[#](#update-workflow "Permanent link")

Configure this operation with these parameters:

*   **Workflow**: Select the workflow you want to update. Options include:
    *   **From list**: Select the workflow from the list.
    *   **By URL**: Enter the URL of the workflow.
    *   **By ID**: Enter the ID of the workflow.
*   **Workflow Object**: Enter a valid JSON object to update the workflow with. The object requires these fields:
    *   `name`
    *   `nodes`
    *   `connections`
    *   `settings`

Refer to the [n8n API | Update a workflow documentation](https://docs.n8n.io/api/api-reference/#tag/Workflow/paths/~1workflows~1%7Bid%7D/put) for more information.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Very quick quickstart**

by Deborah

[View template details](https://n8n.io/workflows/1700-very-quick-quickstart/)

**AI agent that can scrape webpages**

by Eduard

[View template details](https://n8n.io/workflows/2006-ai-agent-that-can-scrape-webpages/)

**Pulling data from services that n8n doesn’t have a pre-built integration for**

by Jonathan

[View template details](https://n8n.io/workflows/1748-pulling-data-from-services-that-n8n-doesnt-have-a-pre-built-integration-for/)

[Browse n8n integration templates](https://n8n.io/integrations/n8n/), or [search all templates](https://n8n.io/workflows/)