# Calendly-KlickTipp Integration for Bookings and Cancellations

## Use cases:

- **Automated Contact Management:** Automatically add new Calendly invitees and guests to KlickTipp with relevant booking information for targeted marketing and communication.
- **Event-Triggered Actions:** Trigger specific workflows in KlickTipp (e.g., sending a welcome email, granting access to a course) immediately after a Calendly booking.
- **Cancellation Handling:** Automatically manage subscriber status in KlickTipp when a Calendly event is canceled, ensuring accurate contact lists.

## How it works:

1.  **Calendly Trigger:** The workflow starts when a new event is booked or canceled in Calendly, triggering the `New Calendly event` node.
2.  **Data Conversion:** The `Convert data for KlickTipp` node formats the Calendly event data into the required format for KlickTipp, converting timestamps and extracting relevant information like first name, last name, and mobile number. It also extracts guest email addresses.
3.  **Event Type Check:** The `Check event - booking or cancellation?` node determines if the event is a booking or cancellation based on the event status.
4.  **Booking Flow:**
    *   The `Guests booking check` node checks if there are guests associated with the booking.
    *   If guests are present, the `List guests for booking` node creates a list of guest email addresses.
    *   The `Split Out guest bookings` node splits the list of guests into individual items.
    *   For each guest, the `Subscribe guest booking in KlickTipp` node adds the guest to the KlickTipp subscriber list.
    *   The `Subscribe invitee booking in KlickTipp` node adds the invitee to the KlickTipp subscriber list.
5.  **Cancellation Flow:**
    *   The `Subscribe invitee cancellation in KlickTipp` node removes the invitee from the KlickTipp subscriber list.
    *   The `Guests cancellation check` node checks if guest email addresses are available within the invitee contact (retrieved from a custom field where they were stored during booking).
    *   If guest email addresses are available, the `List guests for cancellation` node prepares the guest email addresses for processing.
    *   The `Split Out guest cancellations` node splits the list of guest email addresses into individual items.
    *   For each guest email, the `Subscribe guest cancellation in KlickTipp` node removes the guest from the KlickTipp subscriber list.
    *   The `Rescheduling check` node checks if the event has been rescheduled and if the string of the guests addresses should be overwritten or not.
    *   The `Subscribe invitee to empty guest addresses field` node writes 'null' to the guests address field to prevent errors if the user is rebooked.

## Services:

-   Calendly
-   KlickTipp

## Hashtags:

#n8n #automation #Calendly #KlickTipp #CRM
