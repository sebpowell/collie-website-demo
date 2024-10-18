import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";
import { borderRadiusStyles } from "@/packages/utils/theme";
import * as React from "react";
import { tv } from "tailwind-variants";

const inputBaseStyles = tv({
  base: cn(
    "border w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    borderRadiusStyles({ borderRadius: "default" })
  ),
});

const inputDimensionStyles = tv({
  variants: {
    size: {
      sm: "h-input-sm",
      default: "h-input-default",
      large: "h-input-lg",
    },
  },
});

const inputStyles = tv({
  base: cn("h-14 px-5", inputBaseStyles()),
  variants: {},
});

export type InputProps = BoxProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Box
        as="input"
        type={type}
        className={cn(inputStyles(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputBaseStyles, inputStyles, inputDimensionStyles };
