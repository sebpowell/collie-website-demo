import { Box } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Container } from "@/packages/components/container";
import { Heading } from "@/packages/components/heading";
import { Stack } from "@/packages/components/stack";
import { routes } from "@/packages/utils/routes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Box className="flex">
      <Container className="text-center py-24">
        <Stack spaceY={8}>
          <Heading as="h1" textSize={3}>
            Page not found
          </Heading>
          <Button asChild>
            <Link href={routes.getRoute("home")}>Back to home</Link>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
