import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { getVocabularyTabs } from ".";
import { AppPagination, CardItem, NotFoundData } from "components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import VocabularyActions from "redux/vocabulary.redux";

const MyVocabulary = () => {
  const { t: getLabel } = useTranslation();
  const route = useRouter();
  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  const vocabularyRedux = useSelector(
    ({ vocabularyRedux }) => vocabularyRedux.vocabulary
  );

  const vocabulary = useSelector(
    ({ homeRedux }) => homeRedux.account?.vocabulary || []
  );

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
      });
      setList(newList.filter((item) => !!item));
    }
  }, [vocabulary, vocabularyRedux]);

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_LEARNING_VOCABULARY")}</CommonTitlePage>
        <CommonTabs tabs={getVocabularyTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {list?.length > 0 ? (
            list.map((item) => <CardItem key={item?.id} data={item} />)
          ) : (
            <NotFoundData content={getLabel("MSG_NOT_FOUND_DATA")} />
          )}
        </Stack>
        <AppPagination />
      </Stack>
    </HomeLayout>
  );
};

MyVocabulary.propTypes = {};

export default memo(MyVocabulary);

const MOCK_DATA = [
  {
    id: "1",
    title: "Bai doc so 1",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "2",
    title: "Bai doc so 2",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "3",
    title: "Bai doc so 3",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "4",
    title: "Bai doc so 4",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "5",
    title: "Bai doc so 5",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "6",
    title: "Bai doc so 6",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "7",
    title: "Bai doc so 7",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "8",
    title: "Bai doc so 8",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "9",
    title: "Bai doc so 9",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
  {
    id: "10",
    title: "Bai doc so 10",
    description: "Hoc ngay nao",
    example: "Tu nay co nghia la gi",
    isSaved: true,
  },
];
