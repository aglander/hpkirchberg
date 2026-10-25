import React from "react";

export interface ViteImageToolsImage {
  img: { src: string; w: number; h: number };
  sources?: Record<string, string>;
}

interface ResponsiveImageProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

const imageModules = import.meta.glob<{ default: ViteImageToolsImage }>(
  "/src/assets/**/*",
  {
    eager: true,
    query: "?w=100;300;500;700;1200;1600;2400&format=webp;avif;jpg&as=picture",
  }
);

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  imageUrl,
  alt = "",
  className = "",
}) => {
  const image = imageModules[`/src/${imageUrl}`]?.default;

  if (!image) {
    console.error(`❌ ResponsiveImage: Image not found: /src/${imageUrl}`);
    return <span>Image not found</span>;
  }

  // Hand the browser every width and let it pick by viewport and pixel
  // density, so a phone with a 3x screen gets a sharp image.
  const order = ["avif", "webp", "jpg", "jpeg"];
  const sources = Object.entries(image.sources || {}).sort(
    ([a], [b]) => order.indexOf(a) - order.indexOf(b),
  );
  const jpgSet = image.sources?.jpg ?? image.sources?.jpeg;
  const fallback = jpgSet
    ? jpgSet.split(", ").map((src) => ({ url: src.split(" ")[0], width: parseInt(src.split(" ")[1]) }))
    : [];
  const fallbackSrc =
    fallback.find((f) => f.width >= 1200)?.url ?? fallback[fallback.length - 1]?.url ?? image.img.src;

  return (
    <picture>
      {sources.map(([format, srcSet]) => (
        <source key={format} type={`image/${format === "jpg" ? "jpeg" : format}`} srcSet={srcSet} sizes="100vw" />
      ))}
      <img
        src={fallbackSrc}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        alt={alt}
        className={`max-w-full h-auto ${className}`}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      />
    </picture>
  );
};

export default ResponsiveImage;