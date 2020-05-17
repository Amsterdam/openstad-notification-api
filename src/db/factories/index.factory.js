import { resourceFactory } from './resource.factory';
import { clientFactory } from './client.factory';

export function runFactories(db) {
  resourceFactory(db);
  clientFactory(db);
}
