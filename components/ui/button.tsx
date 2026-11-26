import type { ReactElement } from "react";
import type { ComponentProps } from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "destructive";

type ButtonVariantProps = {
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = ButtonPrimitive.Props &
  ButtonVariantProps & {
    href?: undefined;
  };

type ButtonAsLinkProps = Omit<ComponentProps<typeof Link>, "href"> &
  ButtonVariantProps & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

// The design's 1.5px border has no standard Tailwind width.
const BUTTON_BASE_STYLES =
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border-[1.5px] px-6 py-3 text-base leading-tight font-semibold no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const BUTTON_VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "border-primary bg-primary text-on-primary hover:border-primary-hover hover:bg-primary-hover hover:text-on-primary",
  secondary:
    "border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary",
  destructive: "border-error bg-error text-on-primary hover:text-on-primary",
};

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps): ReactElement => {
  const classes = cn(
    BUTTON_BASE_STYLES,
    BUTTON_VARIANT_STYLES[variant],
    typeof className === "string" ? className : undefined,
  );

  if (props.href !== undefined) {
    return <Link {...props} className={classes} />;
  }

  return <ButtonPrimitive {...props} className={classes} />;
};
