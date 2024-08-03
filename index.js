exports.handler = async (event) => {
  console.log('Hello from Lambda!'); // This will log a message to CloudWatch Logs

  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
};
