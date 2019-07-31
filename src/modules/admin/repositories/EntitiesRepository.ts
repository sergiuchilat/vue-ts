import Repository from "@/core/repositories/Repository";

export default class EntitiesRepository extends Repository {
  constructor(baseURL: string) {
    super(baseURL);
    this.resource = "admin-attributes-entities";
  }
}
