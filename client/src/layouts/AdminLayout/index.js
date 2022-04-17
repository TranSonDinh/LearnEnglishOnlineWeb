import React, { memo } from "react";
import MainLayout from "layouts/MainLayout";
import Header from "./components/Header";
import { Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";

const AdminLayout = ({ children, ...props }) => {
  return (
    <MainLayout {...props}>
      <Header />
      <Stack direction="row" sx={{ height: "calc(100vh - 70px)", mt: "70px" }}>
        <Sidebar />
        {children}
      </Stack>
    </MainLayout>
  );
};

export default memo(AdminLayout);
