# TG-Bot-Module-Giveaway-v4-db-sell-full

## Use cases:

- **Automated Telegram Giveaway:** This workflow automates the process of running giveaways in a Telegram channel, selecting random winners from participants who interact with the bot.
- **Referral-Based Entry:** It manages user referrals by tracking new participants referred by existing users, incentivizing growth of the Telegram channel.
- **Channel Management:** This system allows for adding and managing Telegram channels that are connected to the giveaway, streamlining content distribution and promotions.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user interacts with the Telegram bot.
2.  **Initialization:** The workflow initializes or sets up necessary variables.
3.  **Start/Button Decision:** It checks if the interaction is a "start" command or a button press.
4.  **Referral Check:** If the "start" command includes a referral, it processes the referral.
5.  **Status Updates:** The workflow updates the bot's status in a PostgreSQL database based on user actions and manages channels for the giveaway.
6.  **Commands Switch:** Based on the command, it can list channels, add channels (and request them), or initiate the giveaway process.
7.  **Giveaway Steps:** Define steps for the giveaway, collect participants, randomly pick winners, and notify both winners and the manager via Telegram messages.
8.  **Cleanup:** The workflow cleans up by deleting channels and participants' data and resetting bot status.

## Services:

-   Telegram (via Telegram Bot API)
-   PostgreSQL

## Hashtags:

#n8n #telegram #automation #giveaway #workflow
