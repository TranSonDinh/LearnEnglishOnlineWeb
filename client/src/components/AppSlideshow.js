import React, { memo } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";

const Slideshow = ({ slideImages }) => {
  const properties = {
    infinite: true,
    prevArrow: (
      <div
        style={{
          width: "100px",
          marginRight: "-100px",
          paddingLeft: "40px",
          cursor: "pointer",
        }}
      >
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="#1899d6"
          data-testid="ArrowBackIosIcon"
        >
          <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
        </svg>
      </div>
    ),
    nextArrow: (
      <div
        style={{
          width: "100px",
          marginLeft: "-100px",
          paddingRight: "40px",
          cursor: "pointer",
        }}
      >
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="#1899d6"
          data-testid="ArrowForwardIosIcon"
        >
          <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
        </svg>
      </div>
    ),
  };

  return (
    <Box mt="70px">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <Box
            component="img"
            sx={{ height: 700, width: "100%" }}
            key={index}
            src={slideImage?.url}
          />
        ))}
      </Slide>
    </Box>
  );
};

export default memo(Slideshow);

Slideshow.propTypes = {
  slideImages: PropTypes.array.isRequired,
};
