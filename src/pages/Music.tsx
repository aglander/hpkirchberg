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

  console.log("Rendering Music page with", albums?.length, "albums"); // Debug log

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error loading albums:", error);
    return <div>Error loading albums</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#EDE9CE]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-8">Diskographie</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums?.map((album) => {
              console.log("Rendering album:", album.title, "with image:", album.coverImage);
              return <AlbumCard key={album.id} album={album} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Music;