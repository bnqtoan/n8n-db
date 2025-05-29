# Auto Update n8n on Coolify

## Use cases

- **Automated n8n Version Management:** Automatically update the n8n version deployed on Coolify whenever a new release is published on the n8n GitHub repository.
- **Continuous Deployment:** Integrate n8n version updates into a continuous deployment pipeline, ensuring the deployed version is always up-to-date.
- **Beta Release Tracking:** Specifically track and deploy beta releases of n8n to a testing environment for early testing and validation.

## How it works

1.  **Trigger:** The workflow is triggered by two schedule triggers: "Auto Update Beta Release" and "Auto Update Latest Release."
    *   "Auto Update Beta Release" runs on a defined schedule and fetches releases.
    *   "Auto Update Latest Release" is disabled and would fetch the latest release if enabled.
2.  **Get Releases/Release Data:**
    *   The "Auto Update Beta Release" path starts by fetching a list of n8n releases from the GitHub API using the "Get Releases" node. It retrieves 10 releases per page from `https://api.github.com/repos/n8n-io/n8n/releases`.
    *   The "Auto Update Latest Release" path fetches the latest release from GitHub API from `https://api.github.com/repos/n8n-io/n8n/releases/latest` using "Get Release" node.
3.  **Filter Pre-releases:** The "Filter" node checks if a release is a pre-release (`$json.prerelease == true`). This step ensures that only beta releases are processed in the "Auto Update Beta Release" path.
4.  **Limit:** The "Limit" node limits the number of processed items to 1.
5.  **Remove Duplicates:** The "Remove Duplicates" node checks if the release name (`$json.name`) has been seen in previous executions and skips it if it has, preventing redundant updates.
6.  **Update ENV:** The "Update ENV" node sends a PATCH request to Coolify's API (`https://console.buatan.id/api/v1/applications/{{ 'm8ccg8k44coogsk84swk8kgs' }}/envs`) to update the `N8N_VERSION` environment variable. The version is extracted from the release name (`$json.name`) by splitting the string at `@` and taking the last element.
7.  **Deploy:** The "Deploy" node triggers a deployment on Coolify using another API endpoint (`https://console.buatan.id/api/v1/deploy?uuid={{ 'm8ccg8k44coogsk84swk8kgs' }}&force=false`). This deploys the new n8n version.

## Services

-   GitHub API: Used to retrieve n8n releases.
-   Coolify API: Used to update the environment variables and trigger deployments.

## Hashtags

#n8n #automation #coolify #deployment #github
