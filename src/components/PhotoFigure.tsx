import Image from "next/image";
import { photos, type ImageKey } from "@/data/images";
import { cn } from "@/lib/utils";

export function PhotoFigure({
  image,
  caption,
  sizes = "(min-width:1024px) 50vw, 100vw",
  className,
  priority,
}: {
  image: ImageKey;
  caption: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const photo = photos[image];
  return (
    <figure className={cn("panel-stitch overflow-hidden rounded-2xl bg-ink p-3 [--stitch-color:rgb(177_90_43/0.35)]", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        className="relative z-10 h-auto w-full rounded-xl"
      />
      <figcaption className="relative z-10 px-2 pb-1 pt-4 text-sm text-[#cfc3b2]">{caption}</figcaption>
    </figure>
  );
}
