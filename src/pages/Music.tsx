import Navbar from "@/components/Navbar";
import { albums } from "@/data/albums";
import AlbumCard from "@/components/AlbumCard";

const Music = () => {
  console.log("Albums data:", albums); // Debug log to verify data

  return (
    <div className="min-h-screen bg-[#EDE9CE]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-gray-900 mb-8">Diskographie</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => {
            console.log("Album cover path:", album.coverImage); // Debug log for each cover path
            return <AlbumCard key={album.id} album={album} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Music;