import API from "@/core/services/API";

export default interface RepositoryInterface {
  resource: string;
  http: API;
  get(): Promise<any>;
}