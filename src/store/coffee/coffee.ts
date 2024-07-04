import { writable, type Readable } from 'svelte/store';

export interface Coffee {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string[];
  intensifier: string;
  img: string;
}

export class Store implements Readable<Coffee[]> {
  public subscribe;
  private readonly update;

  constructor(models: Coffee[] = []) {
    const { subscribe, update } = writable<Coffee[]>(models);

    this.subscribe = subscribe;
    this.update = update;
  }

  add(id: number, uid: string, blend_name: string, origin: string, variety: string, notes: string[], intensifier: string, img: string): void {
    const model = {id, uid, blend_name, origin, variety, notes, intensifier, img};
    console.log(model);
    this.update(models => [...models, model]);
  }

  length() {
    return this.length();
  }
}

export default new Store([]);
