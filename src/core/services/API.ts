import axios from "axios";
import FilterComponent from "@/core/repositories/FilterComponentInterface";

interface responseObject {
  data: Object;
}

export default class API {
  private baseURL: string = "";
  private requestFilters: Array<string> = [];

  constructor(baseURL: string) {
    this.baseURL = baseURL || process.env.VUE_APP_API_SERVER_URL || "";
    this.resetFilters();
  }

  public get(url: string, params: Object = {}): Promise<Object> {
    console.log(url);
    let _params: any = {
      localLoader: false
    };
    if (params) {
      _params = Object.assign({}, params);
    }
    if (this.requestFilters.length) {
      if (url.includes("?")) {
        url += "&" + this.attachFilter();
      } else {
        url += "?" + this.attachFilter();
      }
    }
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseURL}${url}`, {
          params: _params.queryParams
        })
        .then((response: responseObject) => {
          resolve(response.data);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }

  public getOne(url: string, id: number): Promise<Object> {
    return this.get(`${url}/${id}`);
  }

  public store(url: string, entity: any): Promise<Object> {
    return new Promise((resolve, reject) => {
      axios
        .post(this.baseURL + url, entity)
        .then((response: Object) => {
          resolve(response);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }

  public update(
    url: string,
    entity: any,
    headers: object = {}
  ): Promise<object> {
    return new Promise((resolve, reject) => {
      if (!entity.id) {
        //todo
        reject({});
      }
      axios
        .patch(`${this.baseURL}${url}${entity.id}`, entity, { headers })
        .then((response: Object) => {
          resolve(response);
        })
        .catch((error: Object) => {
          reject(error);
        });
    });
  }

  public delete(url: string, entity: any): Promise<Object> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${this.baseURL}${url}/${entity.id}`)
        .then((response: Object) => {
          resolve(response);
        })
        .catch((error: Object) => {
          reject(error);
        });
    });
  }

  public setRequestFilters(filters: Array<FilterComponent>) {
    for (const filterComponent of filters) {
      this.requestFilters.push(
        `filter=[${filterComponent.field}]=${filterComponent.value}`
      );
    }
  }

  public attachFilter(): string {
    return this.requestFilters.join("&");
  }

  public resetFilters() {
    this.requestFilters = [];
  }
}
