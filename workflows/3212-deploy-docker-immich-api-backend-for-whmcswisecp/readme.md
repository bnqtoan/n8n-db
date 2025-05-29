# PUQ Docker Immich Deploy

## Use Cases
1. **Automated Docker Container Management**: Deploy and manage Immich Docker containers (start, stop, mount/unmount disks) via API commands.
2. **Infrastructure Scaling**: Dynamically adjust container resources (CPU, RAM) and handle scaling operations through API requests.
3. **System Monitoring**: Monitor container status, resource usage, and network statistics for Immich service containers.

## How it Works
This workflow acts as a middleware between your application and Docker infrastructure, handling container lifecycle management through API endpoints. Key operations include:

1. **API Webhook Trigger**: Receives commands via HTTP POST requests (start/stop containers, check status).
2. **SSH Command Execution**: Executes Docker operations on the target server using SSH connections.
3. **Conditional Routing**: Uses switch nodes to route requests to appropriate actions (container start, stop, disk management).
4. **Status Reporting**: Returns container statistics, logs, and operation results through JSON responses.

## Services
- **Docker**: Container orchestration and management
- **SSH Protocol**: Secure command execution on remote servers
- **Webhook API**: REST API endpoint for receiving commands

## Hashtags
#n8n #docker-automation #container-management #devops #api-integration
