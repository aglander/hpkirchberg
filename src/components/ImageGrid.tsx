import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import { PictureItem } from "@/data/pictures";

interface ImageGridProps {
  images: PictureItem[];
  title: string;
}

const ImageGrid = ({ images, title }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<PictureItem | null>(null);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-serif font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <button
            type="button"
            key={index}
            className="text-left group"
            onClick={() => setSelectedImage(image)}
            aria-label={`Foto vergrößern${image.year ? `, ${image.year}` : ""}`}
          >
            <img
              src={image.src}
              alt={`${title}${image.year ? `, ${image.year}` : ""}`}
              loading="lazy"
              className="w-full h-64 object-cover object-top"
            />
            {image.year && (
              <span className="mt-2 block font-serif font-semibold text-2xl [font-variant-numeric:lining-nums]">
                {image.year}
              </span>
            )}
          </button>
        ))}
      </div>

      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={`${title}${selectedImage.year ? `, ${selectedImage.year}` : ""}`}
        />
      )}
    </section>
  );
};

export default ImageGrid;