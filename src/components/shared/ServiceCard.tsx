import Image from "next/image";
import Link from "next/link";
import type { ServiceCardProps } from "@/types/service-card";

export default function ServiceCard({
  image,
  title,
  description,
  href,
  imageHeight = "h-52",
  footer,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="bg-white rounded-sm overflow-hidden shadow-sm border border-border/60 hover:border-secondary hover:shadow-[0_8px_30px_-5px_#00A65133] transition-all duration-300 h-full flex flex-col cursor-pointer">
        {/* Image with brightness + scale + gradient overlay */}
        <div className={`relative ${imageHeight} w-full overflow-hidden bg-muted`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-[#034668] mb-2 group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-[#4A5D6B] leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>

          {/* Footer slot */}
          {footer && (
            <div className="mt-auto pt-3 border-t border-border/50">
              {footer}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
