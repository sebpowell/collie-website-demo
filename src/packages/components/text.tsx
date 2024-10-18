import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";

export const Text = (props: BoxProps<"div">) => {
  const { as = "div", className, ...rest } = props;

  return <Box as={as} className={cn(className)} {...rest} />;
};
