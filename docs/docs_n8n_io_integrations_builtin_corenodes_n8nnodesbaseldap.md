[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.ldap.md "Edit this page")

# LDAP[#](#ldap "Permanent link")

This node allows you to interact with your LDAP servers to create, find, and update objects.

Credentials

You can find authentication information for this node [here](../../credentials/ldap/).

## Operations[#](#operations "Permanent link")

*   [**Compare**](#compare) an attribute
*   [**Create**](#create) a new entry
*   [**Delete**](#delete) an entry
*   [**Rename**](#rename) the DN of an existing entry
*   [**Search**](#search) LDAP
*   [**Update**](#update) attributes

Refer to the sections below for details on configuring the node for each operation.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Compare[#](#compare "Permanent link")

Configure this operation using these parameters:

*   **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
*   **DN**: Enter the Distinguished Name (DN) of the entry to compare.
*   **Attribute ID**: Enter the ID of the attribute to compare.
*   **Value**: Enter the value to compare.

## Create[#](#create "Permanent link")

Configure this operation using these parameters:

*   **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
*   **DN**: Enter the Distinguished Name (DN) of the entry to create.
*   **Attributes**: Add the **Attribute ID**/**Value** pairs you'd like to create.

## Delete[#](#delete "Permanent link")

Configure this operation using these parameters:

*   **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
*   **DN**: Enter the Distinguished Name (DN) of the entry to be deleted.

## Rename[#](#rename "Permanent link")

Configure this operation using these parameters:

*   **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
*   **DN**: Enter the current Distinguished Name (DN) of the entry to rename.
*   **New DN**: Enter the new Distinguished Name (DN) for the entry in this field.

## Search[#](#search "Permanent link")

Configure this operation using these parameters:

*   **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
*   **Base DN**: Enter the Distinguished Name (DN) of the subtree to search in.
*   **Search For**: Select the directory object class to search for.
*   **Attribute**: Select the attribute to search for.
*   **Search Text**: Enter the text to search for. Use `*` for a wildcard.
*   **Return All**: When turned on, the node will return all results. When turned off, the node will return results up to the set **Limit**.
*   **Limit**: Only available when you turn off **Return All**. Enter the maximum number of results to return.

### Search options[#](#search-options "Permanent link")

You can also configure this operation using these options:

*   **Attribute Names or IDs**: Enter a comma-separated list of attributes to return. Choose from the list or specify IDs using an expression.
*   **Page Size**: Enter the maximum number of results to request at one time. Set to 0 to disable paging.
*   **Scopes**: The set of entries at or below the **Base DN** to search for potential matches. Select from:
    *   **Base Tree**: Often referred to as subordinateSubtree or just "subordinates," selecting this option will search the subordinates of the **Base DN** entry but not the **Base DN** entry itself.
    *   **Single Level**: Often referred to as "one," selecting this option will search only the immediate children of the **Base DN** entry.
    *   **Whole Subtree**: Often referred to as "sub," selecting this option will search the **Base DN** entry and all its subordinates to any depth.

Refer to [The LDAP Search Operation](https://ldap.com/the-ldap-search-operation/) for more information on search scopes.

## Update[#](#update "Permanent link")

Configure this operation using these parameters:

*   **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
*   **DN**: Enter the Distinguished Name (DN) of the entry to update.
*   **_Update Attributes_\*: Select whether to** Add **new,** Remove **existing, or** Replace\*\* existing attribute.
*   Then enter the **Attribute ID**/**Value** pair you'd like to update.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Adaptive RAG with Google Gemini & Qdrant: Context-Aware Query Answering**

by Nisa

[View template details](https://n8n.io/workflows/4043-adaptive-rag-with-google-gemini-and-qdrant-context-aware-query-answering/)

**Adaptive RAG Strategy with Query Classification & Retrieval (Gemini & Qdrant)**

by dmr

[View template details](https://n8n.io/workflows/3459-adaptive-rag-strategy-with-query-classification-and-retrieval-gemini-and-qdrant/)

**OpenAI Responses API Adapter for LLM and AI Agent Workflows**

by Jimleuk

[View template details](https://n8n.io/workflows/4218-openai-responses-api-adapter-for-llm-and-ai-agent-workflows/)

[Browse LDAP integration templates](https://n8n.io/integrations/ldap/), or [search all templates](https://n8n.io/workflows/)