"use client";
import { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

interface BoundedProps {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  size?: "small" | "base" | "wide" | "widest";
}

const maxWidthMap = {
  small: "max-w-2xl",
  base: "max-w-4xl",
  wide: "max-w-6xl",
  widest: "max-w-7xl",
};

export function Bounded({
  as: Component = "section",
  className,
  children,
  size = "base",
  ...restProps
}: BoundedProps) {
  return (
    <Component
      className={clsx(
        "px-4 md:px-6 py-8 md:py-10",
        "relative",
        className
      )}
      {...restProps}
    >
      <div className={clsx(
        "mx-auto w-full",
        maxWidthMap[size]
      )}>
        {children}
      </div>
    </Component>
  );
} 