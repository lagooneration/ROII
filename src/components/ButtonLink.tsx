import { FaCartShopping, FaPlus, FaWhatsapp } from "react-icons/fa6";
import clsx from "clsx";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

export type ButtonTheme = {
  primary: {
    background: string;
    text: string;
    hoverText: string;
  };
  secondary: {
    border: string;
    text: string;
    hoverBg: string;
  };
};

const themes: Record<string, ButtonTheme> = {
  orange: {
    primary: {
      background: "from-brand-orange to-brand-lime",
      text: "text-black",
      hoverText: "hover:text-black",
    },
    secondary: {
      border: "border-brand-orange",
      text: "text-brand-orange",
      hoverBg: "hover:bg-brand-orange",
    },
  },
  purple: {
    primary: {
      background: "from-brand-purple to-brand-lime",
      text: "text-white",
      hoverText: "hover:text-black",
    },
    secondary: {
      border: "border-brand-purple",
      text: "text-brand-purple",
      hoverBg: "hover:bg-brand-purple",
    },
  },
  // Add other themes following the same pattern
};

export type ButtonProps = {
  theme?: keyof typeof themes;
  size?: "sm" | "md" | "lg";
  icon?: "cart" | "arrow" | "plus" | "whatsapp" | "enactus";
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export function ButtonLink({
  theme = "orange",
  size = "md",
  icon,
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const currentTheme = themes[theme];

  return (
    <Link
      href={href}
      className={clsx(
        "button-cutout group inline-flex items-center font-bold transition-[filter,background-position] duration-300",
        variant === "primary" && [
          "bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] hover:bg-bottom",
          currentTheme.primary.background,
          currentTheme.primary.text,
          currentTheme.primary.hoverText,
        ],
        variant === "secondary" && [
          "border-2 bg-transparent hover:bg-opacity-10",
          currentTheme.secondary.border,
          currentTheme.secondary.text,
          currentTheme.secondary.hoverBg,
        ],
        size === "sm" && "gap-2.5 py-2 text-base",
        size === "md" && "gap-3 px-1 text-lg ~py-2.5/3",
        size === "lg" && "~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4",
        className
      )}
      {...props}
    >
      {icon && (
        <>
          <div
            className={clsx(
              "flex items-center justify-center transition-transform group-hover:rotate-[45deg]",
              size === "sm" && "size-5",
              size === "md" && "size-6",
              size === "lg" && "~size-6/8"
            )}
          >
            {icon === "cart" && <FaCartShopping />}
            {icon === "arrow" && <FaArrowCircleRight />}
            {icon === "plus" && <FaPlus />}
            {icon === "whatsapp" && <FaWhatsapp />}
            {icon === "enactus" && (
              <Image src="/enactus.png" alt="Enactus Logo" width={24} height={24} />
            )}
          </div>
          <div className="w-px self-stretch bg-black/25" />
        </>
      )}
      {children}
    </Link>
  );
}