[](https://github.com/n8n-io/n8n-docs/edit/main/docs/manage-cloud/update-cloud-version.md "Edit this page")

# Update your Cloud version[#](#update-your-cloud-version "Permanent link")

n8n recommends regularly updating your Cloud version. Check the [Release notes](../../release-notes/) to learn more about changes.

Info

Only instance owners can upgrade n8n Cloud versions. Contact your instance owner if you don't have permission to update n8n Cloud.

1.  [Log in to the n8n Cloud dashboard](https://app.n8n.cloud/manage)
2.  On your dashboard, select **Manage**.
3.  Use the **n8n version** dropdown to select your preferred release version:
    *   Latest Stable: recommended for most users.
    *   Latest Beta: get the newest n8n. This may be unstable.
4.  Select **Save Changes** to restart your n8n instance and perform the update.
5.  In the confirmation modal, select **Confirm**.

## Best practices for updating[#](#best-practices-for-updating "Permanent link")

*   Update frequently: this avoids having to jump multiple versions at once, reducing the risk of a disruptive update. Try to update at least once a month.
*   Check the [Release notes](../../release-notes/) for breaking changes.
*   Use [Environments](../../source-control-environments/) to create a test version of your instance. Test the update there first.

## Automatic update[#](#automatic-update "Permanent link")

n8n automatically updates outdated Cloud instances.

If you don't update you instance for 120 days, n8n emails you to warn you to update. After a further 30 days, n8n automatically updates your instance.