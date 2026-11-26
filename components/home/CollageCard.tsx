import type { ReactElement } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type CollageCardProps = {
  image: string;
  className?: string;
};

export const CollageCard = ({
  image,
  className,
}: CollageCardProps): ReactElement => {
  return (
    <div
      className={cn(
        "border-border bg-surface shadow-hover relative overflow-hidden rounded-lg border",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="bg-secondary absolute top-2 left-1/2 z-10 size-2.5 -translate-x-1/2 rounded-full shadow-sm"
      />
      <div className="relative aspect-4/5 w-full">
        {/* Empty alt: the collage is decorative and labelled as a group. */}
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 900px) 50vw, 230px"
          className="object-cover"
        />
      </div>
    </div>
  );
};
