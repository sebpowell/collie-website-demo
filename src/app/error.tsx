"use client";
import { Box } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Container } from "@/packages/components/container";
import { Heading } from "@/packages/components/heading";
import { Stack } from "@/packages/components/stack";
import { notifyBugReporter } from "@/packages/server/clients/bug-reporter";
import { logger } from "@/packages/server/clients/logger";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
    logger.error(error.message);
    notifyBugReporter(error);
  }, [error]);

  return (
    <Box>
      <Container className="text-center py-24">
        <Stack spaceY={6}>
          <Heading as="h1" textSize={3}>
            Uh-oh, something went wrong!
          </Heading>
          <Button onClick={() => reset()}>Try again</Button>
        </Stack>
      </Container>
    </Box>
  );
}
