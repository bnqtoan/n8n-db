[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.executecommand/common-issues.md "Edit this page")

# Execute Command node common issues[#](#execute-command-node-common-issues "Permanent link")

Here are some common errors and issues with the [Execute Command node](../) and steps to resolve or troubleshoot them.

## Command failed: <command> /bin/sh: <command>: not found[#](#command-failed-command-binsh-command-not-found "Permanent link")

This error occurs when the shell environment can't find one of the commands in the **Command** parameter.

To fix this error, review the following:

*   Check that the command and its arguments don't have typos in the **Command** parameter.
*   Check that the command is in the `PATH` of the user running n8n.
*   If you are running n8n with Docker, check if the command is available within the container by trying to run it manually. If your command isn't included in the container, you might have to extend the official n8n image with a [custom image](https://docs.docker.com/build/building/base-images/) that includes your command.
    *   If n8n is already running:
        
        1
        2
        3
        4
        
        `# Find n8n's container ID, it will be the first column docker ps | grep n8n # Try to execute the command within the running container docker container exec <container_ID> <command_to_run>`
        
    *   If n8n isn't running:
        
        1
        2
        3
        
        `# Start up a new container that runs the command instead of n8n # Use the same image and tag that you use to run n8n normally docker run -it --rm --entrypoint /bin/sh docker.n8n.io/n8nio/n8n -c <command_to_run>`
        

## Error: stdout maxBuffer length exceeded[#](#error-stdout-maxbuffer-length-exceeded "Permanent link")

This error happens when your command returns more output than the Execute Command node is able to process at one time.

To avoid this error, reduce output your command produces. Check your command's manual page or documentation to see if there are flags to limit or filter output. If not, you may need to pipe the output to another command to remove unneeded info.