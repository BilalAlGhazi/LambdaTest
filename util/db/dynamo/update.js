export default function patch(tableName, docClient) {
  return async (params) => {
    const updateParams = {
      TableName: tableName,
      ...params
    }

    return docClient.update(updateParams).promise();
  }
}
