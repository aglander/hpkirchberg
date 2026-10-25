import { Album } from "@/types/album";

interface AlbumCardProps {
  album: Album;
}

const AlbumCard = ({ album }: AlbumCardProps) => (
  <article>
    <div className="aspect-square overflow-hidden bg-ink/10">
      <img
        src={album.coverImage}
        alt={`Cover: ${album.title}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "/placeholder.svg";
        }}
        loading="lazy"
      />
    </div>
    <p className="mt-4 font-serif font-semibold text-4xl leading-none [font-variant-numeric:lining-nums]">
      {album.year}
    </p>
    <h2 className="mt-2 text-2xl font-serif font-semibold leading-tight">{album.title}</h2>
    {album.composer && <p className="mt-1 text-ink-soft">{album.composer}</p>}
    <div className="mt-3 space-y-1">
      {album.performers.map((performer, index) => (
        <p key={index}>{performer}</p>
      ))}
    </div>
    {album.orderInfo && <p className="mt-3 text-primary font-semibold">{album.orderInfo}</p>}
  </article>
);

export default AlbumCard;
