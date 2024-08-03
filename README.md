# AWS Lambda Function Deployment

This project deploys a simple AWS Lambda function using Terraform.

## Deployment

To deploy the Lambda function, follow these steps:

1. **Initialize Terraform**: Run the following command to set up your Terraform environment.
   ```
   terraform init
   ```

2. **Plan the Deployment**: Generate an execution plan to review the changes.
   ```
   terraform plan
   ```

3. **Apply the Configuration**: Deploy the Lambda function to AWS.
   ```
   terraform apply
   ```

## Testing

You can test the deployed Lambda function using the AWS CLI:

```
aws lambda invoke --function-name example output.txt
```

The output will be saved in the `output.txt` file.

## Functionality

The Lambda function logs a message and returns a simple JSON response. It serves as a basic example of an AWS Lambda function using Node.js.
