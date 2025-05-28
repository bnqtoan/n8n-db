# typeform feedback workflow

## Use cases:

- Automatically collect and categorize feedback from course participants based on their usefulness rating.
- Track positive and negative feedback separately in Google Sheets for analysis and improvement of the course.
- Triggered by a Typeform submission, this workflow efficiently filters and stores feedback data.

## How it works:

1.  **Typeform Trigger:** Listens for new submissions to the specified Typeform form ("yxcvbnm").
2.  **Set:** Extracts and captures relevant data from the Typeform submission: "How useful was the course?" and "Your opinion on the course:". It stores these values under the names `usefulness` and `opinion`. Only these set values are passed on.
3.  **IF:** Filters the feedback based on the "usefulness" score. If the score is greater than or equal to 3, the feedback is considered positive; otherwise, it's considered negative.
4.  **Google Sheets (positive feedback):** Appends the positive feedback data (usefulness score and opinion) to the "positive_feedback" sheet in the Google Sheets document with ID "asdfghjklöä".
5.  **Google Sheets1 (negative feedback):** Appends the negative feedback data to the "negative_feedback" sheet in the Google Sheets document with ID "qwertzuiop".

## Services:

-   Typeform
-   Google Sheets

## Hashtags:

#n8n #automation #feedback #typeform #googlesheets
