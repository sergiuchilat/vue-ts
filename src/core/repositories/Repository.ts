import API from "@/core/services/API";
export default class Repository {
  protected resource: String = "";
  protected http: any = null;

  constructor(baseURL: string = "") {
    this.http = new API(baseURL);
  }

  public get(): Promise<any> {
    return this.http.get();
  }
}
