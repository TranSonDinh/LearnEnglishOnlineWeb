import React from "react";
import { Divider, Stack } from "@mui/material";
import HomeLayout from "layouts/HomeLayout";
import { AppSlideshow, LearnWith, Skill, WhyChooseBlock } from "components";
import { ImageConstant } from "const";

const Home = () => {
  return (
    <HomeLayout>
      <AppSlideshow slideImages={slideImages} />
      <Stack>
        <WhyChooseBlock />
        <Divider
          sx={{ borderColor: "grey.100", borderBottomWidth: 2, mx: 2 }}
        />
        <LearnWith />
        <Divider
          sx={{ borderColor: "grey.100", borderBottomWidth: 2, mx: 2 }}
        />
        <Skill />
      </Stack>
    </HomeLayout>
  );
};

export default Home;

const slideImages = [
  {
    url: ImageConstant.Banner1,
    caption: "Slide 1",
  },
  {
    url: ImageConstant.Banner2,
    caption: "Slide 2",
  },
  {
    url: ImageConstant.Banner3,
    caption: "Slide 3",
  },
];
