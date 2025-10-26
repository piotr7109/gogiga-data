export type Point = {
  type: "Point";
  coordinates: [number, number];
};

export interface City {
  _id: string;
  name: string;
  searchName: string;
  country: string;
  population: number;
  region?: string;
  subRegion?: string;
  location: Point;
}
