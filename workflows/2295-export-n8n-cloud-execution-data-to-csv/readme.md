# Get n8n Executions and Convert to CSV

## Use cases:
- **Audit Trail Export:** Regularly export n8n execution data to a CSV file for auditing purposes, allowing you to track workflow activity and identify potential issues or bottlenecks.
- **Performance Analysis:** Analyze workflow execution times and statuses to identify areas for optimization and improve overall system performance.
- **Reporting:** Generate reports on workflow usage and success rates for internal stakeholders or clients.

## How it works:
1. **Manual Trigger:** The workflow is initiated manually using the "When clicking 'Test workflow'" node.
2. **Get Executions:** The "n8n | Get all executions" node retrieves execution data from your n8n instance using the n8n API. It can be configured to filter executions based on various criteria.
3. **Convert to CSV:** The "Convert to CSV" node transforms the retrieved execution data into a CSV file format.
4. **No Operation:** acts as placeholder, Replace this node with a cloud storage service.

## Services:
- n8n API

## Hashtags:
#n8n #automation #workflow #CSV #audit
