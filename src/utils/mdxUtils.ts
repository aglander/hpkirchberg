import { Album } from '@/types/album';

// This will be replaced by dynamic imports of MDX files
const MDX_ALBUMS = import.meta.glob('../content/albums/*.mdx', {
  eager: true,
  import: 'default',
});

export async function getAllAlbums(): Promise<Album[]> {
  console.log("Loading albums from MDX files");
  
  const albums = Object.entries(MDX_ALBUMS).map(([path, module]: [string, any]) => {
    const frontmatter = (module as any).frontmatter;
    console.log("Processing album:", frontmatter.title);
    
    return {
      id: frontmatter.id,
      year: frontmatter.year,
      composer: frontmatter.composer,
      title: frontmatter.title,
      performers: frontmatter.performers,
      orderInfo: frontmatter.orderInfo,
      coverImage: frontmatter.coverImage,
    } as Album;
  }).sort((a, b) => Number(b.year) - Number(a.year));

  console.log(`Loaded ${albums.length} albums`);
  return albums;
}