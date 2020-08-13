import AWS from 'aws-sdk'
import put from './put';
import get from './get';
import update from './update';

function dynamo(tableName) {
  const { AWS_DYNAMO_REGION } = process.env;

  const dynamo = new AWS.DynamoDB({
    region: AWS_DYNAMO_REGION
  });

  const docClient = new AWS.DynamoDB.DocumentClient({ service: dynamo });

  return {
    createSet: docClient.createSet,
    put: put(tableName, docClient),
    get: get(tableName, docClient),
    update: update(tableName, docClient)
  }
}

export { dynamo }