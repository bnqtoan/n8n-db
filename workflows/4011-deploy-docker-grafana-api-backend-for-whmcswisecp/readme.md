# puq-docker-grafana-deploy

This workflow automates the deployment and management of Grafana instances within Docker containers on a remote server, typically used in conjunction with WHMCS/WISECP modules developed by PUQcloud. It handles various actions such as creation, suspension, termination, package changes, and monitoring of these Grafana instances.

## Use cases:

- **Automated Grafana Instance Provisioning:** Automatically create and configure new Grafana instances for clients upon purchase through a WHMCS/WISECP system.
- **Centralized Grafana Management:** Manage the lifecycle of Grafana instances, including starting, stopping, suspending, and terminating them, through a single n8n workflow.
- **Dynamic Resource Allocation:** Change the resource allocation (CPU, RAM, disk space) of Grafana instances based on client package upgrades or downgrades.

## How it works:

1.  **Receives API Request:** The workflow starts with a Webhook node (`API`) that listens for POST requests containing commands and parameters for managing Grafana instances. It requires basic authentication.
2.  **Validates Server Domain:** The `If` node validates if the server domain in the request matches the configured domain. If not, it responds with an error (`422-Invalid server domain`).
3.  **Sets Parameters:** The `Parametrs` node sets default parameters like server domain, client directory, and mount directory, used throughout the workflow.
4.  **Command Dispatch:**
    *   The `Container Actions` Switch node routes the workflow based on container-related commands (start, stop, mount/unmount disk, get/set ACL, get network stats).
    *   The `Service Actions` Switch node handles service-level commands (test connection, create, suspend, unsuspend, terminate, change package).
    *    The `Container Stat` Switch node handles commands related to information about the container.
    *   The `Grafana` Switch node handles Grafana commands (get version, change password).
5.  **Executes SSH Commands:** Various `Set` nodes create bash scripts (`sh`) based on the received command, and then execute these commands on a remote server via the `SSH` node. The `SSH` node uses credentials for SSH access. These scripts perform actions such as:
    *   Creating directories and files for Docker Compose.
    *   Mounting and unmounting disk images.
    *   Starting and stopping Docker containers using Docker Compose.
    *   Managing Nginx configurations for reverse proxying.
    *   Retrieving container stats and logs.
    *   Managing Grafana admin password and version.
6.  **Handles Errors:** `Set` nodes contain error handling within the bash scripts to catch and report any issues during execution.
7.  **Returns API Response:** The `Code1` node parses the output of the SSH commands and formats a JSON response indicating the status of the operation. Finally, the `API answer` node responds to the initial webhook request with this JSON payload.

## Services:

-   **Docker:** Containerization platform used to run Grafana instances.
-   **Nginx:** Web server and reverse proxy, used to route traffic to the Grafana instances.
-   **Grafana:** Data visualization and monitoring platform.
-   **WHMCS/WISECP (Indirect):** These are billing and automation platforms that trigger the API calls to this workflow to manage Grafana instances.

## Hashtags:

#n8n #automation #docker #grafana #devops
