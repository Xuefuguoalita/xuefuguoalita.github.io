import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  widthPercentage?: number; // Allow setting width as a percentage of the parent width
  minWidth?: number; // Minimum width for the image container
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
  widthPercentage = 100, // Default to 100% if not provided
}: ImageWithCaptionProps) {
  return (
    <figure className="flex flex-col items-center w-full my-8">
      {/* Image container with responsive width */}
      <div
        className="w-full"
        style={{
          width: `${widthPercentage}%`, // Responsive width based on the parent container
        }}
      >
        <Image
          src={src}
          alt={alt}
          layout="responsive" /* Maintains aspect ratio */
          width={100} /* These values represent percentage of the container’s width */
          height={75} /* Adjust the ratio accordingly or leave auto for responsive height */
          objectFit="cover" /* Optional: Ensures the image covers the container without distortion */
          className="w-full h-auto object-contain"
        />
      </div>
      <figcaption className="text-center text-caption text-sm my-2">{caption}</figcaption>
    </figure>
  );
}
