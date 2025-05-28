# Docker Registry Cleaner

## Use cases:

*   **Automated Cleanup of Docker Registry:** Regularly removes older, untagged Docker images from a registry to save storage space and maintain a clean environment.
*   **Tag Retention Policy:** Enforces a policy to keep only the latest 'N' number of tagged images (e.g., the 10 most recent) and automatically deletes older ones. Keeps latest tag always.
*   **Compliance and Security:** Helps comply with storage quotas and security policies by removing unnecessary or outdated images that could pose vulnerabilities.

## How it works:

1.  **Scheduled Trigger:** The workflow starts based on a schedule (e.g., daily at 1 AM).
2.  **List Images:** Fetches a list of all images in the Docker registry using the `/_catalog` endpoint.
3.  **Extract Image Names:** Extracts the image names from the API response.
4.  **Retrieve Image Tags:** For each image, retrieves the list of tags associated with it.
5.  **Split Tags:** Splits the results to allow filtering.
6.  **Filter Valid Tags:** Filters the tag to avoid emtpy value errors later on.
7.  **Fetch Manifest Digest:** Retrieves the manifest digest for each image tag to validate the blob.
8.  **Fetch Manifest Digest for Blob:** Retrieves the manifest digest for each image tag blob to retrieve its creation date
9.  **Update Fields:** Updates the data with all information.
10. **Sort by Creation Date:** Sorts all the tags by creation date.
11. **Group Tags by Image:** Groups the tags together in one object again.
12. **Identify Tags to Remove:** A code node identifies the tags that should be removed, keeping the latest tag and the 10 newest tags and adding them to the `result`.
13. **Remove Old Tags:** Deletes the identified tags by making a DELETE request to the registry API and sends a notification when done.
14. **Send Notification Email:** Sends an email notification when a tag has been removed successfully.
15.  **Execute Garbage Collection:** Executes the garbage collection.
16. **Send Failure Notification Email:** Sends an email notification when a tag deletion fails.

## Services:

*   Docker Registry API
*   Email (SMTP)
*   SSH (to execute garbage collection)

## Hashtags:

#n8n #docker #registry #automation #garbageCollection
