import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  background?: "white" | "ivory" | "forest" | "sage" | "none";
}

export function SectionWrapper({
  children,
  className,
  id,
  as: Tag = "section",
  background = "none",
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    ivory: "bg-ivory-100",
    forest: "bg-forest-600",
    sage: "bg-sage-50",
    none: "",
  };

  return (
    <Tag
      id={id}
      className={clsx("section-padding", bgClasses[background], className)}
    >
      <div className="container-premium">{children}</div>
    </Tag>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-10 md:mb-12",
        centered && "text-center",
        className
      )}
    >
      {label && (
        <div
          className={clsx(
            "eyebrow",
            centered && "justify-center",
            dark && "text-sage-400"
          )}
        >
          {label}
        </div>
      )}
      <h2
        className={clsx(
          "heading-xl max-w-2xl",
          centered && "mx-auto",
          dark && "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            dark ? "text-white/70" : "text-charcoal-400"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
