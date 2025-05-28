# Append, lookup, update, and read data from a Google Sheets spreadsheet

## Use cases:
- **Real Estate Management:** Automatically append new property listings to a Google Sheet, look up properties in a specific city, and update rent prices based on market changes.
- **Inventory Tracking:** Add new inventory items to a Google Sheet, look up items based on their attributes, and update stock levels as items are sold.
- **Customer Relationship Management (CRM):** Add new customer leads to a Google Sheet, look up customers based on their location, and update customer information such as contact details or purchase history.

## How it works:
1.  **Trigger:** The workflow starts when you manually execute it using the "On clicking 'execute'" node.
2.  **Set Initial Data:** The "Set" node defines initial data for a new property listing, including ID, Name, Rent, and City. A random ID is generated.
3.  **Append to Google Sheets:** The "Google Sheets" node appends the data to the specified Google Sheet.
4.  **Lookup in Google Sheets:** The "Google Sheets1" node looks up a property in the Google Sheet based on the "City" column, specifically searching for "Berlin".
5.  **Set Updated Data:** The "Set1" node retrieves data from the "Google Sheets1" lookup, then it increases the rent, and keeps other properties.
6.  **Update Google Sheets:** The "Google Sheets2" node updates the row found to match the looked up ID with the increased rent and other properties that was kept.
7.  **Read from Google Sheets:** The "Google Sheets3" node reads a range from the Google Sheets to display the data that was updated

## Services:
- Google Sheets

## Hashtags:
#n8n #googleSheets #automation #dataManagement #spreadsheet
