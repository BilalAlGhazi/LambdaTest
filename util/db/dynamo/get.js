export default function get(tableName, docClient) {
  return (params) => {
    if (Object.keys(params)[0] !== 'Key') throw 'Object property Key missing from Dynamo GET params'
    const getParams = {
      TableName: tableName,
      ...params,
    }
    return docClient.get(getParams).promise();
  }
}