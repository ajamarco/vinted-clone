import type { ReactElement } from "react";
import Image from "next/image";

import type { Condition } from "@/types/listing";

type GridCardProps = {
  image: string;
  price: string;
  condition: Condition;
  title: string;
  size: string;
};

const CONDITION_STYLES: Record<Condition, string> = {
  "New with tags": "bg-emerald-100 text-emerald-800",
  "Like new": "bg-teal-100 text-teal-800",
  "Very good": "bg-green-100 text-green-700",
  Good: "bg-gray-100 text-gray-600",
};

export const GridCard = ({
  image,
  price,
  condition,
  title,
  size,
}: GridCardProps): ReactElement => {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:border-gray-200 hover:shadow-md">
      <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          // No standard scale utility matches the original 1.03 image zoom.
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col gap-1.5 p-3">
        {/* No standard text size preserves the original 1.05rem price. */}
        <p className="text-[1.05rem] leading-none font-extrabold text-gray-900">
          {price}
        </p>

        {/* No standard text size preserves the original 0.65rem badge. */}
        <span
          className={`self-start rounded-full px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide uppercase ${CONDITION_STYLES[condition]}`}
        >
          {condition}
        </span>

        <p className="line-clamp-2 text-xs leading-snug font-medium text-gray-700">
          {title}
        </p>

        {/* No standard text size preserves the original 0.7rem size label. */}
        <p className="text-[0.7rem] font-medium text-gray-400">{size}</p>
      </div>
    </article>
  );
};
