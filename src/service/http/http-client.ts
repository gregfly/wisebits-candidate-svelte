import type { IHttpClient } from './ihttp-client.interface';

export class HttpClient implements IHttpClient {
  public async get<T>(url: string): Promise<T> {
    const res = await this.fetch(url);
    return res.json() as Promise<T>;
  }

  private async fetch(url: string): Promise<Response> {
    return fetch(url);
  }
}

export default new HttpClient();
