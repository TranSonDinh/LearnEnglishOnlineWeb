import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { AppPagination, CardItem, NotFoundData } from "components";
import { useDispatch, useSelector } from "react-redux";
import VocabularyActions from "redux/vocabulary.redux";

const Vocabulary = () => {
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();

  const vocabularyRedux = useSelector(
    ({ vocabularyRedux }) => vocabularyRedux.vocabulary
  );

  useEffect(() => {
    dispatch(VocabularyActions.getVocabularyList());
  }, [dispatch]);

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_LEARNING_VOCABULARY")}</CommonTitlePage>
        <CommonTabs tabs={getVocabularyTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {vocabularyRedux?.length > 0 ? (
            vocabularyRedux.map((item) => (
              <CardItem key={item?._id} data={item} />
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
