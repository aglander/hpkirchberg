export interface Album {
  id: number;
  year: string;
  composer?: string;
  title: string;
  performers: string[];
  orderInfo?: string;
  coverImage: string;
}