import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { useTranslation } from "react-i18next";
import { getReadingTabs } from ".";
import { AppPagination, CardItem, NotFoundData } from "components";
import { useRouter } from "next/router";
import { PathConstant } from "const";
import { useDispatch, useSelector } from "react-redux";
import ReadingActions from "redux/reading.redux";

const MyReading = () => {
  const { t: getLabel } = useTranslation();
  const route = useRouter();
  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  const reading = useSelector(
    ({ homeRedux }) => homeRedux.account?.reading || []
  );
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

  useEffect(() => {
    if (reading && readingsRedux) {
      const newList = readingsRedux.map((item) => {
        const result = reading.find((i) => i?.questionId === item?._id);
        if (result) {
          return {
            ...item,
            isFinished: result?.result === 100 ? true : result?.result,
          };
        }
      });
      setList(newList.filter((item) => !!item));
    }
  }, [reading, readingsRedux]);

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_READING")}</CommonTitlePage>
        <CommonTabs tabs={getReadingTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {list?.length > 0 ? (
            list.map((item) => (
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

MyReading.propTypes = {};

export default memo(MyReading);
