import React, { memo } from "react";
import PropTypes from "prop-types";
import { getListeningTabs } from ".";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import HomeLayout from "layouts/HomeLayout";
import { AppPagination, CardItem } from "components";
import { useRouter } from "next/router";
import { PathConstant } from "const";

const MyListening = () => {
  const { t: getLabel } = useTranslation();
  const route = useRouter();

  const onStart = (id) => {
    if (id) {
      route.push(`${PathConstant.LISTENING_ROOT}/${id}`);
    }
  };

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_LISTENING")}</CommonTitlePage>
        <CommonTabs tabs={getListeningTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {MOCK_DATA.map((item) => (
            <CardItem
              key={item?.id}
              data={item}
              onClick={() => {
                onStart(item?.id);
              }}
            />
          ))}
        </Stack>
        <AppPagination />
      </Stack>
    </HomeLayout>
  );
};

MyListening.propTypes = {};

export default memo(MyListening);

const MOCK_DATA = [
  {
    id: "1",
    imageSrc: "/12",
    title: "Bai doc so 1",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "2",
    imageSrc: "/12",
    title: "Bai doc so 2",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "3",
    imageSrc: "/12",
    title: "Bai doc so 3",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "4",
    imageSrc: "/12",
    title: "Bai doc so 4",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "5",
    imageSrc: "/12",
    title: "Bai doc so 5",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "6",
    imageSrc: "/12",
    title: "Bai doc so 6",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "7",
    imageSrc: "/12",
    title: "Bai doc so 7",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "8",
    imageSrc: "/12",
    title: "Bai doc so 8",
    description: "Hoc ngay nao",
  },
];
