import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, tv } from "tailwind-variants";
import { cn } from "@/packages/utils/cn";
import { Loader } from "@/packages/components/loader";
import { cva } from "class-variance-authority";
import { inputDimensionStyles } from "@/packages/components/input";
import {
  backgroundColorStyles,
  shadowStyles,
  textColorStyles,
  textSizeStyles,
} from "@/packages/utils/theme";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full transition-all",
  {
    variants: {
      isBlock: {
        true: "w-full",
      },
      variant: {
        default: clsx(
          backgroundColorStyles({ backgroundColor: "primary" }),
          "shadow-panel hover:shadow-panel-hover",
          textColorStyles({ textColor: "strong" })
        ),
        primary:
          "bg-gradient-to-b from-primary-6 to-primary-7 text-white border border-primary-7",
      },
      size: {
        sm: clsx(
          inputDimensionStyles({ size: "sm" }),
          textSizeStyles({ textSize: 0 }),
          "px-4"
        ),
        default: clsx(
          inputDimensionStyles({ size: "default" }),
          textSizeStyles({ textSize: 1 }),
          "px-6"
        ),
        lg: clsx(
          inputDimensionStyles({ size: "large" }),
          textSizeStyles({ textSize: 1 }),
          "px-8"
        ),
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      children,
      isBlock,
      asChild = false,
      isLoading,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className, isBlock }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? <Loader /> : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
