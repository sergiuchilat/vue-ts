import {
  SelectInterface,
  SelectsInterface
} from "@/core/components/Form/components/Select/core/Interfaces";
import FilterComponent from "@/core/repositories/FilterComponentInterface";

interface FilterInterface {
  parent?: Array<number>;
}

export class API {
  static filters: Array<FilterComponent> = [];
  static resetFilters() {
    this.filters = [];
  }
  static addFilter(field: string, value: string): void {
    API.filters.push({
      field,
      value
    });
  }

  static async loadDataSource(
    selectObject: SelectInterface,
    filters: FilterInterface
  ): Promise<any> {
    API.resetFilters();
    if (filters.parent) {
      API.addParentFilter(filters.parent);
    }
    selectObject.data = await selectObject.repository.get(API.filters);
  }

  static addParentFilter(parentValue: Array<number>) {
    console.log(parentValue);
    API.addFilter("parent_id", parentValue.join("."));
  }

  static handleChange(
    selectObject: SelectInterface,
    selects: SelectsInterface
  ) {
    for (const child of selectObject.children) {
      API.loadDataSource(selects[child], {
        parent: selectObject.model
      });
    }
  }
}
