import React, { useMemo, memo } from "react";
import { Tabs } from "@mui/material";
import { PathConstant } from "const";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ListeningTab from "./ListeningTab";
import ReadingTab from "./ReadingTab";
import VocabularyTab from "./VocabularyTab";
import TestTab from "./TestTab";
import HomeTab from "./HomeTab";

const HeaderTabs = () => {
  const classes = useStyles();
  const router = useRouter();

  const { t: getLabel } = useTranslation();

  const tabValue = useMemo(() => {
    if (router.pathname.includes(PathConstant.LISTENING_ROOT)) {
      return PathConstant.LISTENING_ROOT;
    } else if (router.pathname.includes(PathConstant.READING_ROOT)) {
      return PathConstant.READING_ROOT;
    } else if (router.pathname.includes(PathConstant.VOCABULARY_ROOT)) {
      return PathConstant.VOCABULARY_ROOT;
    } else if (router.pathname.includes(PathConstant.TOEIC_TEST_ROOT)) {
      return PathConstant.TOEIC_TEST_ROOT;
    } else {
      return PathConstant.ROOT;
    }
  }, [router.pathname]);

  return (
    <Tabs
      value={tabValue}
      classes={{
        root: classes.tabs,
        flexContainer: classes.flexContainer,
        indicator: classes.indicator,
      }}
    >
      <HomeTab value={PathConstant.ROOT} />
      <ListeningTab value={PathConstant.LISTENING_ROOT} />
      <ReadingTab value={PathConstant.READING_ROOT} />
      <VocabularyTab value={PathConstant.VOCABULARY_ROOT} />
      <TestTab value={PathConstant.TOEIC_TEST_ROOT} />
    </Tabs>
  );
};

export default memo(HeaderTabs);

HeaderTabs.propTypes = {};

const useStyles = makeStyles((theme) => ({
  tabs: {
    height: "100%",
    display: "flex",
  },
  flexContainer: {
    height: "100%",
  },
  indicator: {
    backgroundColor: "#6dff00",
  },
}));
