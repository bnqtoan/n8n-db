[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/common-issues.md "Edit this page")

# Schedule Trigger node common issues[#](#schedule-trigger-node-common-issues "Permanent link")

Here are some common errors and issues with the [Schedule Trigger node](../) and steps to resolve or troubleshoot them.

## Invalid cron expression[#](#invalid-cron-expression "Permanent link")

This error occurs when you set **Trigger Interval** to **Custom (Cron)** and n8n doesn't understand your cron expression. This may mean that there is a mistake in your cron expression or that you're using an incompatible syntax.

To debug, check that the following:

*   That your cron expression follows the syntax used in the [cron examples](../#custom-cron-interval)
*   That your cron expression (after removing the [seconds column](../#why-there-are-six-asterisks-in-the-cron-expression)) validates on [crontab guru](https://crontab.guru/)

## Scheduled workflows run at the wrong time[#](#scheduled-workflows-run-at-the-wrong-time "Permanent link")

If the Schedule Trigger node runs at the wrong time, it may mean that you need to adjust the time zone n8n uses.

### Adjust the timezone globally[#](#adjust-the-timezone-globally "Permanent link")

If you're using [n8n Cloud](../../../../../manage-cloud/overview/), follow the instructions on the [set the Cloud instance timezone](../../../../../manage-cloud/set-cloud-timezone/) page to ensure that n8n executes in sync with your local time.

If you're [self hosting](../../../../../hosting/), set your global timezone using the [`GENERIC_TIMEZONE` environment variable](../../../../../hosting/configuration/environment-variables/timezone-localization/).

### Adjust the timezone for an individual workflow[#](#adjust-the-timezone-for-an-individual-workflow "Permanent link")

To set the timezone for an individual workflow:

1.  Open the workflow on the canvas.
2.  Select the [![three dots menu](../../../../../_images/common-icons/three-dots-horizontal.png)](https://docs.n8n.io/_images/common-icons/three-dots-horizontal.png) **Three dots icon** in the upper-right corner.
3.  Select **Settings**.
4.  Change the **Timezone** setting.
5.  Select **Save**.

### Variables not working as expected[#](#variables-not-working-as-expected "Permanent link")

While variables can be used in the scheduled trigger, their values only get evaluated when the workflow is activated. After activating the worfklow, you can alter a variable's value in the settings but it won't change how often the workflow runs. To work around this, you must stop and then re-activate the workflow to apply the updated variable value.

### Changing the trigger interval[#](#changing-the-trigger-interval "Permanent link")

You can update the scheduled trigger interval at any time but it only gets updated when the workflow is activated. If you change the trigger interval after the workflow is active, the changes won't take effect until you stop and then re-activate the workflow.

Also, the schedule begins from the time when you activate the workflow. For example, if you had originally set a schedule of every 1 hour and it should execute at 12:00, if you changed it to a 2 hour schedule and re-activated the workflow at 11:30, the next execution will be at 13:30, 2 hours from when you activated it.