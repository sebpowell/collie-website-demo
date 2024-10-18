import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";
import { ElementType } from "react";
import { VariantProps, tv } from "tailwind-variants";

const stackStyles = tv(
  {
    variants: {
      spaceX: {
        0: "space-x-0",
        1: "space-x-1",
        2: "space-x-2",
        3: "space-x-3",
        4: "space-x-4",
        5: "space-x-5",
        6: "space-x-6",
        7: "space-x-7",
        8: "space-x-8",
        9: "space-x-9",
        10: "space-x-10",
      },
      spaceY: {
        0: "space-y-0",
        1: "space-y-1",
        2: "space-y-2",
        3: "space-y-3",
        4: "space-y-4",
        5: "space-y-5",
        6: "space-y-6",
        7: "space-y-7",
        8: "space-y-8",
        9: "space-y-9",
        10: "space-y-10",
        11: "space-y-11",
        12: "space-y-12",
        14: "space-y-14",
        16: "space-y-16",
        20: "space-y-20",
      },
    },
  },
  { responsiveVariants: true }
);

export const Stack = <T extends ElementType>(
  props: BoxProps<T> & VariantProps<typeof stackStyles>
) => {
  const { as, className, spaceX, spaceY, ...rest } = props;

  return (
    <Box className={cn(className, stackStyles({ spaceX, spaceY }))} {...rest} />
  );
};
