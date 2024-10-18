"use client";
import { Box } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Heading } from "@/packages/components/heading";
import { Paragraph } from "@/packages/components/paragraph";
import { Stack } from "@/packages/components/stack";
import { routes } from "@/packages/utils/routes";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CookiePopup = () => {
  const [isCookieBannerVisible, setCookieBannerVisible] = useState(false);

  const handleDismiss = () => {
    localStorage.setItem("cookieBannerDismissed", "true");
    setCookieBannerVisible(false);
  };

  useEffect(() => {
    setCookieBannerVisible(
      localStorage.getItem("cookieBannerDismissed") !== "true"
    );
  }, []);

  if (!isCookieBannerVisible) return <></>;

  return (
    <Box className="rounded-2xl p-6 pr-8 fixed left-5 bottom-5 bg-white/80 backdrop-blur-lg shadow-panel max-w-sm">
      <Box
        as="button"
        className="bg-white hover:bg-gray-12 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer absolute right-2 top-2 shadow-card hover:text-white"
        onClick={handleDismiss}
      >
        <X size={16} />
      </Box>
      <Stack spaceY={3}>
        <Stack spaceY={1}>
          <Heading as="h3">Here, have a cookie 🍪</Heading>
          <Paragraph>
            We use cookies to understand how people find and use Collie, and to
            improve our service. We do not sell your data to anyone.{" "}
            <Link href={routes.getRoute("privacy")} className="underline">
              Learn more
            </Link>
            .
          </Paragraph>
        </Stack>
        <Button size="sm" onClick={handleDismiss}>
          That&apos;s ok
        </Button>
      </Stack>
    </Box>
  );
};
