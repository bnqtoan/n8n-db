[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.git.md "Edit this page")

# Git[#](#git "Permanent link")

[Git](https://git-scm.com/) is a free and open-source distributed version control system designed to handle everything from small to large projects with speed and efficiency.

Credentials

You can find authentication information for this node [here](../../credentials/git/).

## Operations[#](#operations "Permanent link")

*   [**Add**](#add) a file or folder to commit. Performs a [git add](https://git-scm.com/docs/git-add).
*   [**Add Config**](#add-config): Add configuration property. Performs a [git config](https://git-scm.com/docs/git-config) set or add.
*   [**Clone**](#clone) a repository: Performs a [git clone](https://git-scm.com/docs/git-clone).
*   [**Commit**](#commit) files or folders to git. Performs a [git commit](https://git-scm.com/docs/git-commit).
*   [**Fetch**](#fetch) from remote repository. Performs a [git fetch](https://git-scm.com/docs/git-fetch).
*   [**List Config**](#list-config): Return current configuration. Performs a [git config](https://git-scm.com/docs/git-config) query.
*   [**Log**](#log): Return git commit history. Performs a [git log](https://git-scm.com/docs/git-log).
*   [**Pull**](#pull) from remote repository: Performs a [git pull](https://git-scm.com/docs/git-pull).
*   [**Push**](#push) to remote repository: Performs a [git push](https://git-scm.com/docs/git-push).
*   [**Push Tags**](#push-tags) to remote repository: Performs a [git push --tags](https://git-scm.com/docs/git-push#Documentation/git-push.txt---tags).
*   Return [**Status**](#status) of current repository: Performs a [git status](https://git-scm.com/docs/git-status).
*   Create a new [**Tag**](#tag): Performs a [git tag](https://git-scm.com/docs/git-tag).
*   [**User Setup**](#user-setup): Set the user.

Refer to the sections below for more details on the parameters and options for each operation.

## Add[#](#add "Permanent link")

Configure this operation with these parameters:

*   **Repository Path**: Enter the local path of the git repository.
*   **Paths to Add**: Enter a comma-separated list of paths of files or folders to add in this field. You can use absolute paths or relative paths from the **Repository Path**.

## Add Config[#](#add-config "Permanent link")

Configure this operation with these parameters:

*   **Repository Path**: Enter the local path of the git repository.
*   **Key**: Enter the name of the key to set.
*   **Value**: Enter the value of the key to set.

### Add Config options[#](#add-config-options "Permanent link")

The add config operation adds the **Mode** option. Choose whether to **Set** or **Append** the setting in the local config.

## Clone[#](#clone "Permanent link")

Configure this operation with these parameters:

*   **Repository Path**: Enter the local path of the git repository.
*   **Authentication**: Select **Authenticate** to pass credentials in. Select **None** to not use authentication.
    *   **Credential for Git**: If you select **Authenticate**, you must select or create credentials for the node to use. Refer to [Git credential](../../credentials/git/) for more information.
*   **New Repository Path**: Enter the local path where you'd like to locate the cloned repository.
*   **Source Repository**: Enter the URL or path of the repository you want to clone.

## Commit[#](#commit "Permanent link")

Configure this operation with these parameters:

*   **Repository Path**: Enter the local path of the git repository.
*   **Message**: Enter the commit message to use in this field.

### Commit options[#](#commit-options "Permanent link")

The commit operation adds the **Paths to Add** option. To commit all "added" files and folders, leave this field blank. To commit specific "added" files and folders, enter a comma-separated list of paths of files or folders in this field.

You can use absolute paths or relative paths from the **Repository Path**.

## Fetch[#](#fetch "Permanent link")

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

## List Config[#](#list-config "Permanent link")

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

## Log[#](#log "Permanent link")

Configure this operation with these parameters:

*   **Repository Path**: Enter the local path of the git repository.
*   **Return All**: When turned on, the node will return all results. When turned off, the node will return results up to the set **Limit**.
*   **Limit**: Only available when you turn off **Return All**. Enter the maximum number of results to return.

### Log options[#](#log-options "Permanent link")

The log operation adds the **File** option. Enter the path of a file or folder to get the history of in this field.

You can use absolute paths or relative paths from the **Repository Path**.

## Pull[#](#pull "Permanent link")

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

## Push[#](#push "Permanent link")

Configure this operation with these parameters:

*   **Repository Path**: Enter the local path of the git repository.
*   **Authentication**: Select **Authenticate** to pass credentials in or **None** to not use authentication.
    *   If you select **Authenticate**, you must select or create **Credential for Git** for the node to use. Refer to [Git credential](../../credentials/git/) for more information.

### Push options[#](#push-options "Permanent link")

The push operation adds the **Target Repository** option. Enter the URL or path of the repository to push to in this field.

## Push Tags[#](#push-tags "Permanent link")

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

## Status[#](#status "Permanent link")

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

## Tag[#](#tag "Permanent link")

Configure this operation with these parameters:

*   **Repository Path**: Enter the local path of the git repository.
*   **Name**: Enter the name of the tag to create in this field.

## User Setup[#](#user-setup "Permanent link")

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Back Up Your n8n Workflows To Github**

by Jonathan

[View template details](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/)

**Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI**

by Jenny

[View template details](https://n8n.io/workflows/2440-building-rag-chatbot-for-movie-recommendations-with-qdrant-and-open-ai/)

**ChatGPT Automatic Code Review in Gitlab MR**

by assert

[View template details](https://n8n.io/workflows/2167-chatgpt-automatic-code-review-in-gitlab-mr/)

[Browse Git integration templates](https://n8n.io/integrations/git/), or [search all templates](https://n8n.io/workflows/)