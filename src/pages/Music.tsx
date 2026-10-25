import { useQuery } from '@tanstack/react-query';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlbumCard from "@/components/AlbumCard";
import { getAllAlbums } from "@/utils/mdxUtils";

const Music = () => {
  const { data: albums, isLoading, error } = useQuery({
    queryKey: ['albums'],
    queryFn: getAllAlbums,
  });

  if (error) console.error("Error loading albums:", error);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      <main id="inhalt" className="flex-grow">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-10">Diskographie</h1>
          {isLoading ? (
            <p className="text-xl">Aufnahmen werden geladen …</p>
          ) : error ? (
            <p className="text-xl">Die Aufnahmen konnten gerade nicht geladen werden. Bitte versuchen Sie es später noch einmal.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {albums?.map((album) => (
                <AlbumCard key={`${album.title}-${album.year}`} album={album} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Music;