import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/ui/Tag";
import type { Condition, ListingBadge } from "@/types/listing";

type GridCardProps = {
  image: string;
  brand: string;
  price: string;
  condition: Condition;
  title: string;
  size: string;
  badge?: ListingBadge;
};

const BADGE_LABELS: Record<ListingBadge, string> = {
  new: "New",
  sale: "Sale",
};

export const GridCard = ({
  image,
  brand,
  price,
  condition,
  title,
  size,
  badge,
}: GridCardProps): ReactElement => {
  return (
    <Link
      href="#"
      className="border-border bg-surface text-text shadow-card hover:text-text hover:shadow-hover relative flex h-full flex-col overflow-hidden rounded-lg border no-underline transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-4/5 w-full">
        {/* Empty alt: the title below already names the listing. */}
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* The mobile design's 13px badge text has no standard Tailwind size. */}
      {badge !== undefined && (
        <Badge
          variant={badge}
          className="absolute top-2 left-2 py-px text-[13px] md:top-3 md:left-3 md:py-0.5 md:text-sm"
        >
          {BADGE_LABELS[badge]}
        </Badge>
      )}

      <div className="flex flex-col gap-0.5 p-3 md:gap-1 md:p-4">
        {/* The design's 0.04em letter spacing has no standard Tailwind step. */}
        <span className="text-text-muted text-xs font-semibold tracking-[0.04em] uppercase md:text-sm">
          {brand}
        </span>
        <span className="font-heading line-clamp-2 text-base leading-tight font-semibold md:text-xl">
          {title}
        </span>
        <div className="mt-1.5 flex items-baseline justify-between md:mt-2">
          <span className="font-semibold">{price}</span>
          <span className="text-text-muted text-[13px] md:text-sm">{size}</span>
        </div>
        {/* The mobile design does not show the condition. */}
        <Tag className="mt-2 hidden self-start md:inline-flex">{condition}</Tag>
      </div>
    </Link>
  );
};
