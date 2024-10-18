"use client";
import { Box, BoxProps } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Container } from "@/packages/components/container";
import { Form } from "@/packages/components/form";
import { Paragraph } from "@/packages/components/paragraph";
import { Stack } from "@/packages/components/stack";
import { SiteConfig } from "@/packages/config/config";
import { routes } from "@/packages/utils/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Ref, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "zod";

const FooterLink = forwardRef(
  (props: BoxProps<"div">, ref: Ref<HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
      <Box
        className={clsx(className, "transition-all")}
        ref={ref}
        textSize={0}
        textColor="muted"
        hoverTextColor="muted-hover"
        {...rest}
      />
    );
  }
);

FooterLink.displayName = "FooterLink";

const FooterLinks = () => {
  const contactOnClick = (ev: any) => {
    // @ts-ignore
    if (window.Beacon) {
      ev.preventDefault();
      // @ts-ignore
      window.Beacon("open");
      return false;
    }
    return ev;
  };

  return (
    <Stack className="flex items-center flex-wrap" spaceX={6}>
      <Link href={routes.getRoute("terms")}>
        <FooterLink>Terms</FooterLink>
      </Link>
      <Link href={routes.getRoute("privacy")}>
        <FooterLink>Privacy</FooterLink>
      </Link>
      <Link href={routes.getRoute("manifesto")}>
        <FooterLink>Manifesto</FooterLink>
      </Link>
      <Box onClick={contactOnClick} className="cursor-pointer">
        <FooterLink>Contact</FooterLink>
      </Box>
    </Stack>
  );
};

const FooterNewsletter = () => {
  const form = useForm<{ email: string }>({
    resolver: zodResolver(object({ email: string().email() })),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <Box className="relative flex rounded-full p-1 shadow-card bg-white">
        <input
          placeholder="Enter your email"
          className="flex-1 bg-transparent px-4 outline-none"
        />
        <Button variant="default" size="default">
          Sign up
        </Button>
      </Box>
    </Form>
  );
};

const Footer = () => {
  return (
    <Box as="footer" className="py-16 text-center">
      <Container>
        <Stack spaceY={12}>
          <Stack className="max-w-lg mx-auto" spaceY={4}>
            <Image
              width={120}
              height={120}
              src="/stamp.png"
              className="mx-auto"
              alt=""
            />
            <Stack spaceY={4}>
              <Button asChild>
                <Box as="a" href={SiteConfig.blog_url} target="_blank">
                  Subscribe to Engineering Calm
                </Box>
              </Button>
              <Paragraph className="max-w-xs mx-auto">
                A bi-weekly newsletter about how to build resilient teams that
                thrive in chaos.
              </Paragraph>
            </Stack>
          </Stack>
          <Stack className="inline-flex flex-col" spaceY={4}>
            <FooterLinks />
            <Box textSize={0}>© {SiteConfig.company_legal_name}</Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export { Footer };
