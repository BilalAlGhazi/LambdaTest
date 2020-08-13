export default function put(tableName, docClient) {
  return (params) => {
    if (Object.keys(params)[0] !== 'Item') throw 'Object property Item missing from Dynamo PUT params'
    const putParams = {
      TableName: tableName,
      ...params,
    }
    return docClient.put(putParams).promise();
  }
}