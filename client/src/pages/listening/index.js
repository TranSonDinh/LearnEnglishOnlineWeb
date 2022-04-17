import React, { memo } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";
import { CardItem, NotFoundData } from "components";
import { useRouter } from "next/router";

const Listening = () => {
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
      </Stack>
    </HomeLayout>
  );
};

Listening.propTypes = {};

export default memo(Listening);

export const getListeningTabs = (getLabel) => [
  {
    label: getLabel("TXT_ALL"),
    path: PathConstant.LISTENING_ROOT,
  },
  {
    label: getLabel("TXT_LEARNED"),
    path: PathConstant.MY_LISTENING,
  },
];

const MOCK_DATA = [
  // {
  //   id: "1",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 1",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "2",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 2",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "3",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 3",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "4",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 4",
  //   description: "Hoc ngay nao",
  //   isFinished: "50%",
  // },
  // {
  //   id: "5",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 5",
  //   description: "Hoc ngay nao",
  //   isFinished: true,
  // },
  // {
  //   id: "6",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 6",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "7",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 7",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "8",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 8",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "9",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 9",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "10",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 10",
  //   description: "Hoc ngay nao",
  // },
  // {
  //   id: "11",
  //   imageSrc: "/12",
  //   title: "Bai nghe so 11",
  //   description: "Hoc ngay nao",
  // },
];
