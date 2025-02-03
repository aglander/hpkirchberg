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
      <h2 className="text-2xl font-serif mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={`Historical photograph from ${title} section${image.year ? ` - ${image.year}` : ''}`}
              className="w-full h-64 object-cover object-top rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            {image.year && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-sm text-center">{image.year}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={`Historical photograph from ${title} section${selectedImage.year ? ` - ${selectedImage.year}` : ''}`}
        />
      )}
    </section>
  );
};

export default ImageGrid;