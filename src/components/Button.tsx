import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
