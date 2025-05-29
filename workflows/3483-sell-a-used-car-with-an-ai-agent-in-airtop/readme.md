# Sell a Used Car

## Use cases:

- **Automated Car Valuation:** Automatically retrieve a car valuation or purchase offer from Peddle.com by providing the VIN and other required details. This can be used to quickly assess the market value of a used car.
- **Lead Generation:** Automate the process of gathering offers for used cars, streamlining the initial steps for potential sellers and creating a database of leads.
- **Competitive Analysis:** Regularly fetch offers for various car configurations to analyze pricing trends and competitor offers in the used car market.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger node ("When clicking ‘Test workflow’").
2.  **Set Car Variables:** The "Variables" node sets the car details (VIN, mileage, zip code, condition, etc.) as a string variable.
3.  **Create Airtop Session:** A new session is created with Airtop using the "Create session" node.
4.  **Load Website:** The "Load website" node opens the Peddle.com instant offer page in the Airtop browser session.
5.  **Click VIN Button:** Clicks on the "Autofill with VIN" button on the website to initiate the VIN autofill.
6.  **Wait:** A "Wait" node pauses the workflow for 7 seconds.
7.  **Take Screenshot:** Captures a screenshot of the current page using Airtop.
8.  **Think Next Action:** Using Airtop's AI capabilities, the workflow determines the next action based on the content of the page. This node uses a prompt that tells the AI to extract a question, the action to take (either click or type), the element to interact with, and the text to type (if applicable).
9.  **Parse Response:** The "Parse response" node extracts the necessary information from the AI's response.
10. **Switch:** The "Switch" node routes the workflow based on the `action` determined by Airtop's AI ("TYPE", "CLICK", or "PRICE").
11. **Type:** If the AI suggests typing, the "Type" node types the specified text into the identified element on the page.
12. **Click:** If the AI suggests clicking, the "Click" node clicks on the identified element on the page.
13. **Offer Received:** If a price is available, the "Offer received" node captures the offer price, offer ID, and the current page URL.
14. **Terminate Session:** The Airtop session is terminated using the "Terminate session" node.

## Services:

*   **Airtop:** A browser automation platform that allows to load websites, interact with elements, and extract data.
*   **Peddle.com:** A website that allows users to sell their used cars.

## Hashtags:

#n8n #automation #webscraping #carvaluation #usedcars
