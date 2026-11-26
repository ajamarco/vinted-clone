import type { ComponentProps, ReactElement } from "react";

import { cn } from "@/lib/utils";

type TagProps = ComponentProps<"span">;

export const Tag = ({ className, ...props }: TagProps): ReactElement => {
  return (
    <span
      {...props}
      className={cn(
        "border-border text-text-muted inline-flex items-center rounded-sm border px-2 py-1 text-sm leading-snug font-semibold",
        className,
      )}
    />
  );
};
