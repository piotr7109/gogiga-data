import { POLAND_COUNTRIES } from "./data";
import { City } from "./types";

const normalizeSearchValue = (value: string) => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("ł", "l")
    .replace("Ł", "L");
};

export const getParsedCities = () => {
  return POLAND_COUNTRIES.reduce<City[]>(
    (
      acc,
      {
        Id,
        Name,
        Commune,
        District,
        Province,
        Type,
        Latitude,
        Longitude,
        population,
        Region,
      }
    ) => [
      ...acc,
      {
        // _id: `${City}-${Region}-${Sub_region}`,
        _id: Id,
        country: "Poland",
        name: Name,
        population: population || 0, //parseInt(Population),
        region: Province,
        subRegion: District,
        searchName: Region || normalizeSearchValue(Name),
        location: {
          type: "Point",
          coordinates: [Latitude, Longitude],
        },
      },
    ],
    []
  ).filter(({ population }) => population > 100 || population === 0);
};
