import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { AppTypography, CommonTabs, CommonTitlePage } from "components/common";
import { getToeicTestTabs } from ".";
import { AppPagination, CardItem } from "components";
import { useRouter } from "next/router";
import { PathConstant } from "const";

const MyToeic = () => {
  const { t: getLabel } = useTranslation();
  const route = useRouter();

  const onStart = (id) => {
    if (id) {
      route.push(`${PathConstant.TOEIC_TEST_ROOT}/${id}`);
    }
  };

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_MOCK_TOEIC_TEST")}</CommonTitlePage>
        <CommonTabs tabs={getToeicTestTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {MOCK_DATA?.length > 0 ? (
            MOCK_DATA.map((item) => (
              <CardItem
                key={item?.id}
                data={item}
                onClick={() => {
                  onStart(item?.id);
                }}
              />
            ))
          ) : (
            <NotFoundData content={getLabel("MSG_NOT_FOUND_DATA")} />
          )}
        </Stack>
        <AppPagination />
      </Stack>
    </HomeLayout>
  );
};

MyToeic.propTypes = {};

export default memo(MyToeic);

const MOCK_DATA = [
  {
    id: "1",
    imageSrc: "/12",
    title: "Bai thi so 1",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "2",
    imageSrc: "/12",
    title: "Bai thi so 2",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "3",
    imageSrc: "/12",
    title: "Bai thi so 3",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "4",
    imageSrc: "/12",
    title: "Bai thi so 4",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "5",
    imageSrc: "/12",
    title: "Bai thi so 5",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "6",
    imageSrc: "/12",
    title: "Bai thi so 6",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "7",
    imageSrc: "/12",
    title: "Bai thi so 7",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "8",
    imageSrc: "/12",
    title: "Bai thi so 8",
    description: "Hoc ngay nao",
  },
  {
    id: "9",
    imageSrc: "/12",
    title: "Bai thi so 9",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "10",
    imageSrc: "/12",
    title: "Bai thi so 10",
    description: "Hoc ngay nao",
    isFinished: true,
  },
  {
    id: "11",
    imageSrc: "/12",
    title: "Bai thi so 11",
    description: "Hoc ngay nao",
    isFinished: true,
  },
];
