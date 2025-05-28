# Find a New Book

## Use cases:

*   **Weekly Book Recommendation:** Automatically send a weekly book recommendation based on a specific subject to your email.
*   **Discover New Reads:** Explore books within a chosen subject area you might not have found otherwise.
*   **Educational Resource:** Educators can use this workflow to discover relevant reading material for their students based on subject matter.

## How it works:

This workflow automates the process of finding and recommending books based on a specified subject from the Open Library API.

1.  **Trigger:** The workflow can be triggered either manually via "On clicking 'execute'" or automatically every Friday at 11:00 AM, using the "Every Friday at 11:00 AM" node.
2.  **Set Subject:** A subject (e.g., "juvenile\_literature") is defined using the "Set Subject" node.
3.  **Retrieve Book Count:** The "Retrieve Book Count" node makes an HTTP request to the Open Library API to get the total number of books available for the defined subject.
4.  **Check Book Count:** The "Check Book Count" node verifies that books are available. If the book count is not larger than zero, the workflow send an email using the "Send No Book Email" node.
5.  **Select Random Book:** If books are available, the "Select Random Book" node uses a Function node to pick a random book within the subject's total count.
6.  **Retrieve Basic Book Info:** The "Retrieve Basic Book Info" node requests basic info of the selecte book to Open Library API.
7.  **Retrieve Detailed Book Info:** The "Retrieve Detailed Book Info" node retrieves detailed information about the selected book, including its description.
8.  **Filtered Book Info:** The "Filtered Book Info" node set variables from the information received.
9.  **Create Author String:** The "Create Author String" node formats the author information.
10. **Book Recommendation:** The "Book Recommendation" node prepares the email's subject and body with the book's title, author(s), a link to the book on Open Library, and a brief description.
11. **Send Book Email:** Finally, the "Send Book Email" node sends an email containing the book recommendation to the specified recipient ("john.doe@example.com").

## Services:

*   [Open Library API](https://openlibrary.org/developers/api)
*   Gmail (via SMTP - using the `Gmail Creds` credential)

## Hashtags:

#n8n #automation #books #OpenLibrary #email
