import React from "react";
import { Divider, Stack } from "@mui/material";
import { AppTypography } from "components/common";
import HomeLayout from "layouts/HomeLayout";
import { AppSlideshow, LearnWith, Skill, WhyChooseBlock } from "components";

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
