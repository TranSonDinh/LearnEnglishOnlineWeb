import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { ApiConstant, PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { AppPagination, CardItem, NotFoundData } from "components";
import { useDispatch, useSelector } from "react-redux";
import VocabularyActions from "redux/vocabulary.redux";
import { HomeService } from "services";
import Cookie from "js-cookie";
import HomeActions from "redux/home.redux";

const Vocabulary = () => {
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const vocabularyRedux = useSelector(
    ({ vocabularyRedux }) => vocabularyRedux.vocabulary
  );

  const vocabulary = useSelector(
    ({ homeRedux }) => homeRedux.account?.vocabulary || []
  );

  const onChangeStatus = (id) => {
    const isSaved = Boolean(vocabulary.find((item) => item === id));
    let newVocabulary = vocabulary;
    if (isSaved) {
      newVocabulary = newVocabulary.filter((item) => item !== id);
    } else {
      newVocabulary.push(id);
    }

    const hasAccount = Cookie.get("account");
    if (hasAccount) {
      const arr = hasAccount.split(" ");
      HomeService.updateVocabulary({
        newVocabulary: newVocabulary,
        account: arr[0],
      })
        .then((res) => {
          if (res.status === ApiConstant.STT_OK) {
            dispatch(HomeActions.login({ username: arr[0], password: arr[1] }));
          }
        })
        .catch((error) => {
          window.isDebug && console.log(error);
        });
    }
  };

  useEffect(() => {
    dispatch(VocabularyActions.getVocabularyList());
  }, [dispatch]);

  useEffect(() => {
    if (vocabulary && vocabularyRedux) {
      const newList = vocabularyRedux.map((item) => {
        const result = vocabulary.find((id) => id === item?._id);
        if (result) {
          return {
            ...item,
            isSaved: true,
          };
        }
        return item;
      });
      setData(newList.filter((item) => !!item));
    }
  }, [vocabulary, vocabularyRedux]);

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_LEARNING_VOCABULARY")}</CommonTitlePage>
        <CommonTabs tabs={getVocabularyTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {data?.length > 0 ? (
            data.map((item) => (
              <CardItem key={item?._id} data={item} onClick={onChangeStatus} />
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

Vocabulary.propTypes = {};

export default memo(Vocabulary);

export const getVocabularyTabs = (getLabel) => [
  {
    label: getLabel("TXT_ALL"),
    path: PathConstant.VOCABULARY_ROOT,
  },
  {
    label: getLabel("TXT_SAVED"),
    path: PathConstant.MY_VOCABULARY,
  },
];
