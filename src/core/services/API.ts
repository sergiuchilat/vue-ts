import axios, { AxiosRequestConfig } from "axios";
import FilterComponent from "@/core/repositories/FilterComponentInterface";
import appLocale from "@/core/services/appLocale";

interface responseObject {
  data: Object;
}

export default class API {
  private baseURL: string = "";
  private requestFilters: Array<string> = [];
  private http: any = null;

  constructor(baseURL: string) {
    const httpInstance: any = axios.create({});
    httpInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token: string = localStorage.getItem("token") || "";
        config.headers.common["X-localization"] = appLocale.get();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error.response);
      }
    );
    this.http = httpInstance;

    this.baseURL = baseURL || process.env.VUE_APP_API_SERVER_URL || "";
    this.resetFilters();
  }

  public get(url: string): Promise<Object> {
    url = (url.includes("http") ? "" : this.baseURL) + url;
    if (this.requestFilters.length) {
      url += (url.includes("?") ? "&" : "?") + this.attachFilter();
    }
    return new Promise((resolve, reject) => {
      this.http
        .get(url)
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
    this.requestFilters.splice(0, this.requestFilters.length);
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
