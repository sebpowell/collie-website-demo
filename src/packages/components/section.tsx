import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";
import { Ref, forwardRef } from "react";

type ISectionProps = BoxProps<"section">;

const Section = forwardRef((props: ISectionProps, ref: Ref<HTMLDivElement>) => {
  return <Box ref={ref} as="section" {...props} />;
});

Section.displayName = "Section";

export type { ISectionProps };

export { Section };
