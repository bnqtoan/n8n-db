# Add subscriber to form, create tag and subscriber to the tag

## Use cases:

*   Automatically add new subscribers from a form to ConvertKit.
*   Create a new tag in ConvertKit when a new subscriber is added.
*   Add the subscriber to a specific tag, enabling targeted email campaigns.

## How it works:

1.  The workflow is triggered manually by clicking the "Execute" button, initiating the process. (On clicking 'execute' node)
2.  A new subscriber is added to a ConvertKit form using the ConvertKit node. The form ID is specified in the node's settings. (ConvertKit node)
3.  A tag is created in ConvertKit (ConvertKit1 node)
4.  The subscriber is added to a specified tag within ConvertKit. The tag ID and subscriber's email address (extracted from the previous ConvertKit node) are used for this step. (ConvertKit2 node)

## Services:

*   ConvertKit

## Hashtags:

#n8n #ConvertKit #EmailMarketing #Automation #SubscriberManagement
