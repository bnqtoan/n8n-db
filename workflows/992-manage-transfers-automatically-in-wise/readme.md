# Wise Transfer Automation

## Use cases:

- **Automated Fund Transfers:** Automatically transfer funds between accounts based on predefined rules or triggers. For example, moving a fixed amount from a business account to a personal account weekly.
- **Scheduled Payments:** Automate recurring payments to suppliers, contractors, or other recipients.
- **Micro-investment:** Automatically invest a small amount of money regularly into a specific account.

## How it works:

This workflow automates the process of creating, executing, and retrieving information about a transfer using the Wise API.

1.  **Wise (Quote Creation):** The workflow starts by creating a quote for a transfer using the Wise API. It specifies the source and target currencies, the amount to be transferred, and the target account. The `profileId`, `sourceCurrency`, `targetCurrency`, `targetAccountId` and `amount` are pre-configured.
2.  **Wise1 (Transfer Creation):** Using the quote ID obtained from the previous step, a transfer is created.  It uses the `quoteId` from the previous node and adds a reference message.
3.  **Wise2 (Transfer Execution):**  The transfer created in the previous step is then executed. It uses the transfer ID from the "Wise1" node.
4.  **Wise3 (Transfer Information Retrieval):** Finally, the workflow retrieves information about the executed transfer.

## Services:

-   Wise (formerly TransferWise) API

## Hashtags:

#n8n #automation #wise #transfer #payments
