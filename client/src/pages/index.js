import React from "react";
import { Stack } from "@mui/material";
import { AppTypography } from "components/common";
import HomeLayout from "layouts/HomeLayout";
import { AppSlideshow, WhyChooseBlock } from "components";

const Home = () => {
  return (
    <HomeLayout>
      <AppSlideshow slideImages={slideImages} />
      <Stack height={500}>
        <WhyChooseBlock />
      </Stack>
    </HomeLayout>
  );
};

export default Home;

const slideImages = [
  {
    url: "https://picsum.photos/740",
    caption: "Slide 1",
  },
  {
    url: "https://picsum.photos/740",
    caption: "Slide 2",
  },
  {
    url: "https://picsum.photos/740",
    caption: "Slide 3",
  },
];
