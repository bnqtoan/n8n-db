# 💻 Schedule Workflow Activity Time

## Use Cases
1. **Business Hours Automation**: Automatically enable workflows during operational hours (8 AM to 8 PM) to avoid unnecessary executions outside business times.
2. **Resource Optimization**: Schedule resource-intensive workflows to run only during off-peak hours or specific time windows.
3. **Temporary Workflow Management**: Enable/disable temporary workflows (e.g., holiday campaigns) automatically without manual intervention.

## How It Works
This workflow uses two schedule triggers to activate and deactivate a target n8n workflow on a daily basis:
1. **Activation Path**:
   - `Activate at 08:00 daily`: Fires at 8 AM via cron job
   - Passes workflow ID to `n8n Activate` node
   - Triggers workflow activation via n8n API

2. **Deactivation Path**:
   - `Deactivate at 20:00 daily`: Fires at 8 PM via cron job
   - Passes workflow ID to `n8n Deactivate` node
   - Triggers workflow deactivation via n8n API

The `Workflow ID` node provides the target workflow's ID, visible in the workflow's URL. Merge nodes combine execution paths for clean data flow between triggers and API actions.

## Services
- **n8n API**: Used to programmatically activate/deactivate workflows
- **Custom Cron Scheduler**: For time-based execution (via Schedule Trigger nodes)

## Hashtags
#n8n #automation #scheduling #devops #workflowmanagement

---

**Note for Trial Users**: This workflow requires n8n API access, which is unavailable in trial plans. Upgrade to a paid plan for full functionality.  
**Credentials Requirement**: Requires valid n8n API credentials configured via the "n8n acc for Gitlab/hub sync of repos" credentials.
