import { resourceFactory } from './resource.factory';
import { clientFactory } from './client.factory';
import { templateFactory } from './template.factory';

export function runFactories(db) {
  resourceFactory(db);
  templateFactory(db);
  clientFactory(db);
}
