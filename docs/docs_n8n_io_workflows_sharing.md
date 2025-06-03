[](https://github.com/n8n-io/n8n-docs/edit/main/docs/workflows/sharing.md "Edit this page")

# Workflow sharing[#](#workflow-sharing "Permanent link")

Feature availability

Available on Pro and Enterprise Cloud plans, and Enterprise self-hosted plans.

Workflow sharing allows you to share workflows between users of the same n8n instance.

Users can share workflows they created. Instance owners, and users with the admin role, can view and share all workflows in the instance. Refer to [Account types](../../user-management/account-types/) for more information about owners and admins.

## Share a workflow[#](#share-a-workflow "Permanent link")

1.  Open the workflow you want to share.
2.  Select **Share**.
3.  In **Add users**, find and select the users you want to share with.
4.  Select **Save**.

## View shared workflows[#](#view-shared-workflows "Permanent link")

You can browse and search workflows on the **Workflows** list. The workflows in the list depend on the project:

*   **Overview** lists all workflows you can access. This includes:
    *   Your own workflows.
    *   Workflows shared with you.
    *   Workflows in projects you're a member of.
    *   If you log in as the instance owner or admin: all workflows in the instance.
*   Other projects: all workflows in the project.

## Workflow roles and permissions[#](#workflow-roles-and-permissions "Permanent link")

There are two workflow roles: creator and editor. The creator is the user who created the workflow. Editors are other users with access to the workflow.

You can't change the workflow owner, except when deleting the user.

Credentials

Workflow sharing allows editors to use all [credentials](../../glossary/#credential-n8n) used in the workflow. This includes credentials that aren't explicitly shared with them using [credential sharing](../../credentials/credential-sharing/).

### Permissions[#](#permissions "Permanent link")

Permissions

Creator

Editor

View workflow (read-only)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

View executions

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

Update (including tags)

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

Run

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

Share

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

Export

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

Delete

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

## Node editing restrictions with unshared credentials[#](#node-editing-restrictions-with-unshared-credentials "Permanent link")

Sharing in n8n works on the principle of least privilege. This means that if a user shares a workflow with you, but they don't share their credentials, you can't edit the nodes within the workflow that use those credentials. You can view and run the workflow, and edit nodes that don't use unshared credentials.

Refer to [Credential sharing](../../credentials/credential-sharing/) for guidance on sharing credentials.