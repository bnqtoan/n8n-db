[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/stripe.md "Edit this page")

# Stripe credentials[#](#stripe-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Stripe Trigger](../../trigger-nodes/n8n-nodes-base.stripetrigger/)
*   [Stripe](../../app-nodes/n8n-nodes-base.stripe/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Stripe's API documentation](https://docs.stripe.com/api) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a [Stripe](https://stripe.com/) admin or developer account and:

*   An API **Secret Key**

Before you generate an API key, decide whether to generate it in live mode or test mode. Refer to [Test mode and live mode](#test-mode-and-live-mode) for more information about the two modes.

### Live mode Secret key[#](#live-mode-secret-key "Permanent link")

To generate a Secret key in live mode:

1.  Open the [Stripe developer dashboard](https://dashboard.stripe.com/developers) and select [**API Keys**](https://dashboard.stripe.com/apikeys).
2.  In the **Standard Keys** section, select **Create secret key**.
3.  Enter a **Key name**, like `n8n integration`.
4.  Select **Create**. The new API key displays.
5.  Copy the key and enter it in your n8n credential as the **Secret Key**.

Refer to Stripe's [Create a secret API key](https://docs.stripe.com/keys#create-api-secret-key) for more information.

### Test mode Secret key[#](#test-mode-secret-key "Permanent link")

To use a Secret key in test mode, you must copy the existing one:

1.  Go to your [Stripe test mode developer dashboard](https://dashboard.stripe.com/test/developers) and select [**API Keys**](https://dashboard.stripe.com/test/apikeys).
2.  In the **Standard Keys** section, select **Reveal test key** for the **Secret key**.
3.  Copy the key and enter it in your n8n credential as the **Secret Key**.

Refer to Stripe's [Create a secret API key](https://docs.stripe.com/keys#create-api-secret-key) for more information.

## Test mode and live mode[#](#test-mode-and-live-mode "Permanent link")

All Stripe API requests happen within either [test mode](https://docs.stripe.com/test-mode) or live mode. Each mode has its own API key.

Use test mode to access simulated test data and live mode to access actual account data. Objects in one mode aren’t accessible to the other.

Refer to [API keys | Test mode versus live mode](https://docs.stripe.com/keys#test-live-modes) for more information about what's available in each mode and guidance on when to use each.

n8n credentials for both modes

If you want to work with both live mode and test mode keys, store each mode's key in a separate n8n credential.

## Key prefixes[#](#key-prefixes "Permanent link")

Stripes' Secret keys always begin with `sk_`:

*   Live keys begin with `sk_live_`.
*   Test keys begin with `sk_test_`.

n8n hasn't tested these credentials with Restricted keys (prefixed `rk_`).

Publishable keys

Don't use the Publishable keys (prefixed `pk_`) with your n8n credential.