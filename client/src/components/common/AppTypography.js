import React, { memo, useMemo, forwardRef } from "react";
import PropTypes, { oneOfType } from "prop-types";
import { Typography } from "@mui/material";
import useResponsive from "utils/hooks/useResponsive";

const AppTypography = forwardRef(
  (
    { sx, variant, fontWeight, textTransform, lineHeight, ...otherProps },
    ref
  ) => {
    const isSmall = useResponsive("up", "sm");
    const isMedium = useResponsive("up", "md");
    const isLarge = useResponsive("up", "lg");
    const isExtraLarge = useResponsive("up", "xl");

    const currentVariant = useMemo(() => {
      if (typeof variant === "string") {
        return variant;
      } else if (typeof variant === "object") {
        if (isExtraLarge && variant.xl) {
          return variant.xl;
        } else if (isLarge && variant.lg) {
          return variant.lg;
        } else if (isMedium && variant.md) {
          return variant.md;
        } else if (isSmall && variant.sm) {
          return variant.sm;
        }
        return variant.xs || "body1";
      } else {
        return "body1";
      }
    }, [isSmall, isMedium, isLarge, isExtraLarge, variant]);

    return (
      <Typography
        variant={currentVariant}
        sx={{
          fontWeight: fontWeight,
          textTransform: textTransform,
          lineHeight: lineHeight,
          ...sx,
        }}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

AppTypography.displayName = "AppTypography";

AppTypography.propTypes = {
  sx: PropTypes.object,
  variant: oneOfType([
    PropTypes.string,
    PropTypes.shape({
      xs: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string,
    }),
  ]),
  fontWeight: oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  textTransform: PropTypes.string,
  lineHeight: oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(AppTypography);
