# Newsletter Signup Form with Follow-up Survey

## Use cases:

- Collect newsletter subscriptions and gather additional information about subscribers for targeted content and offers.
- Onboard new users by capturing their interests, job roles, and goals to tailor their experience with a product or service.
- Recruit beta testers by integrating a signup process into the newsletter subscription flow.

## How it works:

1.  **Sign Up Form:** The workflow starts with a form trigger ("Sign Up Form") that captures the user's email address when they sign up for the newsletter.
2.  **Capture Email:** The captured email and submission timestamp are saved to a Google Sheet using the "Capture Email" node. The execution ID is also recorded.
3.  **Notify New Signup:** The workflow sends a notification to a Slack channel via the "Notify New Signup!" node, alerting the team of a new newsletter subscriber.
4.  **About You:** After the email signup, the workflow presents a series of three optional forms to gather more information about the user such as name, job level, job function and country/region.
5.  **Your Interests:** Captures the user's experience with no-code automation and asks them to describe their goals for using the product.
6.  **Join Beta Testers:** Asks the user if they'd like to join a beta testers list.
7.  **Capture More Info:** All information collected from the forms is updated in the same Google Sheets row corresponding to the user's initial email submission, using the execution ID as the matching key.
8.  **Show Completion Screen:** The workflow ends with a customized completion screen displayed to the user, thanking them for completing the survey.

## Services:

-   Google Sheets: Used to store newsletter signups and survey responses.
-   Slack: Used to send notifications about new newsletter signups.

## Hashtags:

#n8n #automation #workflow #newsletter #form
