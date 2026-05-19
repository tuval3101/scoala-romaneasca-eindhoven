import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type AssetIconProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  variant?: "plain" | "soft";
};

export default function AssetIcon({ src, alt, className, variant = "plain" }: AssetIconProps) {
  return (
    <span className={cn("asset-icon", variant === "soft" && "asset-icon-soft", className)}>
      <Image alt={alt} className="asset-icon-img" src={src} sizes="44px" />
    </span>
  );
}
