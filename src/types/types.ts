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

export type GlobalCasesActionType = {
  type: string;
  data: Global;
};

export type ListActionType = {
  type: string;
  data: Data['Countries'];
};

export interface GlobalCasesState {
  globalCases: number;
}

export interface ListState {
  countries: Array<CountryType>;
}

export interface CountryForGraph {
  Country: string;
  CountryCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
}

export interface GraphActionType {
  type: string;
  data: Array<CountryForGraph>;
}
