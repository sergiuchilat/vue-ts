import {
  SelectInterface,
  SelectsInterface
} from "@/core/components/Form/components/Select/core/Interfaces";
import FilterComponent from "@/core/repositories/FilterComponentInterface";
import API from "@/core/services/API";
interface FilterInterface {
  parent?: Array<number>;
}

export class SelectAPI {
  private filters: Array<FilterComponent> = [];
  private http: any = null;
  constructor(baseURL: string = "") {
    this.http = new API(baseURL);
  }

  private resetFilters() {
    this.filters.splice(0, this.filters.length);
  }

  private addFilter(field: string, value: string): void {
    this.filters.push({
      field,
      value
    });
  }

  public async loadDataSource(
    selectObject: SelectInterface,
    filters: FilterInterface
  ): Promise<any> {
    this.prepareFilters(filters);
    if (selectObject.resourceUrl) {
      if (!selectObject.appendData) {
        selectObject.data = [];
      }
      if (this.filters.length) {
        this.http.setRequestFilters(this.filters);
      }
      selectObject.data = [
        ...selectObject.data,
        ...(await this.http.get(selectObject.resourceUrl))
      ];
    }
  }

  private prepareFilters(filters: FilterInterface) {
    this.resetFilters();
    if (filters.parent) {
      this.addFilter("parent_id", filters.parent.join("."));
    }
  }

  public handleChange(
    selectObject: SelectInterface,
    selects: SelectsInterface
  ) {
    if (selectObject.children) {
      for (const child of selectObject.children) {
        this.loadDataSource(selects[child], {
          parent: selectObject.model
        });
      }
    }
  }
}
