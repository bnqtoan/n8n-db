[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/index.md "Edit this page")

# Schedule Trigger node[#](#schedule-trigger-node "Permanent link")

Use the Schedule Trigger node to run workflows at fixed intervals and times. This works in a similar way to the Cron software utility in Unix-like systems.

You must activate the workflow

If a workflow uses the Schedule node as a trigger, make sure that you save and activate the workflow.

Timezone settings

The node relies on the timezone setting. n8n uses either:

1.  The workflow timezone, if set. Refer to [Workflow settings](../../../../workflows/settings/) for more information.
2.  The n8n instance timezone, if the workflow timezone isn't set. The default is `America/New York` for self-hosted instances. n8n Cloud tries to detect the instance owner's timezone when they sign up, falling back to GMT as the default. Self-hosted users can change the instance setting using [Environment variables](../../../../hosting/configuration/environment-variables/timezone-localization/). Cloud admins can change the instance timezone in the [Admin dashboard](../../../../manage-cloud/set-cloud-timezone/).

## Node parameters[#](#node-parameters "Permanent link")

Add **Trigger Rules** to determine when the trigger should run.

Use the **Trigger Interval** to select the time interval unit of measure to schedule the trigger for. All other parameters depend on the interval you select. Choose from:

*   [Seconds trigger interval](#seconds-trigger-interval)
*   [Minutes trigger interval](#minutes-trigger-interval)
*   [Hours trigger interval](#hours-trigger-interval)
*   [Days trigger interval](#days-trigger-interval)
*   [Weeks trigger interval](#weeks-trigger-interval)
*   [Months trigger interval](#months-trigger-interval)
*   [Custom (Cron) interval](#custom-cron-interval)

You can add multiple **Trigger Rules** to run the node on different schedules.

Refer to the sections below for more detail on configuring each **Trigger Interval**. Refer to [Templates and examples](#templates-and-examples) for further examples.

### Seconds trigger interval[#](#seconds-trigger-interval "Permanent link")

*   **Seconds Between Triggers**: Enter the number of seconds between each workflow trigger. For example, if you enter `30` here, the trigger will run every 30 seconds.

### Minutes trigger interval[#](#minutes-trigger-interval "Permanent link")

*   **Minutes Between Triggers**: Enter the number of minutes between each workflow trigger. For example, if you enter `5` here, the trigger will run every 5 minutes.

### Hours trigger interval[#](#hours-trigger-interval "Permanent link")

*   **Hours Between Triggers**: Enter the number of hours between each workflow trigger.
*   **Trigger at Minute**: Enter the minute past the hour to trigger the node when it runs, from `0` to `59`.

For example, if you enter `6` **Hours Between Triggers** and `30` **Trigger at Minute**, the node will run every six hours at 30 minutes past the hour.

### Days trigger interval[#](#days-trigger-interval "Permanent link")

*   **Days Between Triggers**: Enter the number of days between each workflow trigger.
*   **Trigger at Hour**: Select the hour of the day to trigger the node.
*   **Trigger at Minute**: Enter the minute past the hour to trigger the node when it runs, from `0` to `59`.

For example, if you enter `2` **Days Between Triggers**, **9am** for **Trigger at Hour**, and `15` **Trigger at Minute**, the node will run every two days at 9:15am.

### Weeks trigger interval[#](#weeks-trigger-interval "Permanent link")

*   **Weeks Between Triggers**: Enter the number of weeks between each workflow trigger.
*   **Trigger on Weekdays**: Select the day(s) of the week you want to trigger the node.
*   **Trigger at Hour**: Select the hour of the day to trigger the node.
*   **Trigger at Minute**: Enter the minute past the hour to trigger the node when it runs, from `0` to `59`.

For example, if you enter `2` **Weeks Between Triggers**, **Monday** for **Trigger on Weekdays**, **3pm** for **Trigger at Hour**, and `30` **Trigger at Minute**, the node will run every two weeks on Monday at 3:30 PM.

### Months trigger interval[#](#months-trigger-interval "Permanent link")

*   **Months Between Triggers**: Enter the number of months between each workflow trigger.
*   **Trigger at Day of Month**: Enter the day of the month the day should trigger at, from `1` to `31`. If a month doesn't have this day, the node won't trigger. For example, if you enter `30` here, the node won't trigger in February.
*   **Trigger at Hour**: Select the hour of the day to trigger the node.
*   **Trigger at Minute**: Enter the minute past the hour to trigger the node when it runs, from `0` to `59`.

For example, if you enter `3` **Months Between Triggers**, `28` **Trigger at Day of Month**, **9am** for **Trigger at Hour**, and `0` **Trigger at Minute**, the node will run each quarter on the 28th day of the month at 9:00 AM.

### Custom (Cron) interval[#](#custom-cron-interval "Permanent link")

Enter a custom cron **Expression** to set the schedule for the trigger.

To generate a Cron expression, you can use [crontab guru](https://crontab.guru). Paste the Cron expression that you generated using crontab guru in the **Expression** field in n8n.

#### Examples[#](#examples "Permanent link")

Type

Cron Expression

Description

Every X Seconds

`*/10 * * * * *`

Every 10 seconds.

Every X Minutes

`*/5 * * * *`

Every 5 minutes.

Hourly

`0 * * * *`

Every hour on the hour.

Daily

`0 6 * * *`

At 6:00 AM every day.

Weekly

`0 12 * * 1`

At noon every Monday.

Monthly

`0 0 1 * *`

At midnight on the 1st of every month.

Every X Days

`0 0 */3 * *`

At midnight every 3rd day.

Only Weekdays

`0 9 * * 1-5`

At 9:00 AM Monday through Friday.

Custom Hourly Range

`0 9-17 * * *`

Every hour from 9:00 AM to 5:00 PM every day.

Quarterly

`0 0 1 1,4,7,10 *`

At midnight on the 1st of January, April, July, and October.

Using variables in the Cron expression

While variables can be used in the scheduled trigger, their values only get evaluated when the workflow is activated. If you alter a variable's value in the settings after a workflow is activated, the changes won't alter the cron schedule. To re-evaluate the variable, set the workflow to **Inactive** and then back to **Active** again

#### Why there are six asterisks in the Cron expression[#](#why-there-are-six-asterisks-in-the-cron-expression "Permanent link")

The sixth asterisk in the Cron expression represents seconds. Setting this is optional. The node will execute even if you don't set the value for seconds.

(\*)

\*

\*

\*

\*

\*

(second)

minute

hour

day of month

month

day of week(Sun-Sat)

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Schedule Trigger integration templates](https://n8n.io/integrations/schedule-trigger/), or [search all templates](https://n8n.io/workflows/)

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common Issues](common-issues/).