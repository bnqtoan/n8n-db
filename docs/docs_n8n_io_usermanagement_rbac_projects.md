[](https://github.com/n8n-io/n8n-docs/edit/main/docs/user-management/rbac/projects.md "Edit this page")

# Projects

Feature availability

RBAC is available on all plans except the Community edition. Different plans have different numbers of projects and roles. Refer to n8n's [pricing page](https://n8n.io/pricing/) for plan details.

n8n uses projects to group workflows and [credentials](../../../glossary/#credential-n8n), and assigns [roles](../role-types/) to users in each project. This means that a single user can have different roles in different projects, giving them different levels of access.

## Create a project[#](#create-a-project "Permanent link")

Instance owners and instance admins can create projects.

To create a project:

1.  Select [![Plus icon](../../../_images/common-icons/plus.png)](https://docs.n8n.io/_images/common-icons/plus.png) **Add project**.
2.  Fill out the project settings.
3.  Select **Save**.

## Add and remove users in a project[#](#add-and-remove-users-in-a-project "Permanent link")

Project admins can add and remove users.

To add a user to a project:

1.  Select the project.
2.  Select **Project settings**.
3.  Under **Project members**, browse for users or search by username or email address.
4.  Select the user you want to add.
5.  Check the [role type](../role-types/) and change it if needed.
6.  Select **Save**.

To remove a user from a project:

1.  Select the project.
2.  Select **Project settings**.
3.  In the role type dropdown for the user you want to remove, select **Remove access**.
4.  Select **Save**.

## Delete a project[#](#delete-a-project "Permanent link")

To delete a project:

1.  Select the project.
2.  Select **Project settings**.
3.  Select **Delete project**.
4.  Choose what to do with the workflows and credentials. You can select:
    *   **Transfer its workflows and credentials to another project**: n8n prompts you to choose a project to move the data to.
    *   **Delete its workflows and credentials**: n8n prompts you to confirm that you want to delete all the data in the project.

## Move workflows and credentials between projects or users[#](#move-workflows-and-credentials-between-projects-or-users "Permanent link")

Workflow and credential owners can move workflows or credentials (changing ownership) to other users or projects they have access to.

Moving revokes sharing

Moving workflows or credentials removes all existing sharing. Be aware that this could impact other workflows currently sharing these resources.

1.  Select **Workflow menu** ![Workflow menu icon](../../../_images/common-icons/three-dot-options-menu.png) or **Credential menu** ![Workflow menu icon](../../../_images/common-icons/three-dot-options-menu.png) > **Move**.
    
    Moving workflows with credentials
    
    When moving a workflow with credentials you have permission to share, you can choose to share the credentials as well. This ensures that the workflow continues to have access to the credentials it needs to execute. n8n will note any credentials that can't be moved (credentials you don't have permission to share).
    
2.  Select the project or user you want to move to.
    
3.  Select **Next**.
4.  Confirm you understand the impact of the move: workflows may stop working if the credentials they need aren't available in the target project, and n8n removes any current individual sharing.
5.  Select **Confirm move to new project**.

## Using external secrets in projects[#](#using-external-secrets-in-projects "Permanent link")

To use [external secrets](../../../external-secrets/) in a project, you must have an [instance owner or instance admin](../../account-types/) as a member of the project.