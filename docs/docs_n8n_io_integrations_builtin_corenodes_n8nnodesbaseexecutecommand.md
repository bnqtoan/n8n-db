[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.executecommand/index.md "Edit this page")

# Execute Command[#](#execute-command "Permanent link")

The Execute Command node runs shell commands on the host machine that runs n8n.

Which shell runs the command?

This node executes the command in the default shell of the host machine. For example, `cmd` on Windows and `zsh` on macOS.

If you run n8n with Docker, your command will run in the n8n container and not the Docker host.

Not available on Cloud

This node isn't available on n8n Cloud.

## Node parameters[#](#node-parameters "Permanent link")

Configure the node using the following parameters.

### Execute Once[#](#execute-once "Permanent link")

Choose whether you want the node to execute only once (turned on) or once for every item it receives as input (turned off).

### Command[#](#command "Permanent link")

Enter the command to execute on the host machine. Refer to sections below for examples of running [multiple commands](#run-multiple-commands) and [cURL commands](#run-curl-command).

#### Run multiple commands[#](#run-multiple-commands "Permanent link")

Use one of two methods to run multiple commands in one Execute Command node:

*   Enter each command on one line separated by `&&`. For example, you can combine the change directory (cd) command with the list (ls) command using `&&`.
    
    1
    
    `cd bin && ls`
    
*   Enter each command on a separate line. For example, you can write the list (ls) command on a new line after the change directory (cd) command.
    
    1
    2
    
    `cd bin ls`
    

#### Run cURL command[#](#run-curl-command "Permanent link")

You can also use the [HTTP Request](../n8n-nodes-base.httprequest/) node to make a cURL request.

If you want to run the curl command in the Execute Command node, you will have to build a Docker image based on the existing n8n image. The default n8n Docker image uses Alpine Linux. You will have to install the curl package.

1.  Create a file named `Dockerfile`.
2.  Add the below code snippet to the Dockerfile.
    
    1
    2
    3
    4
    
    `FROM docker.n8n.io/n8nio/n8n USER root RUN apk --update add curl USER node`
    
3.  In the same folder, execute the command below to build the Docker image.
    
    1
    
    `docker build -t n8n-curl`
    
4.  Replace the Docker image you used before. For example, replace `docker.n8n.io/n8nio/n8n` with `n8n-curl`.
    
5.  Run the newly created Docker image. You'll now be able to execute ssh using the Execute Command Node.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape and store data from multiple website pages**

by Miquel Colomer

[View template details](https://n8n.io/workflows/1073-scrape-and-store-data-from-multiple-website-pages/)

**Git backup of workflows and credentials**

by Allan Daemon

[View template details](https://n8n.io/workflows/1053-git-backup-of-workflows-and-credentials/)

**Track changes of product prices**

by sthosstudio

[View template details](https://n8n.io/workflows/837-track-changes-of-product-prices/)

[Browse Execute Command integration templates](https://n8n.io/integrations/execute-command/), or [search all templates](https://n8n.io/workflows/)

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common Issues](common-issues/).