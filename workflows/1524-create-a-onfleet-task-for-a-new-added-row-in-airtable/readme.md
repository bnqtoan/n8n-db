# Airtable to Onfleet Workflow

## Use cases:

*   **Automated Task Dispatch:** Automatically creates tasks in Onfleet whenever a new record with delivery details is added to an Airtable base.
*   **Streamlined Delivery Scheduling:** Schedules deliveries in Onfleet based on data from Airtable, including recipient information, address, and delivery window.
*   **Real-time Delivery Order Creation:** Integrate order information stored in Airtable with Onfleet to execute and manage delivery logistics as orders are created.

## How it works:

This workflow listens for new records in an Airtable base and automatically creates tasks in Onfleet. Here's a step-by-step breakdown:

1.  **Airtable Trigger:** The workflow starts with an "Airtable Trigger" node. This node is configured to poll the Airtable base every 10 minutes. It triggers when a new record is created or modified in the specified table, specifically when there is a change to the `Address_Line1` column.
2.  **Onfleet:** Upon triggering, the "Onfleet" node takes the data from the Airtable record and uses it to create a new task in Onfleet. It extracts the recipient's address, name, phone number, and any relevant notes from the Airtable record.  It also grabs the `completeAfter` and `completeBefore` times from the Airtable record to set the delivery window. The `Task_Details` is added to the notes section of the task.

## Services:

*   Airtable
*   Onfleet

## Hashtags:

#n8n #Airtable #Onfleet #Automation #DeliveryManagement
