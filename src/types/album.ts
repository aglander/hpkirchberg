export interface Album {
  year: string;
  composer?: string;
  title: string;
  performers: string[];
  orderInfo?: string;
  coverImage: string;
}