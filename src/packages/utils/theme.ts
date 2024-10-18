import { VariantProps, tv } from "tailwind-variants";

export const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const convertToPx = (screens: { [key: string]: number }) => {
  const result: { [key: string]: string } = {};

  for (const key in screens) {
    result[key] = `${screens[key]}px`;
  }

  return result;
};

export const screensPx = convertToPx(screens);

const shadowStyles = tv({
  variants: {
    boxShadow: {
      card: "shadow-card",
    },
  },
});

type IShadowStyles = VariantProps<typeof shadowStyles>;

const maxWidthStyles = tv({
  variants: {
    maxWidth: {
      longForm: "max-w-2xl",
      default: "max-w-[var(--container-max-width)]",
    },
  },
});

type IMaxWidthStyles = VariantProps<typeof maxWidthStyles>;

const borderStyles = tv({
  variants: {
    borderColor: {
      primary: "border-gray-4",
    },
  },
});

type IBorderStyles = VariantProps<typeof borderStyles>;

const backgroundColorStyles = tv({
  variants: {
    backgroundColor: {
      pageBackground: "bg-background-page",
      primary: "bg-white",
      secondary: "bg-gray-2",
      tertiary: "bg-gray-3",
      error: "bg-bg-error",
    },
  },
});

type IBackgroundColorStyles = VariantProps<typeof backgroundColorStyles>;

const transitionStyles = tv({
  variants: {
    transitionDuration: {
      default: "duration-[var(--transition-duration-default)]",
    },
  },
});

type ITransitionStyles = VariantProps<typeof transitionStyles>;

const fontWeightStyles = tv({
  variants: {
    fontWeight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

type IFontWeightStyles = VariantProps<typeof fontWeightStyles>;

const borderRadiusStyles = tv({
  variants: {
    borderRadius: {
      default: "rounded-default",
    },
  },
});

type IBorderRadiusStyles = VariantProps<typeof borderRadiusStyles>;

const zIndexStyles = tv({
  variants: {
    zIndex: {
      navigation: "z-navigation",
    },
  },
});

type IZIndexStyles = VariantProps<typeof zIndexStyles>;

const textSizeStyles = tv(
  {
    variants: {
      textSize: {
        0: "text-0",
        1: "text-1",
        2: "text-2",
        3: "text-3",
        4: "text-4",
        5: "text-5",
        6: "text-6",
        7: "text-7",
      },
    },
  },
  { responsiveVariants: true }
);

type ITextSizeStyles = VariantProps<typeof textSizeStyles>;

const textColorStyles = tv({
  variants: {
    textColor: {
      white: "text-white",
      brandPrimary: "text-primary-8",
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      strong: "text-text-strong",
      muted: "text-text-muted",
      error: "text-text-error",
    },
    hoverTextColor: {
      "muted-hover": "hover:text-text-muted-hover",
    },
  },
});

type ITextColorStyles = VariantProps<typeof textColorStyles>;

const height = tv({
  variants: {
    height: {
      navigationHeight: "h-[var(--navigation-height)]",
    },
  },
});

export type {
  ITransitionStyles,
  IBorderStyles,
  IFontWeightStyles,
  IBorderRadiusStyles,
  IBackgroundColorStyles,
  ITextSizeStyles,
  ITextColorStyles,
  IZIndexStyles,
  IShadowStyles,
  IMaxWidthStyles,
};

export {
  backgroundColorStyles,
  borderRadiusStyles,
  borderStyles,
  height,
  textSizeStyles,
  fontWeightStyles,
  transitionStyles,
  textColorStyles,
  zIndexStyles,
  shadowStyles,
  maxWidthStyles,
};
