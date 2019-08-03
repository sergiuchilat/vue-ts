import API from "@/core/services/API";
import RepositoryInterface from "@/core/repositories/RepositoryInterface";
import FilterComponent from "@/core/repositories/FilterComponentInterface";
export default class Repository implements RepositoryInterface {
  resource: string = "";
  http: any = null;

  constructor(baseURL: string = "") {
    this.resource = "";
    this.http = new API(baseURL);
  }

  public setResource(resource: string): void {
    this.resource = resource;
  }

  public getResource(): string {
    return this.resource;
  }

  public get(filters: Array<FilterComponent>): Promise<any> {
    if(filters.length) {
      this.http.setRequestFilters(filters);
    }
    return this.http.get(this.resource);
  }

  public getOne(id: Number): Promise<any> {
    return this.http.getOne(this.resource, id);
  }
}
