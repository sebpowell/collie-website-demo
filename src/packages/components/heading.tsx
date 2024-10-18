import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";
import { ITextSizeStyles, fontWeightStyles } from "@/packages/utils/theme";
import { VariantProps, tv } from "tailwind-variants";

const headingStyles = tv({
  base: fontWeightStyles({ fontWeight: "semibold" }),
  variants: {
    styling: {
      pre: "text-1 uppercase tracking-wide text-primary-10",
    },
  },
});

type IHeadingProps = {
  as: "h1" | "h2" | "h3";
} & Omit<BoxProps<"h1" | "h2" | "h3">, "as"> &
  VariantProps<typeof headingStyles>;

const Heading = (props: IHeadingProps) => {
  const { styling, className, ...rest } = props;

  return (
    <Box className={cn(headingStyles({ styling }), className)} {...rest} />
  );
};

export { Heading };
