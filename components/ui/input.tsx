import type { ComponentProps, ReactElement } from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

type InputProps = ComponentProps<"input">;

export const Input = ({ className, ...props }: InputProps): ReactElement => {
  return (
    <InputPrimitive
      {...props}
      className={cn(
        "border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-primary/20 aria-invalid:border-error min-h-11 w-full rounded-md border px-4 py-3 text-base outline-none focus:ring-3 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    />
  );
};
