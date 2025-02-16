import PlaceholderImage from "@/assets/images/elementor-placeholder-image.webp";
import { useState } from "react";

export function CoverImageInput() {
  const [coverImage, setCoverImage] = useState<string | null>(null);

  return (
    <label className="cursor-pointer">
      <input
        type="file"
        className="hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];

          if (!selectedFile) {
            setCoverImage(null);
            return;
          }

          const imageUrl = URL.createObjectURL(selectedFile);
          setCoverImage(imageUrl);
        }}
      />
      <img
        src={coverImage ? coverImage : PlaceholderImage}
        alt="Kapak resmi"
        className="mx-auto"
      />
    </label>
  );
}
