# GitLab Merge Request Automation

## Use cases:

- **Scheduled Cleanup of Open Merge Requests:** Automatically close existing merge requests that meet specific criteria (e.g., based on source branch) at scheduled intervals. This helps maintain a clean and organized repository by addressing stale or abandoned merge requests.
- **Automated Merge Request Creation with Comments:** Streamline the merge request creation process by automatically creating new merge requests with pre-defined titles, source/target branches, and initial comments.
- **Automated Merge on Pipeline Success:** Automatically merge a merge request when the associated pipeline succeeds.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a scheduled trigger that defines the interval for running the automation.
2.  **API to Check existing merge request:** This node retrieves existing merge requests from a GitLab project based on the specified `sourceBranchName` and `state=opened`. It uses the GitLab API with a private token for authentication.
3.  **Is Exists:** This node checks if any merge requests were found in the previous step. It evaluates whether the API response is empty (meaning no merge requests exist).
4.  **Branching Logic:**
    *   **If no merge requests exist:** The workflow proceeds to create a new merge request.
        *   **Create New Merge Request:**  Creates a new merge request in GitLab, specifying the `sourceBranchName`, `targetBranchName`, and `mergeTitle`. Uses the GitLab API and private token.
        *   **Add Custom Notes To Merge Request:** Adds a comment to the newly created merge request, using the `<mergeComments>` variable.
        *   **30 secs wait to approve merge request and pipeline to finish1:** Waits for 30 seconds.
        *   **setValueForMerge:** Setting value for `merge_when_pipeline_succeeds` to `false` and `should_remove_source_branch` to `true`
        *   **Merge When Pipeline Succeeds:**  Merges the created merge request and removes the source branch after the pipeline succeeds.
    *   **If merge requests exist:** The workflow proceeds to close existing merge requests.
        *   **Loop Over Items:** Iterates over the existing merge requests retrieved from the GitLab API.
        *   **API to CLOSE existing Merge Request:** Closes each existing merge request using the GitLab API. The `merge_iid` parameter identifies the specific merge request to close.
        *   **API to Check existing merge request:** After closing the MR, re-run API to Check existing merge request

## Services:

*   GitLab API

## Hashtags:

#n8n #GitLab #MergeRequest #Automation #DevOps
