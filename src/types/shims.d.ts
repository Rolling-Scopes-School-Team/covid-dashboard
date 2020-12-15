declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: unknown;
  export default content;
}

export interface ResponseType {
  data: Data;
}

export type Data = {
  Message: string;
  Global: Global;
  Countries: Array<CountryType>;
};

export type Global = {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
};

export type CountryType = {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
};

export type ActionType = {
  type: string;
  data: Global;
};

export interface GlobalCasesState {
  globalCases: number;
}
