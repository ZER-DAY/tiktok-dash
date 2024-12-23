import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx"; // Add clsx for class merging

const buttonStyles = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white text-white bg-transparent",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // Made optional for better default handling
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(buttonStyles({ variant }), className)} {...props}>
      {props.children}
    </button>
  );
}
