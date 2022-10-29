export type Config = {
  start: number;
  end: number;
  variable: string;
  startValue: number;
  endValue: number;
};

export type Values = {
  [name: string]: number;
};

export type State = {
  values: Values;
};
