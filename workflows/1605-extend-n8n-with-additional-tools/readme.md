# Telegram Weather Bot

## Use cases

-   **On-demand Weather Information:** Users can request weather data for European capitals directly from their Telegram chat.
-   **Personalized Weather Updates:** The bot greets users by name and provides weather information tailored to their requests.
-   **Visual Weather Representation:** The workflow generates an image (using R) to visually represent weather data.

## How it works

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **Command Switch:** The `Switch` node checks the message for specific commands:
    -   `/start`: Greets the user with a welcome message and instructions.
    -   `/getweather`: Initiates the weather data retrieval process.
    -   Any other command: Sends an error message indicating the command was not recognized.
3.  **Get Weather Data:** If the command is `/getweather`, the workflow proceeds as follows:
    -   The bot acknowledge the user's request with a "Please wait" message.
    -   **City List:** A `Function` node provides a list of European cities (name, id, country code).
    -   **Filename:** A `Set` node creates the name of the file base on the user Telegram ID and the current timestamp.
    -   **Get weather data:** An `HTTP Request` node retrieves weather data from the OpenWeatherMap API for each city in the list.
    -   **Any errors API?:** An `IF` node check if the `HTTP Request` for OpenWeatherMap API returned an error
    -   **Convert API response:** A `Function` node transforms the API response into a CSV format.
    -   **Spreadsheet File:** A `Spreadsheet File` node save the data into a .csv file.
    -   **Write csv:** A `Write Binary File` node writes the .csv file locally.
    -   **Run R script:** A `Execute Command` node executes an R script to generate a dumbbell plot image from the weather data, using `ggplot2`.
    -   **R successful?:** An `IF` node check if the R script execution was successful based on its exit code.
    -   **Read Binary File:** If successful, a `Read Binary File` node reads the generated PNG image.
    -   **msg_getweather:** Sends the image to the user via Telegram.
    -   **Error Handling:** If any errors occur during the API request or R script execution, the user is notified via Telegram.

## Services

-   Telegram API
-   OpenWeatherMap API
-   R (with ggplot2 package)

## Hashtags

#n8n #telegrambot #weather #automation #Rscript
