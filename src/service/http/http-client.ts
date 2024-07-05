export class HttpClient {
  public static async get<T>(url: string): Promise<T> {
    const res = await HttpClient.fetch(url);
    return res.json() as Promise<T>;
  }

  private static async fetch(url: string): Promise<Response> {
    return fetch(url);
  }
}

export default new HttpClient();
