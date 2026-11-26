import type { ReactElement } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

type BadgeVariant = "sale" | "new";

type BadgeProps = useRender.ComponentProps<"span"> & {
  variant: BadgeVariant;
};

const BADGE_BASE_STYLES =
  "inline-block rounded-sm px-2 py-0.5 text-sm leading-snug font-semibold text-text";

const BADGE_VARIANT_STYLES: Record<BadgeVariant, string> = {
  sale: "bg-secondary",
  new: "bg-highlight",
};

export const Badge = ({
  variant,
  className,
  render,
  ...props
}: BadgeProps): ReactElement => {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(
          BADGE_BASE_STYLES,
          BADGE_VARIANT_STYLES[variant],
          className,
        ),
      },
      props,
    ),
    render,
    state: { slot: "badge", variant },
  });
};
