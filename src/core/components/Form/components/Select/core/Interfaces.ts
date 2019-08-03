interface ItemFormat {
  value: number;
  text: string;
}

export interface SelectInterface {
  model: Array<number>;
  data: Array<ItemFormat>;
  resourceUrl?: string;
  itemValue: string;
  itemText: string;
  children?: Array<string>;
  lazy?: boolean;
  appendData?: boolean;
}

export interface SelectsInterface {
  [value: string]: SelectInterface;
}
