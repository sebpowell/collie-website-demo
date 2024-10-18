import { Box, BoxProps } from "@/packages/components/box";
import { cn } from "@/packages/utils/cn";

const Container = (props: BoxProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <Box
      className={cn(
        "max-w-[var(--container-max-width)] mx-auto w-full px-gutter",
        className
      )}
      {...rest}
    />
  );
};

export { Container };
