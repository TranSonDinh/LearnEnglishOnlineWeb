import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { useTranslation } from "react-i18next";
import { PathConstant } from "const";
import { CardItem, NotFoundData } from "components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ListeningActions from "redux/listening.redux";

const Listening = () => {
  const { t: getLabel } = useTranslation();
  const route = useRouter();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const listeningsRedux = useSelector(
    ({ listeningRedux }) => listeningRedux.listenings
  );

  const listening = useSelector(
    ({ homeRedux }) => homeRedux.account?.listening || []
  );

  const onStart = (id) => {
    if (id) {
      route.push(`${PathConstant.LISTENING_ROOT}/${id}`);
    }
  };

  useEffect(() => {
    dispatch(ListeningActions.getListeningList());
  }, [dispatch]);

  useEffect(() => {
    if (listening && listeningsRedux) {
      const newList = listeningsRedux.map((item) => {
        const result = listening.find((i) => i?.questionId === item?._id);
        if (result) {
          return {
            ...item,
            isFinished: result?.result === 100 ? true : result?.result,
          };
        }
        return item;
      });
      setData(newList.filter((item) => !!item));
    }
  }, [listening, listeningsRedux]);

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_LISTENING")}</CommonTitlePage>
        <CommonTabs tabs={getListeningTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {data?.length > 0 ? (
            data.map((item) => (
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
