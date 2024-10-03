"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utilities/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-105",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-gray-800 hover:shadow-lg",
        secondary:
          "bg-white text-black border border-black hover:bg-gray-100 hover:shadow-md",
        tertiary: "bg-transparent text-black hover:bg-gray-100 hover:shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        small: "h-8 px-3 text-sm",
        large: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, leftIcon, rightIcon, children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "outline-2 outline-offset-2 outline-transparent focus:outline-current",
        )}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
