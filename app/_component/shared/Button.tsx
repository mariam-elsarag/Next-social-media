"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Spinner from "../ui/Spinner";
import ImageKit from "../ui/ImageKit";

type ButtonPropsType = {
  text?: string;
  href?: string;
  type?: "submit" | "button";
  loading?: boolean;
  icon?: React.ReactNode;
  src?: string;
  iconDir?: "right" | "left";
  variant?: "primary";
  handleClick?: () => void;
  className?: string;
  hasFullWidth?: boolean;
};

const base =
  "flex items-center gap-2 capitalize outline-none shadow-none rounded-full py-2 px-2 transition-all duration-300 ease-in-out active:scale-95";

const styles = {
  primary: "bg-white text-black",
};

const Button = ({
  text,
  href,
  type = "button",
  variant = "primary",
  loading = false,
  icon,
  src,
  iconDir = "right",
  handleClick,
  className,
  hasFullWidth = true,
}: ButtonPropsType) => {
  const router = useRouter();

  const Icon = icon ? (
    icon
  ) : src ? (
    <ImageKit src={src} alt="icon" width={24} height={24} />
  ) : null;

  const iconElement = loading ? <Spinner /> : Icon;

  const onClick = () => {
    if (loading) return;
    handleClick?.();
    if (href) router.push(href);
  };

  return (
    <button
      className={`${hasFullWidth ? "w-full" : "w-fit"} ${base} ${
        styles[variant]
      } ${className ?? ""}`}
      type={type}
      disabled={loading}
      onClick={onClick}
    >
      {iconDir === "left" && iconElement}
      {text}
      {iconDir === "right" && iconElement}
    </button>
  );
};

export default Button;
