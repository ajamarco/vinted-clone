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
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {badge !== undefined && (
        <Badge variant={badge} className="absolute top-3 left-3">
          {BADGE_LABELS[badge]}
        </Badge>
      )}

      <div className="flex flex-col gap-1 p-4">
        {/* The design's 0.04em letter spacing has no standard Tailwind step. */}
        <span className="text-text-muted text-sm font-semibold tracking-[0.04em] uppercase">
          {brand}
        </span>
        <span className="font-heading line-clamp-2 text-xl leading-tight font-semibold">
          {title}
        </span>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="font-semibold">{price}</span>
          <span className="text-text-muted text-sm">{size}</span>
        </div>
        <Tag className="mt-2 self-start">{condition}</Tag>
      </div>
    </Link>
  );
};
