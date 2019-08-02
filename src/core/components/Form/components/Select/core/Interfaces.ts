export interface ParentsValueInterface {
  [value: string]: number;
}

export interface SelectInterface {
  model: number;
  name: string;
  resourceUrl: string;
  children: Array<string>;
  parent: string;
  lazy: boolean;
}
