export default async function ({ utils, event }) {
  const { dynamo, schema } = utils;

  const params = {
    Item: schema(event.request.userAttributes.email)
  }

  try {
    await dynamo.put(params)
  } finally {
    return event;
  }
}
