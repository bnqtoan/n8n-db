# Typeform to Demio Registration Workflow

## Use cases:

*   Automatically register webinar attendees in Demio based on Typeform submissions.
*   Streamline the registration process for online events by integrating form data directly into a webinar platform.
*   Capture leads through Typeform and seamlessly add them to a Demio webinar for marketing and engagement.

## How it works:

This workflow starts with a **Typeform Trigger** node, which listens for new submissions to a specified Typeform form (configured with the `formId` parameter). When a new submission is received, the trigger passes the form data to the next node, **Demio**.

The **Demio** node then uses the `register` operation to register the user for a specific Demio webinar event. The email, first name, and event ID are extracted from the Typeform submission data using expressions like `{{$json["What's your email address?"]}}` and `{{$json["Let's start with your name."]}}`.  The workflow relies on the configured `eventId` to send the new user to the appropriate webinar.

## Services:

*   Typeform
*   Demio

## Hashtags:

#n8n #automation #typeform #demio #webinar
