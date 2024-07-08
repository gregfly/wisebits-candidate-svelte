import { writable, type Readable } from 'svelte/store';
import type { ICoffee } from 'src/interface/icoffee.interface';

export class Store implements Readable<ICoffee[]> {
  public subscribe;
  private readonly update;

  constructor(models: ICoffee[] = []) {
    const { subscribe, update } = writable<ICoffee[]>(models);

    this.subscribe = subscribe;
    this.update = update;
  }

  add(model: ICoffee): void {
    this.update(models => [...models, model]);
  }
}

export default new Store([]);
