import React, { memo, useEffect } from "react";
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

  const listeningsRedux = useSelector(
    ({ listeningRedux }) => listeningRedux.listenings
  );

  const onStart = (id) => {
    if (id) {
      route.push(`${PathConstant.LISTENING_ROOT}/${id}`);
    }
  };

  useEffect(() => {
    dispatch(ListeningActions.getListeningList());
  }, [dispatch]);

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_PRACTICE_LISTENING")}</CommonTitlePage>
        <CommonTabs tabs={getListeningTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {listeningsRedux?.length > 0 ? (
            listeningsRedux.map((item) => (
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
