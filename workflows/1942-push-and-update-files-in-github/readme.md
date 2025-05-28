# Work with GitHub | examples

## Use cases:

- **Automated documentation updates:** Automatically update a `README.md` file in a GitHub repository with the current date and time, ensuring the documentation is always up-to-date.
- **Content management system integration:** Use n8n to allow external content management systems to update files within a GitHub repository.
- **Configuration file management:** Automatically update configuration files within a repository with settings stored in external systems.

## How it works:

This workflow demonstrates two ways to interact with a GitHub repository: pushing a single file directly using the GitHub node and pushing multiple changes using Git commands.

1.  **Manual Trigger:** The workflow starts when you manually execute it using the "When clicking 'Execute Workflow'" node.
2.  **Configuration:** The "config" node sets a variable `localrepo` that you must set to the path to your local Git repository.
3.  **GitHub Node (Edit File):** The workflow first retrieves the current content of `README.md` using the "GitHub get file" node. This node needs a GitHub OAuth2 credential to connect to your account. The file content is then decoded from base64.  After decoding it updates the file with the current timestamp using the "GitHub push edited file" node.
4.  **Git Node (Update and Push):** In parallel, the workflow pulls the latest changes from the remote repository to a local repository with "Pull" Git Node. The "Update README and add new file" node simulates updating the `README.md` file and creates a new file using shell commands. The "Add files" node adds the new and modified files, and "Commit" creates a new commit with a message. The "Push" node then pushes these changes to the remote GitHub repository, requiring a Git password credential.

## Services:

-   GitHub
-   Git

## Hashtags:

#n8n #GitHub #Git #Automation #DevOps
