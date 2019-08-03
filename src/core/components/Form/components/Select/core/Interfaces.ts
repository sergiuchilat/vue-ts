import Repository from "@/core/repositories/Repository";

interface ItemFormat {
  value: number;
  text: string;
}

export interface SelectInterface {
  model: Array<number>;
  itemValue: string;
  itemText: string;
  repository: Repository;
  children: Array<string>;
  lazy: boolean;
  data?: Array<ItemFormat>;
}

export interface SelectsInterface {
  [value: string]: SelectInterface;
}
