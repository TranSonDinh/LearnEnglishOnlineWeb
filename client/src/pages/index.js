import React from "react";
import { Stack } from "@mui/material";
import { AppTypography } from "components/common";

const Home = () => {
  return (
    <Stack sx={{ width: "100%", mt: 5 }} alignItems="center">
      <AppTypography>HELLO WORLD</AppTypography>
    </Stack>
  );
};

export default Home;
