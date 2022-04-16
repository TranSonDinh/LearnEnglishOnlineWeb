import React, { memo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeLayout from "layouts/HomeLayout";
import { Stack } from "@mui/material";
import { CommonTabs, CommonTitlePage } from "components/common";
import { getVocabularyTabs } from ".";
import { AppPagination, CardItem } from "components";

const MyVocabulary = () => {
  const { t: getLabel } = useTranslation();

  return (
    <HomeLayout>
      <Stack my={8.75} alignItems="center" position="relative">
        <CommonTitlePage>{getLabel("TXT_LEARNING_VOCABULARY")}</CommonTitlePage>
        <CommonTabs tabs={getVocabularyTabs(getLabel)} />
        <Stack sx={{ width: "100%", alignItems: "center", mt: 5 }} spacing={3}>
          {MOCK_DATA.map((item) => (
            <CardItem key={item?.id} data={item} />
          ))}
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
