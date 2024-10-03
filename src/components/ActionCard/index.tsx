import Image from "next/image";

interface ActionCardProps {
  imageSrc?: string;
  alt?: string;
  title?: string;
  description?: string;
  actionText?: string;
  href?: string;
}

export function ActionCard({
  imageSrc,
  alt,
  title,
  description,
  actionText,
  href,
}: ActionCardProps) {
  return (
    <div className="relative bg-white">
      <div className="relative aspect-square">
        {imageSrc && (
          <Image className="object-cover" src={imageSrc} alt={alt || ""} fill />
        )}
      </div>
      <div className="flex flex-col justify-between gap-1 p-8 text-center">
        <div>
          {title && <h2 className="text-xl">{title}</h2>}
          {description}
        </div>
        {actionText && <p className="font-medium underline">{actionText}</p>}
      </div>
      {href && (
        <a
          className="absolute bottom-0 left-0 top-0 z-[1] underline"
          href={href}
        />
      )}
    </div>
  );
}
