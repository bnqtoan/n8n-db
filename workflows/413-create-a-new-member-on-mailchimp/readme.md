## Use cases:

*   **Newsletter Subscription:** Automatically subscribe a user to a Mailchimp audience upon a manual trigger event, such as form submission testing.
*   **Testing Mailchimp Integration:** Quickly test the Mailchimp integration within n8n by manually triggering a subscription with predefined data.

## How it works:

This workflow is triggered manually by clicking the "Execute" button in n8n. Upon execution, the workflow subscribes a specified email address to a Mailchimp audience. The "On clicking 'execute'" node initiates the workflow. The "Mailchimp" node then sends a request to Mailchimp to subscribe the email "xxxx@email.com" to the list with ID "97542c5cf8", setting the subscription status to "subscribed" and the first name to "Joe".

## Services:

*   Mailchimp

## Hashtags:

#n8n #mailchimp #automation #emailmarketing #subscriber
