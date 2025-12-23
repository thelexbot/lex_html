"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
};

export function Button({
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "rounded-xl px-4 py-2.5 text-sm font-medium transition";

  const primaryClasses =
    "bg-secondary-foreground text-background hover:opacity-90";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${primaryClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${primaryClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
