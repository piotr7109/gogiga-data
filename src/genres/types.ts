export interface Genre {
  _id: string;
  name: string;
  shortName?: string;
  subgenres?: Genre[];
}
