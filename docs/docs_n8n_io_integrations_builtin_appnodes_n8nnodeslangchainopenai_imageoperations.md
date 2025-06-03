[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/image-operations.md "Edit this page")

# OpenAI Image operations[#](#openai-image-operations "Permanent link")

Use this operation to analyze or generate an image in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

## Analyze Image[#](#analyze-image "Permanent link")

Use this operation to take in images and answer questions about them.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
*   **Resource**: Select **Image**.
*   **Operation**: Select **Analayze Image**.
*   **Model**: Select the model you want to use to generate an image.
*   **Text Input**: Ask a question about the image.
*   **Input Type**: Select how you'd like to input the image. Options include:
    *   **Image URL(s)**: Enter the **URL(s)** of the image(s) to analyze. Add multiple URLs in a comma-separated list.
    *   **Binary File(s)**: Enter the name of the binary property which contains the image(s) in the **Input Data Field Name**.

### Options[#](#options "Permanent link")

*   **Detail**: Specify the balance between response time versus token usage.
*   **Length of Description (Max Tokens)**: Defaults to 300. Fewer tokens will result in shorter, less detailed image description.

Refer to [Images | OpenAI](https://platform.openai.com/docs/api-reference/images) documentation for more information.

## Generate an Image[#](#generate-an-image "Permanent link")

Use this operation to create an image from a text prompt.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
*   **Resource**: Select **Image**.
*   **Operation**: Select **Generate an Image**.
*   **Model**: Select the model you want to use to generate an image.
*   **Prompt**: Enter the text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`.

### Options[#](#options_1 "Permanent link")

*   **Quality**: The quality of the image you generate. **HD** creates images with finer details and greater consistency across the image. This option is only supported for `dall-e-3`. Otherwise, choose **Standard**.
*   **Resolution**: Select the resolution of the generated images. Select **1024x1024** for `dall-e-2`. Select one of **1024x1024**, **1792x1024**, or **1024x1792** for `dall-e-3` models.
*   **Style**: Select the style of the generated images. This option is only supported for `dall-e-3`.
    *   **Natural**: Use this to produce more natural looking images.
    *   **Vivid**: Use this to produce hyper-real and dramatic images.
*   **Respond with image URL(s)**: Whether to return image URL(s) instead of binary file(s).
*   **Put Output in Field**: Defaults to `data`. Enter the name of the output field to put the binary file data in. Only available if **Respond with image URL(s)** is turned off.

Refer to [Create image | OpenAI](https://platform.openai.com/docs/api-reference/images/create) documentation for more information.

## Common issues[#](#common-issues "Permanent link")

For common errors or issues and suggested resolution steps, refer to [Common Issues](../common-issues/).