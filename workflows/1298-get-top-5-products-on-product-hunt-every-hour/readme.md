# ProductHunt Top 5 Daily

## Use cases:

- Automatically post the top 5 ProductHunt projects of the day to a Discord channel.
- Monitor daily trending projects on ProductHunt and receive updates without manually checking the website.
- Share popular ProductHunt projects with a team or community for inspiration and awareness.

## How it works:

1.  **Cron**: Triggers the workflow every hour.
2.  **GraphQL**: Executes a GraphQL query against the ProductHunt API to retrieve the top 5 projects of the day, ordering by ranking. It fetches the name, tagline, description, and vote count for each project. Note it uses a time window of the current day.
3.  **Item Lists**: Takes the array of projects returned by the GraphQL query and splits it into individual items, renaming the field where it stores each project as `posts`.
4.  **Set**: Extracts specific data (`Name`, `Description`, and `Votes`) from each project item obtained from the `Item Lists` node and stores them for use in the next node.
5.  **Discord**: Sends a formatted message to a specified Discord channel, displaying the name, description, and vote count of each project.

## Services:

-   ProductHunt API (GraphQL)
-   Discord

## Hashtags:

#n8n #ProductHunt #Discord #Automation #GraphQL
