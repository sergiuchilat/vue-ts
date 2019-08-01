import Repository from "@/core/repositories/Repository";

export class DataRepository extends Repository {
  constructor(baseURL: string = "") {
    super(baseURL);
    this.resource = "";
  }
}
