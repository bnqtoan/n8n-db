# Gitlab Release to Outline Document

## Use cases:
- Automatically create a document in Outline whenever a new release is tagged in a GitLab repository, centralizing release notes.
- Keep a documented history of releases in Outline, facilitating knowledge sharing and easier access to release information for team members.
- Streamline the process of announcing new releases by automatically generating a pre-formatted document in Outline, saving time and reducing manual effort.

## How it works:
1.  **Gitlab Trigger:** The workflow starts with a "Gitlab Trigger" node, which listens for `tag_push` events from a specified GitLab repository (`tennox/ci-test`).
2.  **IF:** The `IF` node checks if the `object_kind` from the Gitlab Trigger payload is equal to `release`. This ensures the workflow only proceeds when a release (tag) is pushed.
3.  **HTTP Request:** If the condition in the `IF` node is met, the workflow executes an "HTTP Request" node to create a new document in Outline. It sends a POST request to the Outline API (`https://app.getoutline.com/api/documents.create`). The request body includes the `collectionId`, `parentDocumentId`, `publish` state, `title` and `text` for the new document. The `title` is dynamically generated as "Release " followed by the release name from the Gitlab payload, and the `text` is dynamically generated as the release description and a link to the release URL from the Gitlab payload.

## Services:
- GitLab
- Outline

## Hashtags:
#n8n #Gitlab #Outline #Automation #ReleaseNotes
