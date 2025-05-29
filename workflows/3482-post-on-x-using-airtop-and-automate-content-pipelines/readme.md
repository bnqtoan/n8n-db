# Post on X

## Use cases:
- Automatically post content to X (formerly Twitter) from a form submission.
- Schedule posts on X by triggering this workflow from another workflow with predefined content.
- Integrate X posting functionality into other automated processes.

## How it works:
1.  The workflow is triggered either by a form submission or execution from another workflow. The "On form submission" node captures data from a form with fields for Airtop profile name and post text. The "When Executed by Another Workflow" node listens for incoming executions from other workflows, expecting `airtop_profile` and `post_text` input parameters.
2.  The "Parameters" node sets the values for Airtop profile and post text, prioritizing form submission data if available, otherwise using the data from the trigger workflow.
3.  The "Create session" node initiates an Airtop session using the provided profile name.
4.  The "Create window" node opens the X website (x.com) in a new Airtop window.
5.  The "Type text" node enters the provided post text into the "What's happening?" text box on X.
6.  The "Click on Post" node clicks the "Post" button to publish the post on X.
7.  The "End session" node terminates the Airtop session.

## Services:
-   Airtop
-   X (formerly Twitter)

## Hashtags:
#n8n #automation #X #Airtop #SocialMedia
