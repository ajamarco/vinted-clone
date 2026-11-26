import type { ReactElement } from "react";

type SearchIconProps = {
  className?: string;
};

export const SearchIcon = ({ className }: SearchIconProps): ReactElement => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  );
};
