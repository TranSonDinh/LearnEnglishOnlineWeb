import React, { memo } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Slideshow = ({ slideImages }) => {
  return (
    <Slide>
      {slideImages.map((slideImage, index) => (
        <Box
          component="img"
          sx={{ height: 740, width: "100%" }}
          key={index}
          src={slideImage?.url}
        />
      ))}
    </Slide>
  );
};

export default memo(Slideshow);

Slideshow.propTypes = {
  slideImages: PropTypes.array.isRequired,
};
