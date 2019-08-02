import API from "@/core/services/API";
import RepositoryInterface from "@/core/repositories/RepositoryInterface";
export default class Repository implements RepositoryInterface {
  resource: string = "";
  filter: object = {};
  http: any = null;

  constructor(baseURL: string = "") {
    this.resource = "";
    this.http = new API(baseURL);
  }

  public setResource(resource: string): void {
    this.resource = resource;
  }

  public setFilter(filter: Object): void {
    this.filter = filter;
  }

  public getResource(): string {
    return this.resource;
  }

  public get(): Promise<any> {
    /* if (this.filter.parentID) {
      return this.http.getOne(this.resource, this.filter.parentID);
    }*/
    return this.http.get(this.resource);
  }

  public getOne(id: Number): Promise<any> {
    return this.http.getOne(this.resource, id);
  }
}
