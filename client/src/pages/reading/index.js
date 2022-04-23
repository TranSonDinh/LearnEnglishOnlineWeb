import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";
import { AppPagination, CardItem, NotFoundData } from "components";
import { useRouter } from "next/router";
import StringFormat from "string-format";
import { useDispatch, useSelector } from "react-redux";
import ReadingActions from "redux/reading.redux";

const Reading = () => {
  const { t: getLabel } = useTranslation();
  const route = useRouter();
  const dispatch = useDispatch();

  const readingsRedux = useSelector(
    ({ readingRedux }) => readingRedux.readings
  );

  const onStart = (id) => {
    if (id) {
      route.push(`${PathConstant.READING_ROOT}/${id}`);
    }
  };

  useEffect(() => {
    dispatch(ReadingActions.getReadingList());
  }, [dispatch]);

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_READING")}</CommonTitlePage>
        <CommonTabs tabs={getReadingTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {readingsRedux?.length > 0 ? (
            readingsRedux.map((item) => (
              <CardItem
                key={item?._id}
                data={item}
                onClick={() => {
                  onStart(item?._id);
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

Reading.propTypes = {};

export default memo(Reading);

export const getReadingTabs = (getLabel) => [
  {
    label: getLabel("TXT_ALL"),
    path: PathConstant.READING_ROOT,
  },
  {
    label: getLabel("TXT_LEARNED"),
    path: PathConstant.MY_READING,
  },
];

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
    isFinished: 50,
  },
  {
    id: "3",
    imageSrc: "/12",
    title: "Bai doc so 3",
    description: "Hoc ngay nao",
  },
  {
    id: "4",
    imageSrc: "/12",
    title: "Bai doc so 4",
    description: "Hoc ngay nao",
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
  },
  {
    id: "7",
    imageSrc: "/12",
    title: "Bai doc so 7",
    description: "Hoc ngay nao",
  },
  {
    id: "8",
    imageSrc: "/12",
    title: "Bai doc so 8",
    description: "Hoc ngay nao",
  },
  {
    id: "9",
    imageSrc: "/12",
    title: "Bai doc so 9",
    description: "Hoc ngay nao",
  },
  {
    id: "10",
    imageSrc: "/12",
    title: "Bai doc so 10",
    description: "Hoc ngay nao",
  },
  {
    id: "11",
    imageSrc: "/12",
    title: "Bai doc so 11",
    description: "Hoc ngay nao",
  },
];
