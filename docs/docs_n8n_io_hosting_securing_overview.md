[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/securing/overview.md "Edit this page")

# Securing n8n[#](#securing-n8n "Permanent link")

Securing your n8n instance can take several forms.

At a high level, you can:

*   Conduct a [security audit](../security-audit/) to identify security risks.
*   [Set up SSL](../set-up-ssl/) to enforce secure connections.
*   [Set up Single Sign-On](../set-up-sso/) for user account management.
*   Use [two-factor authentication (2FA)](../../../user-management/two-factor-auth/) for your users.

More granularly, consider blocking or opting out of features or data collection you don't want:

*   [Disable the public API](../disable-public-api/) if you aren't using it.
*   [Opt out of data collection](../telemetry-opt-out/) of the anonymous data n8n collects automatically.
*   [Block certain nodes](../blocking-nodes/) from being available to your users.