# Get a volume and add it to your bookshelf

## Use cases:

*   **Quickly add books to your Google Books bookshelf:** Users can add specific volumes to a designated bookshelf with a single execution.
*   **Automated library curation:** Streamline the process of building themed collections or managing reading lists within Google Books.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, initiating the process when manually executed.
2.  The "Google Books" node fetches the details of a specific book using its volume ID. The volume ID is hardcoded as "XxUJ2U2FXtYC".
3.  The "Google Books1" node then adds the fetched volume to a specified bookshelf (shelf ID "2"). The volume ID for this node is dynamically taken from the previous node.
4.  The "Google Books2" node verifies if the book has been added to the bookshelf.

## Services:

*   Google Books API

## Hashtags:

#n8n #googlebooks #automation #bookshelf #library
