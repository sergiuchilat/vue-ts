import axios from "axios";

export default class API {
  private baseURL: string = "";

  constructor(baseURL: string) {
    this.baseURL = baseURL || process.env.VUE_APP_API_SERVER_URL || "";
  }

  public get(url: string, params: Object): Promise<Object> {
    let _params: any = {
      localLoader: false
    };
    if (params) {
      _params = Object.assign({}, params);
    }
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: _params.queryParams
        })
        .then((response: Object) => {
          resolve(response);
        })
        .catch((error: Object) => {
          reject(error);
        });
    });
  }

  public store(url: string, entity: any): Promise<Object> {
    return new Promise((resolve, reject) => {
      axios
        .post(this.baseURL + url, entity)
        .then((response: Object) => {
          resolve(response);
        })
        .catch((error: Object) => {
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
}
