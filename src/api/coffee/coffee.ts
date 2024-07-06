import type { ICoffeeResponse } from './icoffee-response.interface';
import type { ICoffee } from 'src/interface/icoffee.interface';
import { Coffee } from 'src/model/coffee.model';
import { httpClient, type IHttpClient } from 'src/service/http';
import { retryFor } from 'src/decorator';

export class Source {
  constructor(
    private http: IHttpClient,
  ) {}

  @retryFor(3, 1000)
  async loadOne(): Promise<ICoffee> {
    return this.http.get<ICoffeeResponse>('https://random-data-api.com/api/coffee/random_coffee').then((r: ICoffeeResponse) => {
      return new Coffee(r.id, r.uid, r.blend_name, r.origin, r.variety, r.notes, r.intensifier, 'https://loremflickr.com/500/500/coffee_bean');
    });
  }
}

export default new Source(httpClient);
