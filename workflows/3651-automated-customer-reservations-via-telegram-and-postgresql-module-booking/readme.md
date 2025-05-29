# WA-Bot-Module-Booking-v1-db-sell-full

## Use cases:

- **Automated Booking System:** Enables customers to book appointments or services via WhatsApp, automating the booking process.
- **Lead Qualification and Data Collection:** Gathers customer information (name, phone number, preferred date/time) through an interactive WhatsApp conversation.
- **Real-time Availability Check:** Checks the availability of time slots against a database and provides options to the customer, preventing double bookings.

## How it works:

This workflow automates the booking process through WhatsApp.

1.  **WhatsApp Trigger:** The workflow starts when a message is received on WhatsApp through the `WhatsApp Trigger` node.
2.  **Initialization:** The `Initialization` node retrieves the bot status from a PostgreSQL database.
3.  **Define Flow:** The `Define Flow` node uses a Switch node to determine which path to follow, directing the user to specific actions such as viewing the main menu, checking available days, or making payments.
4.  **Commands:** The `Commands` node uses a Switch node to route the user to the main menu or to retrieve available workdays for booking, which are stored in a PostgreSQL database.
5.  **Booking Flow:**
    -   The user is prompted for a date via WhatsApp (`Request Date`).
    -   The system validates the date against the available workdays fetched from the database (`Get Work Days` and `Is Date correct?`).
    -   If the date is valid, the workflow proceeds to ask the user for a preferred time (`Get Work Hours` and `Request Time`).
    -   After selecting the time, the user is asked for their phone number (`Request Phone`) and then their name (`Request Name`). Phone number is validated before saving it.
    -   All the data collected (date, time, phone number, and name) is stored in the database (`Update Date AND Status`, `Update Phone`, `Update Name`).
    -   Finally, the workflow sends a confirmation message to the user (`page booking success`) and updates the booking status in the database (`Update status on BOOKED`).

## Services:

-   WhatsApp
-   PostgreSQL

## Hashtags:

#n8n #automation #WhatsAppBot #booking #PostgreSQL
