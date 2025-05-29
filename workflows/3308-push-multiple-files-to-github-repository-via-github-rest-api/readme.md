# Push Multiple Files to Github Repo via Github REST API

## Use cases:

- **Automated Configuration Management:** Automatically update configuration files stored in a GitHub repository whenever there's a change in the source configuration (e.g., updating application settings based on environment variables).
- **Website Content Updates:**  Dynamically push updated content (HTML, CSS, JavaScript files) to a website's repository, triggering a rebuild and deployment process.
- **Documentation Updates:**  Automatically update documentation files (e.g., README.md, API documentation) in a GitHub repository whenever the source documentation is updated.

## How it works:

This workflow pushes multiple files to a GitHub repository using the GitHub REST API. Here's a breakdown:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Set Github Info:** The "Set Github Info" node sets the necessary credentials and repository details, including the GitHub token, repository name, username, branch, and commit message.
3.  **File Content:** "File 1" and "File 2" nodes set the content for each file that need to be pushed.
4.  **Get latest commit SHA:** An HTTP Request node retrieves the SHA of the latest commit on the specified branch. This SHA is needed to create a new commit.
5.  **Get base tree SHA:** Another HTTP Request node retrieves the SHA of the base tree of the commit, which will be the base for the new tree with updated content.
6.  **Create new tree:** This HTTP Request node creates a new tree in Git with the content of the files to be updated. The `tree` parameter in the body specifies the file paths, modes, types, and content for each file.
7.  **Create commit:**  An HTTP Request node creates a new commit with the new tree. It uses the SHA of the latest commit as the parent and the SHA of the new tree.
8.  **Update branch:**  Finally, an HTTP Request node updates the specified branch to point to the new commit. This effectively pushes the changes to the repository.

## Services:

-   **GitHub API:** Interacts with the GitHub REST API to retrieve commit SHAs, create trees, create commits, and update the branch.

## Hashtags:

#n8n #github #automation #restapi #workflow
