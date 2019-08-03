import API from "@/core/services/API";
import FilterComponent from "@/core/repositories/FilterComponentInterface";

export default interface RepositoryInterface {
  resource: string;
  http: API;
  get(filters: Array<FilterComponent>): Promise<any>;
}
