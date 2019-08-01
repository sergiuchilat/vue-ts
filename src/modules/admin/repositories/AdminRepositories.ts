import Repository from "@/core/repositories/Repository";

export class GlobalRepository extends Repository {
  constructor(baseURL: string = "") {
    super(baseURL);
    this.resource = "";
  }
}

export class EntityRepository extends Repository {
  constructor(baseURL: string = "") {
    super(baseURL);
    this.resource = "admin-attributes-entities";
  }
}
