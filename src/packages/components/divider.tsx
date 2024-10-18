import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";
import { VariantProps, tv } from "tailwind-variants";

const dividerStyles = tv({
  base: "h-[1px] border-0",
  variants: {
    gradient: {
      left: "bg-gradient-left",
      center: "bg-gradient-center",
      right: "bg-gradient-right",
    },
  },
});

export const Divider = (
  props: BoxProps<"hr"> & VariantProps<typeof dividerStyles>
) => {
  const { className, gradient, ...rest } = props;

  return (
    <Box
      as="hr"
      className={dividerStyles({ gradient, className })}
      {...rest}
    ></Box>
  );
};
