# PUQ Docker NextCloud deploy

## Use cases:
- Automated NextCloud Instance Deployment: Streamline the process of deploying NextCloud instances on Docker, complete with database and Redis setup. Ideal for hosting providers offering NextCloud as a service.
- Dynamic Resource Allocation: Automate the scaling of NextCloud instances by dynamically adjusting resources like CPU, RAM, and disk space based on demand. This ensures optimal performance and cost efficiency.
- Centralized Management: Provide a centralized dashboard or API for managing multiple NextCloud instances, enabling administrators to easily start, stop, suspend, unsuspend, and terminate instances.

## How it works:
1.  **Webhook Trigger (API):** The workflow starts with a webhook that listens for POST requests containing commands and parameters for managing a NextCloud Docker container. Authentication is handled via HTTP Basic Auth.
2.  **Parameter Setting (Parametrs):** Sets default parameters like directories for client data, mount points, and screen markers used in shell scripts.
3.  **Domain Validation (If):** Validates the incoming server domain against predefined values. Invalid domains trigger a 422 error response.
4.  **Action Routing:**
    *   **Service Actions:** Routes requests to different actions like creating, suspending, or terminating services based on the command received.
    *   **Container Actions:** Handles commands to start, stop, mount/unmount disks, and manage ACLs for the container.
    *   **Container Stats:** Handles commands to get container statistics, inspect details, and logs.
    *   **NextCloud App Management:** Handles commands for managing the NextCloud app itself, including getting the version, managing users, and changing passwords.
5.  **Docker Compose Deployment (Deploy-docker-compose):** Generates a Docker Compose file based on the parameters received from the webhook. This file defines the NextCloud container along with its dependencies (MariaDB, Redis, Collabora).
6.  **Dynamic Nginx Configuration (nginx):** Generates the Nginx configuration dynamically, based on input from the API, to properly route the request to the containers.
7.  **SSH Execution:** Executes shell scripts on a remote server via SSH to perform the Docker operations, such as creating directories, mounting disks, and starting/stopping containers. The specific server used depends on the validated domain.
8.  **DNS record update:** update PowerDNS record based on provided parameters

## Services:
- Docker: Containerization platform for deploying NextCloud and its dependencies.
- Nginx: Reverse proxy and web server for routing traffic to NextCloud.
- PowerDNS: DNS server used to manage and update DNS records.
- MariaDB: Database server for NextCloud data.
- Redis: In-memory data structure store for NextCloud caching.
- Collabora: Online office suite for NextCloud (optional).

## Hashtags:
#n8n #docker #nextcloud #automation #hosting
