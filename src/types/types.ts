export interface ResponseType {
  data: Data;
}

export type Data = {
  Message: string;
  Global: Global;
  Countries: Array<CountryType>;
};

export type Global = {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: null;
  oneDeathPerPeople: null;
  oneTestPerPeople: null;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
};

export type CountryType = {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
};

export type GlobalCasesActionType = {
  type: string;
  data: Global;
};

export type SelectedCountryActionType = {
  type: string;
  data: CountryType;
};

export type ListActionType = {
  type: string;
  data: Array<CountryType>;
};

export interface GlobalCasesState {
  globalCases: Global;
}

export interface ListState {
  countries: Array<CountryType>;
}

export interface DropDownState {
  options: Array<Array<string>>;
  selected: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  changeSelected?: Function;
}

export interface CountryState extends DropDownState {
  countries: ListState['countries'];
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
