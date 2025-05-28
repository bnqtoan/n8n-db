# My Workflow

## Use cases:

- Demonstrating and learning how to use the Date & Time node to manipulate dates and times.
- Showing different ways to format dates using the Date & Time node and Luxon expressions.
- Providing examples of calculating future or past dates and times based on the current time.

## How it works:

This workflow showcases different methods for working with dates and times in n8n.

1.  **Trigger:** The workflow starts with a "On clicking 'execute'" node, which triggers the workflow execution manually.
2.  **Date & Time Calculation:** A "12 Hours from now" node calculates a date and time 12 hours from the current time, demonstrating date addition. The result is then formatted using the "Format - MMMM DD YY" node.
3.  **Setting Dates with Expressions:** A "Set times" node sets various date formats using Luxon expressions, including the current time, formatted time, today, tomorrow, and one hour ago.
4.  **Working with Time Strings:** An "Edit times" node uses the output from the "Set times" node to demonstrate how to work with time strings. It converts an ISO string back to a date and applies date and time formatting.

## Services:

-   None (This workflow primarily uses n8n's built-in nodes and Luxon library.)

## Hashtags:

#n8n #automation #datetime #workflow #luxon
