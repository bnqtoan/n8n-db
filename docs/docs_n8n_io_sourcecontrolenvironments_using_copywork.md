[](https://github.com/n8n-io/n8n-docs/edit/main/docs/source-control-environments/using/copy-work.md "Edit this page")

# Copy work between environments[#](#copy-work-between-environments "Permanent link")

The steps to send work from one n8n instance to another are different depending on whether you use a single Git branch or multiple branches.

## Single branch[#](#single-branch "Permanent link")

If you have a single Git branch the steps to copy work are:

1.  Push work from one instance to the Git branch.
2.  Log in to the other instance to pull the work from Git. You can [automate pulls](#automatically-send-changes-to-n8n).

## Multiple branches[#](#multiple-branches "Permanent link")

If you have more than one Git branch, you need to merge the branches in your Git provider to copy work between environments. You can't copy work directly between environments in n8n.

A common pattern is:

1.  Do work in your developments instance.
2.  Push the work to the development branch in Git.
3.  Merge your development branch into your production branch. Refer to the documentation for your Git provider for guidance on doing this:
    *   [GitHub: Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
    *   [GitLab: Creating merge requests](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
    *   [Git: Basic branching and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
4.  In your production n8n instance, pull the changes. You can [automate pulls](#automatically-send-changes-to-n8n).

## Automatically send changes to n8n[#](#automatically-send-changes-to-n8n "Permanent link")

You can automate parts of the process of copying work, using the `/source-control/pull` API endpoint. Call the API after merging the changes:

1
2
3
4
5

`curl --request POST \ 	--location '<YOUR-INSTANCE-URL>/api/v1/source-control/pull' \ 	--header 'Content-Type: application/json' \ 	--header 'X-N8N-API-KEY: <YOUR-API-KEY>' \ 	--data '{"force": true}'`

This means you can use a GitHub Action or GitLab CI/CD to automatically pull changes to the production instance on merge.

A GitHub Action example:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16

`name: CI on:   # Trigger the workflow on push or pull request events for the "production" branch   push:     branches: [ "production" ]   # Allows you to run this workflow manually from the Actions tab   workflow_dispatch: jobs:   run-pull:     runs-on: ubuntu-latest     steps:       - name: PULL 				# Use GitHub secrets to protect sensitive information         run: >           curl --location '${{ secrets.INSTANCE_URL }}/version-control/pull' --header           'Content-Type: application/json' --header 'X-N8N-API-KEY: ${{ secrets.INSTANCE_API_KEY }}'`