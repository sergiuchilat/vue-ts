import Repository from "@/core/repositories/Repository";

export class CountriesRepository extends Repository {
  resource = "countries";
}
export class RegionsRepository extends Repository {
  resource = "regions";
}

export class CitiesRepository extends Repository {
  resource = "cities";
}
