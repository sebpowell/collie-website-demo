"use client";
import { Box, BoxProps } from "@/packages/components/box";
import { Button } from "@/packages/components/button";
import { Logo } from "@/packages/components/logo";
import { Stack } from "@/packages/components/stack";
import { cn } from "@/packages/utils/cn";
import { createContext } from "@/packages/utils/create-context";
import { routes } from "@/packages/utils/routes";
import {
  backgroundColorStyles,
  maxWidthStyles,
  shadowStyles,
  textColorStyles,
  textSizeStyles,
  zIndexStyles,
} from "@/packages/utils/theme";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode, Ref, forwardRef, useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
import { SiteConfig } from "@/packages/config/config";
import { NavigationLinkIds } from "@/packages/components/navigation-link-ids.enum";

const navigationStyles = tv({
  base: cn(
    "rounded-b-2xl lg:rounded-full fixed left-1/2 -translate-x-1/2 top-0 lg:top-4 mx-auto w-full flex items-center px-gutter pr-0 h-16 lg:h-14 transition-all",
    maxWidthStyles({ maxWidth: "default" }),
    zIndexStyles({ zIndex: "navigation" })
  ),
  variants: {
    isPinned: {
      true: cn(
        "bg-white/70 backdrop-blur-lg",
        shadowStyles({ boxShadow: "card" })
      ),
    },
  },
});

const navigationLinkStyles = cva(
  cn(
    textSizeStyles({ textSize: 0 }),
    "px-3 h-8 leading-none transition-all cursor-pointer inline-flex items-center rounded-full"
  ),
  {
    variants: {
      isHovered: {
        true: cn(
          backgroundColorStyles({ backgroundColor: "tertiary" }),
          textColorStyles({ textColor: "primary" })
        ),
      },
    },
  }
);

const NavigationLink = forwardRef(
  (props: BoxProps<"div"> & { id: string }, ref: Ref<HTMLDivElement>) => {
    const { id, className, ...rest } = props;

    const { setHoveredLinkId, hoveredLinkId, isHovered } =
      useNavigationContext();

    return (
      <Box
        {...rest}
        className={clsx(
          navigationLinkStyles({
            isHovered: isHovered && id === hoveredLinkId,
          })
        )}
        onMouseEnter={() => {
          setHoveredLinkId(id);
        }}
        ref={ref}
      />
    );
  }
);

NavigationLink.displayName = "NavigationLink";

export const [NavigationContext, useNavigationContext] = createContext<{
  isHovered: boolean;
  setHovered(state: boolean): void;
  hoveredLinkId: string;
  setHoveredLinkId(id: string): void;
}>();

const NavigationLinks = () => {
  const { setHovered, hoveredLinkId } = useNavigationContext();

  return (
    <Box
      className="hidden ml-auto lg:flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`${routes.getRoute("home")}#${NavigationLinkIds.FEATURES}`}>
        <NavigationLink id={NavigationLinkIds.FEATURES}>
          Features
        </NavigationLink>
      </Link>
      <Link href={`${routes.getRoute("home")}#${NavigationLinkIds.REVIEWS}`}>
        <NavigationLink id={NavigationLinkIds.REVIEWS}>Reviews</NavigationLink>
      </Link>
      <Link href={`${routes.getRoute("home")}#${NavigationLinkIds.PRICING}`}>
        <NavigationLink id={NavigationLinkIds.PRICING}>Pricing</NavigationLink>
      </Link>
      <Link href={`${routes.getRoute("home")}#${NavigationLinkIds.FAQS}`}>
        <NavigationLink id={NavigationLinkIds.FAQS}>FAQs</NavigationLink>
      </Link>
      <Link href={routes.getRoute("manifesto")}>
        <NavigationLink id={NavigationLinkIds.MANIFESTO}>Manifesto</NavigationLink>
      </Link>
    </Box>
  );
};

const NavigationContextProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredLinkId, setHoveredLinkId] = useState<string>("");

  const [isHovered, setHovered] = useState(false);

  return (
    <NavigationContext
      value={{ hoveredLinkId, setHoveredLinkId, isHovered, setHovered }}
    >
      {children}
    </NavigationContext>
  );
};

const Navigation = () => {
  const { y } = useWindowScroll();

  const [_y, setY] = useState(0);

  useEffect(() => {
    setY(y);
  }, [y]);

  const [isHovered, setHovered] = useState(false);

  const showSignupButton = _y > 20 || isHovered;

  return (
    <NavigationContextProvider>
      <Box
        as="nav"
        className={navigationStyles({ isPinned: showSignupButton })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link
          href={routes.getRoute("home")}
          className="inline-flex items-center space-x-1"
        >
          <Box className="w-[110px]">
            <Logo />
          </Box>
          <Box className="rounded-full px-2 py-1 inline-flex leading-none border border-gray-6 bg-white">
            <Box
              className="bg-gradient-to-br from-pink-600 via-red-400 to-purple-500 inline-block text-transparent text-[11px] uppercase bg-clip-text"
              fontWeight="semibold"
            >
              Beta
            </Box>
          </Box>
        </Link>
        <Stack className="ml-auto flex" spaceX={2}>
          <NavigationLinks />
          <Stack
            className="flex rounded-full"
            {...(showSignupButton && { spaceX: 2 })}
          >
            <Button size="sm" variant="default" asChild>
              <Box as="a" target="_blank" href={SiteConfig.app_url}>
                Login
              </Box>
            </Button>
            <motion.div
              className="rounded-full"
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: showSignupButton ? 1 : 0,
                width: showSignupButton ? "auto" : 0,
              }}
              exit={{ opacity: 0, width: 0 }}
              style={{ overflow: "hidden" }}
            >
              <Button size="sm" variant="primary" asChild>
                <Box as="a" target="_blank" href={SiteConfig.app_url}>
                  Get started
                </Box>
              </Button>
            </motion.div>
          </Stack>
        </Stack>
      </Box>
    </NavigationContextProvider>
  );
};

export { Navigation };
