# Taiwan Indie Music Recommendation

## Use cases:

- **Personalized Music Discovery:** Recommends Taiwan indie music to users based on their location, mood, birthday, and astrological forecast, providing a unique and personalized listening experience.
- **Mood-Based Playlist Generation:** Generates playlists tailored to the user's current mood and daily astrological insights, ensuring that the music selection aligns with their emotional state and potential daily experiences.
- **Taiwanese Culture Exploration:** Introduces users to Taiwan's indie music scene by leveraging local weather conditions and cultural elements, facilitating an engaging and immersive exploration of Taiwanese culture.

## How it works:

1.  **Trigger:** The workflow starts manually using the "When clicking ‘Test workflow’" node.
2.  **Input Data:** The "infomation" node sets the user's location, mood, birthday, and preferred output language.
3.  **AI-Powered Recommendation:** The "get song recommendation" node utilizes OpenAI's GPT-4o-mini model to:
    *   Determine today's weather for the specified city.
    *   Calculate the user's zodiac sign based on their birthday.
    *   Fetch the daily fortune for that zodiac sign.
    *   Recommend a suitable Taiwan indie song, taking into account the weather and fortune.
    *   Explain the reasoning behind the song choice.
4.  **Information Extraction:** The "Information Extractor" node parses the JSON response from the AI, extracting key details such as today's date, city, weather, zodiac sign, fortune, recommended song, artist, and additional information about the song.
5.  **Spotify Search:** The "Spotify" node searches for the recommended song and artist on Spotify to obtain the song's Spotify URL.
6.  **Final Output:** The "Final Output" node compiles all the extracted information, including the Spotify link, into a structured format for easy access and use.

## Services:

-   **OpenAI:** Used for generating music recommendations based on user input, weather, and astrological data.
-   **Spotify:** Used to search for and retrieve the Spotify URL of the recommended song.

## Hashtags:

#n8n #automation #workflow #musicrecommendation #taiwanindie
