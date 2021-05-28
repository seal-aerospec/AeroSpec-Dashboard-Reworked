// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { schemaNew } = initSchema(schema);

export {
  schemaNew
};