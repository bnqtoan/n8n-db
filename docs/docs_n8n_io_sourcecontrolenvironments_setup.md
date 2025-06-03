[](https://github.com/n8n-io/n8n-docs/edit/main/docs/source-control-environments/setup.md "Edit this page")

# Set up source control for environments[#](#set-up-source-control-for-environments "Permanent link")

Link a Git repository to an n8n instance and configure your source control.

n8n uses source control to provide environments. Refer to [Environments in n8n](../understand/environments/) for more information.

## Prerequisites[#](#prerequisites "Permanent link")

To use source control with n8n, you need a Git repository that allows SSH access.

This document assumes you are familiar with Git and your Git provider.

## Step 1: Set up your repository and branches[#](#step-1-set-up-your-repository-and-branches "Permanent link")

For a new setup:

1.  Create a new repository for use with n8n.
2.  Create the branches you need. For example, if you plan to have different environments for test and production, set up a branch for each.

To help decide what branches you need for your use case, refer to [Branch patterns](../understand/patterns/).

## Step 2: Configure Git in n8n[#](#step-2-configure-git-in-n8n "Permanent link")

1.  Go to **Settings** > **Environments**.
2.  In **Git repository URL** enter the SSH URL for your repository.
3.  n8n supports ED25519 and RSA public key algorithms. ED25519 is the default. Select **RSA** under **SSH Key** if your git host requires RSA.
4.  Copy the SSH key.

## Step 3: Set up a deploy key[#](#step-3-set-up-a-deploy-key "Permanent link")

Set up SSH access by creating a deploy key for the repository using the SSH key from n8n. The key must have write access.

The steps depend on your Git provider. Help links for common providers:

*   [GitHub | Managing deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys)
*   [GitLab | Deploy keys](https://docs.gitlab.com/ee/user/project/deploy_keys/)

## Step 4: Connect n8n and configure your instance[#](#step-4-connect-n8n-and-configure-your-instance "Permanent link")

1.  In **Settings** > **Environments** in n8n, select **Connect**. n8n connects to your Git repository.
2.  Under **Instance settings**, choose which branch you want to use for the current n8n instance.
3.  **Optional**: select **Protected instance** to prevent users editing workflows in this instance. This is useful for protecting production instances.
4.  **Optional**: choose a custom color for the instance. This will appear in the menu next to the source control push and pull buttons. It helps users know which instance they're in.
5.  Select **Save settings**.