export interface ParentsValueInterface {
  [value: string]: number;
}

export interface SelectInterface {
  value: number;
  text: string;
  resourceUrl: string;
  children: Array<string>;
  parent: string;
  lazy: boolean;
}

export interface SelectsInterface {
  [value: string]: SelectInterface;
}
