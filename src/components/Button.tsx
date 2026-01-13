import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition border";

  const styles =
    variant === "primary"
      ? "bg-[#47A614] text-black border-[#47A614] hover:bg-[#63C51F] hover:border-[#63C51F]"
      : "bg-transparent text-white border-[#2A2A2A] hover:border-white/60";

  const cls = `${base} ${styles} ${className}`;

  if (href) return <Link className={cls} href={href}>{children}</Link>;
  return <button className={cls} type={type}>{children}</button>;
}
