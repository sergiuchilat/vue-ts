import Repository from "@/core/repositories/Repository";

interface ItemFormat {
  value: number;
  text: string;
}

export interface SelectInterface {
  model: Array<number>;
  data: Array<ItemFormat>;
  repository?: Repository;
  itemValue: string;
  itemText: string;
  children?: Array<string>;
  lazy?: boolean;
  appendData?: boolean;
}

export interface SelectsInterface {
  [value: string]: SelectInterface;
}
