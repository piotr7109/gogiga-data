import { COUNTRIES_DATA } from "./data";
import { Country } from "./types";

const parsedCountries: Country[] = COUNTRIES_DATA.map(
  ({ id, alpha2, name }) => ({
    _id: String(id),
    name,
    code: alpha2,
  })
);

export const countries = Object.freeze(parsedCountries);

export * from "./types";
