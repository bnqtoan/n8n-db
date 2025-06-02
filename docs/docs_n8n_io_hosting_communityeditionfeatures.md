Community edition Enterprise edition

[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/community-edition-features.md "Edit this page")

# Community Edition Features[#](#community-edition-features "Permanent link")

The community edition includes almost the complete feature set of n8n, except for the features listed here.

The community edition doesn't include these features:

*   [Custom Variables](../../code/variables/)
*   [Environments](../../source-control-environments/)
*   [External secrets](../../external-secrets/)
*   [External storage for binary data](../scaling/external-storage/)
*   [Log streaming](../../log-streaming/) ([Logging](../logging-monitoring/logging/) _is_ included)
*   [Multi-main mode](../scaling/queue-mode/#multi-main-setup) ([Queue mode](../scaling/queue-mode/) _is_ included)
*   [Projects](../../user-management/rbac/projects/)
*   SSO ([SAML](../securing/set-up-sso/), [LDAP](../../user-management/ldap/))
*   Sharing ([workflows](../../workflows/sharing/), [credentials](../../credentials/credential-sharing/)) (Only the instance owner and the user who creates them can access workflows and credentials)
*   [Version control using Git](../../source-control-environments/)
*   [Workflow history](../../workflows/history/) (You can get one day of workflow history with the community edition by [registering](#registered-community-edition))

These features are available on the Enterprise Cloud plan, including the self-hosted Enterprise edition. Some of these features are available on the Starter and Pro Cloud plan.

See [pricing](https://n8n.io/pricing/) for reference.

## Registered Community Edition[#](#registered-community-edition "Permanent link")

You can unlock extra features by registering your n8n community edition. You register with your email and receive a license key.

Registering unlocks these features for the community edition:

*   [Folders](../../release-notes/#folders): Organize your workflows into tidy folders
*   [Debug in editor](../../workflows/executions/debug/): Copy and [pin](../../glossary/#data-pinning-n8n) execution data when working on a workflow
*   One day of [workflow history](../../workflows/history/): 24 hours of workflow history so you can revert back to previous workflow versions
*   [Custom execution data](../../workflows/executions/custom-executions-data/): Save, find, and annotate execution metadata

To register a new community edition instance, select the option during your initial account creation.

To register an existing community edition instance:

1.  Select the **three dots icon** ![three dots icon](../../_images/common-icons/three-dots-horizontal.png) in the lower-left corner.
2.  Select **Settings** and then **Usage and plan**.
3.  Select **Unlock** to enter your email and then select **Send me a free license key**.
4.  Check your email for the account you entered.

Once you have a license key, activate it by clicking the button in the license email or by visiting **Options > Settings > Usage and plan** and selecting **Enter activation key**.

Once activated, your license will not expire. We may change the unlocked features in the future. This will not impact previously unlocked features.