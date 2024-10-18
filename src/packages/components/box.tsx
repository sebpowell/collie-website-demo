import {
  IBackgroundColorStyles,
  ITextColorStyles,
  ITextSizeStyles,
  ITransitionStyles,
  backgroundColorStyles,
  textColorStyles,
  transitionStyles,
  textSizeStyles,
  IBorderRadiusStyles,
  borderRadiusStyles,
  IZIndexStyles,
  zIndexStyles,
  IShadowStyles,
  shadowStyles,
  IBorderStyles,
  borderStyles,
  IFontWeightStyles,
  fontWeightStyles,
  IMaxWidthStyles,
  maxWidthStyles,
} from "@/packages/utils/theme";
import { clsx } from "clsx";
import * as React from "react";

export type BoxOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  className?: string;
} & ITextSizeStyles &
  IBorderRadiusStyles &
  IBackgroundColorStyles &
  ITransitionStyles &
  ITextColorStyles &
  IZIndexStyles &
  IShadowStyles &
  IBorderStyles &
  IFontWeightStyles &
  IMaxWidthStyles;

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof BoxOwnProps>;

const defaultElement = "div";

export const Box: <E extends React.ElementType = typeof defaultElement>(
  props: BoxProps<E>
) => React.ReactNode = React.forwardRef(function Box(
  props: BoxOwnProps,
  ref: React.Ref<Element>
) {
  const Element = props.as || defaultElement;

  const {
    className,
    borderRadius,
    backgroundColor,
    transitionDuration,
    textSize,
    textColor,
    hoverTextColor,
    boxShadow,
    borderColor,
    fontWeight,
    zIndex,
    maxWidth,
    ...rest
  } = props;

  return (
    <Element
      ref={ref}
      className={clsx(
        className,
        textColorStyles({ textColor, hoverTextColor }),
        textSizeStyles({ textSize }),
        transitionStyles({ transitionDuration }),
        backgroundColorStyles({ backgroundColor }),
        borderRadiusStyles({ borderRadius }),
        borderStyles({ borderColor }),
        shadowStyles({ boxShadow }),
        fontWeightStyles({ fontWeight }),
        zIndexStyles({ zIndex }),
        maxWidthStyles({ maxWidth })
      )}
      as={undefined}
      {...rest}
    />
  );
});

// export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
//   BoxProps<E>;

// export type PolymorphicComponent<P, D extends React.ElementType = "div"> = <
//   E extends React.ElementType = D
// >(
//   props: PolymorphicComponentProps<E, P>
// ) => React.ReactElement | null;
