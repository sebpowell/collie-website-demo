import { Providers } from "@/app/providers";
import { Box } from "@/packages/components/box";
import { Footer } from "@/packages/components/footer";
import { Navigation } from "@/packages/components/navigation";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CookiePopup } from "@/packages/components/cookie-popup";
import { cn } from "@/packages/utils/cn";
import { IntercomScript } from "../components/intercom-script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const LayoutRoot = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={cn(inter.className, "scroll-smooth")}>
      <IntercomScript />
      <Box as="body" className="font-body" textColor="secondary">
        <Providers>
          <Box className="flex flex-col min-h-screen">
            <Navigation />
            <Box as="main" className="flex-1">
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
        <CookiePopup />
      </Box>
    </html>
  );
};
