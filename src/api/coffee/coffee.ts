import { httpClient, HttpClient } from 'src/service/http';
import { ICoffee } from 'src/interface/icoffee.interface';

export class Source {
  constructor(
    private http: HttpClient,
  ) {}

  loadOne(): Promise<ICoffee> {
    return this.http.get<ICoffee>('');
  }
}

export default new Source(httpClient);
