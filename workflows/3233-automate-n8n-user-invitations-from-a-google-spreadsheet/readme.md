# User Synchronization between Google Sheets and n8n

**Use Cases**:
1. **Automated User Onboarding**: Sync new users from a Google Sheet to your n8n instance automatically when new entries are added.
2. **User Management**: Maintain a centralized user database in Google Sheets and ensure it matches your n8n user directory.
3. **Bulk Invitations**: Send invitations to multiple users in bulk by processing a spreadsheet of email addresses.

**How it Works**:
1. **Data Collection**:
   - The workflow starts by fetching existing users from n8n using an HTTP request node (`Get all User`).
   - Simultaneously, it retrieves user data from a Google Sheet (`Get all row`).
2. **Data Processing**:
   - A merge node (`Get non-user`) compares the two datasets to identify users present in the Google Sheet but not in nw.n.
   - A code node (`Combine all paginated results`) aggregates paginated responses from the n8n API.
3. **User Creation**:
   - Validated new users are formatted into the required structure using a set node (`Create users list`).
   - An HTTP request node (`Invite User`) sends invitations to new users via n8n's API.
4. **Automation**:
   - The workflow can be triggered manually or scheduled to run periodically (`Schedule Trigger`).

**Services**:
- **Google Sheets**: Stores and provides user data from a spreadsheet.
- **n8n API**: Handles user management operations (fetching existing users and creating new ones).

**Hashtags**:
#n8n #automation #user-management #google-sheets #workflow
```

**Notes**:
- The workflow contains references to both n8n and Squarespace APIs in some nodes, but the core functionality uses **Google Sheets** and **n8n API**.
- Ensure your Google Sheet has columns matching the expected format (e.g., `Email Address`, `Name`).