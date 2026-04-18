import { COUNTRIES_DATA } from "./data.js";
import { Country } from "./types.js";

const parsedCountries: Country[] = COUNTRIES_DATA.map(
  ({ id, alpha2, name }) => ({
    _id: String(id),
    name,
    code: alpha2,
  }),
);

export const countries = Object.freeze(parsedCountries);

export * from "./types.js";
