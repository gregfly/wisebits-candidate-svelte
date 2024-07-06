import type { IHttpClient } from 'src/service/http';
import type { ICoffeeResponse } from './icoffee-response.interface';
import type { ICoffee } from 'src/interface/icoffee.interface';
import { Coffee } from 'src/model/coffee.model';
import { httpClient } from 'src/service/http';
import { sleep } from 'src/utils';

export class Source {
  constructor(
    private http: IHttpClient,
    private maxRetryAttempts: number,
    private timeoutAttempt: number,
  ) {}

  async loadOne(): Promise<ICoffee> {
    for (let attempt = 0; attempt < this.maxRetryAttempts; ++attempt) {
      try {
        return await this.http.get<ICoffeeResponse>('https://random-data-api.com/api/coffee/random_coffee').then((r: ICoffeeResponse) => {
          return new Coffee(r.id, r.uid, r.blend_name, r.origin, r.variety, r.notes, r.intensifier, 'https://loremflickr.com/500/500/coffee_bean');
        });
      } catch (e) {
        if (attempt + 1 < this.maxRetryAttempts) {
          await sleep(this.timeoutAttempt);
        } else {
          throw e;
        }
      }
    }
  }
}

export default new Source(httpClient, 2, 1000);
