import { Album } from '@/types/album';
import { albums } from '@/data/albums';

export async function getAllAlbums(): Promise<Album[]> {
  console.log("Loading albums from data file");
  return albums;
}