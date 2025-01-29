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
      <DialogContent className="p-0 w-fit mx-auto">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;