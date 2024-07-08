import { writable, type Readable, type Writable } from 'svelte/store';
import type { INotification } from 'src/interface/inotification.interface';

let NOTIFICATION_ID: number = 0;

export class Store implements Readable<Set<INotification>> {
  private store: Writable<Set<INotification>>;
  public subscribe;
  private readonly update;
  private ln: number = 0;

  constructor() {
    this.store = writable<Set<INotification>>(new Set());

    this.subscribe = this.store.subscribe;
    this.update = this.store.update;
  }

  show(model: INotification): void {
    if (!model.id) {
      model.id = NOTIFICATION_ID++;
    }
    this.update(models => {
      models.add(model);
      this.ln = models.size;
      return models;
    });
  }

  remove(model: INotification): void {
    this.update(models => {
      models.delete(model);
      this.ln = models.size;
      return models;
    });
  }

  length(): number {
    return this.ln;
  }
}

export default new Store();
