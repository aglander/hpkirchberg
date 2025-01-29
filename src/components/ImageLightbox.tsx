import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageLightbox = ({ isOpen, onClose, imageSrc, imageAlt }: ImageLightboxProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;