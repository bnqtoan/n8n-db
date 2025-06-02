[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/configuration-examples/encryption-key.md "Edit this page")

# Set a custom encryption key[#](#set-a-custom-encryption-key "Permanent link")

n8n creates a random encryption key automatically on the first launch and saves it in the `~/.n8n` folder. n8n uses that key to encrypt the credentials before they get saved to the database. If the key isn't yet in the settings file, you can set it using an environment variable, so that n8n uses your custom key instead of generating a new one.

In [queue mode](../../../scaling/queue-mode/), you must specify the encryption key environment variable for all workers.

1

`export N8N_ENCRYPTION_KEY=<SOME RANDOM STRING>`

Refer to [Environment variables reference](../../environment-variables/deployment/) for more information on this variable.