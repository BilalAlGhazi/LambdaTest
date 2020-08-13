import { dynamo, schema } from 'util/dependencies';

export default function decorator(fn) {
  return (event, context) => {
    return fn({ utils: { dynamo: dynamo(process.env.DYNAMO_TABLE), schema }, event, context});
  }
}

