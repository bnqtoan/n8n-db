# Zammad - Assign organizations to existing users using "domain based assignment"

## Use cases:

- **Automated User Organization Assignment:** Automatically assigns users to organizations in Zammad based on their email domain, streamlining user management.
- **Consistent Organization Structure:** Ensures that all users with the same email domain are consistently assigned to the correct organization, improving data consistency.
- **New User Onboarding:** Simplifies the onboarding process by automatically assigning new users to the appropriate organization as soon as they are added to the system.

## How it works:

1.  **Trigger:** The workflow starts manually when you click 'Test workflow'.
2.  **Fetch Users and Organizations:** It retrieves all users and organizations from Zammad using the "Zammad" and "Zammad1" nodes, respectively.
3.  **Filter Users:** It filters for users who:
    *   Do not already have an organization assigned (`organization_id == null`).
    *   Are active (`active == true`).
    *   Have an email address (`email` is not empty).
    *   Whose email contains an "@" symbol (`email contains "@"`).
4.  **Extract Domain:** The "Extract Domain from User E-Mail" node extracts the domain name from the user's email address (e.g., "example.com" from "user@example.com") and stores it in a variable called `domain` and the user's ID.
5.  **Filter Organizations:** The workflow filters for Organizations that:
    *   Have domain assignment enabled (`domain_assignment == true`).
    *   Have a domain specified (`domain` is not empty).
    *   Are shared (`shared == true`).
    *   Are active (`active == true`).
    *   The organization's domain matches the extracted user's email domain.
6.  **Merge Users and Organizations:** The "Merge" node combines the filtered users and organizations based on the extracted `domain` name.
7.  **Update User:** For each matched user-organization pair, the "Update User" node updates the user's organization in Zammad by setting the `organization` field to the ID of the corresponding organization.

## Services:

*   Zammad

## Hashtags:

#n8n #Zammad #automation #organization #usermanagement
