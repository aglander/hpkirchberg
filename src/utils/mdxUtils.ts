import matter from 'gray-matter';
import { Album } from '@/types/album';
import path from 'path';
import fs from 'fs';

export async function getAllAlbums(): Promise<Album[]> {
  console.log("Loading albums from MDX files");
  
  const albumsDirectory = path.join(process.cwd(), 'src/content/albums');
  const filenames = fs.readdirSync(albumsDirectory);
  
  const albums = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(albumsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        id: data.id,
        year: data.year,
        composer: data.composer,
        title: data.title,
        performers: data.performers,
        orderInfo: data.orderInfo,
        coverImage: data.coverImage,
      } as Album;
    })
    .sort((a, b) => Number(b.year) - Number(a.year));

  console.log(`Loaded ${albums.length} albums`);
  return albums;
}