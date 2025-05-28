## n8n Workflow: DigitalOcean Droplet Creation

This workflow automates the creation of a DigitalOcean droplet using the DigitalOcean API.

### Use cases:

*   **Automated Server Provisioning:** Automatically provision new servers (droplets) for development, testing, or production environments based on defined configurations.
*   **Scalable Infrastructure:** Integrate this workflow with other tools to automatically scale your infrastructure by creating new droplets when certain performance thresholds are reached.
*   **Scheduled Server Deployment:** Schedule the creation of droplets for specific times, such as nightly builds or pre-configured environments for training sessions.

### How it works:

The workflow consists of a single "HTTP Request" node that interacts with the DigitalOcean API.

1.  **HTTP Request:** This node sends a POST request to the `https://api.digitalocean.com/v2/droplets` endpoint, which is the DigitalOcean API endpoint for creating droplets.
2.  **Request Body:** The node includes a JSON body containing the droplet's configuration, such as:
    *   `name`: The name of the new droplet (e.g., "API-creation-test").
    *   `region`: The DigitalOcean region where the droplet will be created (e.g., "blr1").
    *   `size`: The size of the droplet (e.g., "s-1vcpu-1gb").
    *   `image`: The operating system image for the droplet (e.g., "ubuntu-20-04-x64").
3.  **Authentication:** The node includes an "Authorization" header with a "Bearer" token.  **Important:** Replace `{your_personal_access_token}` with your actual DigitalOcean Personal Access Token for the workflow to function correctly.

### Services:

*   DigitalOcean API

### Hashtags:

#n8n #DigitalOcean #Automation #ServerProvisioning #API
