import { Album } from "@/types/album";

interface AlbumCardProps {
  album: Album;
}

const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-square overflow-hidden">
        <img
          src={album.coverImage}
          alt={`Cover for ${album.title}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-500">{album.year}</span>
          {album.composer && (
            <span className="text-sm text-gray-500">• {album.composer}</span>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{album.title}</h3>
        <div className="space-y-1">
          {album.performers.map((performer, index) => (
            <p key={index} className="text-gray-600 text-sm">{performer}</p>
          ))}
        </div>
        {album.orderInfo && (
          <p className="text-sm text-primary mt-4 border-t pt-2 border-gray-100">
            {album.orderInfo}
          </p>
        )}
      </div>
    </div>
  );
};

export default AlbumCard;