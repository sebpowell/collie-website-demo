import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";

type IParagraphProps = BoxProps<"p">;

export const Paragraph = (props: IParagraphProps) => {
  const { className, ...rest } = props;

  return <Box as="p" className={cn("leading-relaxed", className)} {...rest} />;
};
