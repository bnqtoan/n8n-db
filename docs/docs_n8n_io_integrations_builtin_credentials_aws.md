[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/aws.md "Edit this page")

# AWS credentials[#](#aws-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [AWS Bedrock Chat Model](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock/)
*   [AWS Certificate Manager](../../app-nodes/n8n-nodes-base.awscertificatemanager/)
*   [AWS DynamoDB](../../app-nodes/n8n-nodes-base.awsdynamodb/)
*   [AWS Elastic Load Balancing](../../app-nodes/n8n-nodes-base.awselb/)
*   [AWS Lambda](../../app-nodes/n8n-nodes-base.awslambda/)
*   [AWS Rekognition](../../app-nodes/n8n-nodes-base.awsrekognition/)
*   [AWS S3](../../app-nodes/n8n-nodes-base.awss3/)
*   [AWS SES](../../app-nodes/n8n-nodes-base.awsses/)
*   [AWS SNS](../../app-nodes/n8n-nodes-base.awssns/)
*   [AWS SNS Trigger](../../trigger-nodes/n8n-nodes-base.awssnstrigger/)
*   [AWS SQS](../../app-nodes/n8n-nodes-base.awssqs/)
*   [AWS Textract](../../app-nodes/n8n-nodes-base.awstextract/)
*   [AWS Transcribe](../../app-nodes/n8n-nodes-base.awstranscribe/)
*   [Embeddings AWS Bedrock](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access key

## Related resources[#](#related-resources "Permanent link")

Refer to [AWS's Identity and Access Management documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html) for more information about the service.

## Using API access key[#](#using-api-access-key "Permanent link")

To configure this credential, you'll need an [AWS](https://aws.amazon.com/) account and:

*   Your AWS **Region**
*   The **Access Key ID**: Generated when you create an access key.
*   The **Secret Access Key**: Generated when you create an access key.

To create an access key and set up the credential:

1.  In your n8n credential, select your AWS **Region**.
2.  Log in to the [IAM console](https://console.aws.amazon.com/iam).
3.  In the navigation bar on the upper right, select your user name and then select **Security credentials**.
4.  In the **Access keys** section, select **Create access key**.
5.  On the **Access key best practices & alternatives page**, choose your use case. If it doesn't prompt you to create an access key, select **Other**.
6.  Select **Next**.
7.  Set a **description** tag value for the access key to make it easier to identify, for example `n8n integration`.
8.  Select **Create access key**.
9.  Reveal the **Access Key ID** and **Secret Access Key** and enter them in n8n.
10.  To use a **Temporary security credential**, turn that option on and add a **Session token**. Refer to the [AWS Temporary security credential documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html) for more information on working with temporary security credentials.
11.  If you use [Amazon Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc/) to host n8n, you can establish a connection between your VPC and some apps. Use **Custom Endpoints** to enter relevant custom endpoint(s) for this connection. This setup works with these apps:
    *   Rekognition
    *   Lambda
    *   SNS
    *   SES
    *   SQS
    *   S3

You can also generate access keys through the AWS CLI and AWS API. Refer to the [AWS Managing Access Keys documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for instructions on generating access keys using these methods.