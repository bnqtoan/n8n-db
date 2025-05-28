# Send DingTalk message on new Azure DevOps Pull Request

## Use cases:

*   **Automated Notifications for Code Reviews:** When a new pull request is created in Azure DevOps, automatically notify the relevant reviewers in a DingTalk group, ensuring timely code reviews.
*   **Streamlined Team Communication:** Keep development teams informed about new pull requests without manually sending messages, reducing communication overhead.
*   **Customized Notifications with User Mapping:** Map Azure DevOps users to their DingTalk counterparts, enabling personalized notifications and mentions in DingTalk messages.

## How it works:

1.  **Receive Azure DevOps Pull Request Event:** The workflow starts with a Webhook node (`ReceiveTfsPullRequestCreatedMessage`) that listens for `POST` requests triggered by the "Pull Request Created" event in Azure DevOps.
2.  **Load User Mapping:** A MySQL node (`LoadDingTalkAccountMap`) queries a MySQL database table (`tfs_dingtalk_account_map`) to retrieve mappings between TFS (Azure DevOps) accounts and DingTalk user information (username, mobile number).
3.  **Build DingTalk Webhook Data:** The `BuildDingTalkWebHookData` Code node processes the data received from the webhook and the MySQL database. It constructs the message to be sent to DingTalk, including:
    *   Replacing TFS display names with DingTalk names using the user mapping.
    *   Identifying reviewers and preparing "@" mentions for them.
    *   Formatting the message text with reviewers.
4.  **Send DingTalk Message:** The `SendDingTalkMessageViaWebHook` HTTP Request node sends a `POST` request to the DingTalk webhook URL. The request includes the formatted message and the list of users to be mentioned.

## Services:

*   **Azure DevOps:** Used as the trigger for pull request creation events.
*   **DingTalk:** Used for sending notifications to users or groups.
*   **MySQL:** Used to store the mapping between Azure DevOps accounts and DingTalk user information.

## Hashtags:

#n8n #automation #AzureDevOps #DingTalk #PullRequest
