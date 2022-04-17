import React, { useMemo, memo } from "react";
import { Tabs } from "@mui/material";
import { PathConstant } from "const";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import SettingAccountTab from "./SettingAccountTab";
import ListeningTab from "./ListeningTab";
import ReadingTab from "./ReadingTab";
import VocabularyTab from "./VocabularyTab";
import TestTab from "./TestTab";
import UserInfoTab from "./UserInfoTab";

const Sidebar = () => {
  const classes = useStyles();
  const router = useRouter();

  const { t: getLabel } = useTranslation();

  const tabValue = useMemo(() => {
    if (router.pathname.includes(PathConstant.ADMIN_LISTENING_ROOT)) {
      return PathConstant.ADMIN_LISTENING_ROOT;
    } else if (router.pathname.includes(PathConstant.ADMIN_READING_ROOT)) {
      return PathConstant.ADMIN_READING_ROOT;
    } else if (router.pathname.includes(PathConstant.ADMIN_VOCABULARY_ROOT)) {
      return PathConstant.ADMIN_VOCABULARY_ROOT;
    } else if (router.pathname.includes(PathConstant.ADMIN_TEST_ROOT)) {
      return PathConstant.ADMIN_TEST_ROOT;
    } else if (router.pathname.includes(PathConstant.ADMIN_USES_ROOT)) {
      return PathConstant.ADMIN_USES_ROOT;
    } else if (router.pathname.includes(PathConstant.ADMIN_ACCOUNT_ROOT)) {
      return PathConstant.ADMIN_ACCOUNT_ROOT;
    } else {
      return PathConstant.ADMIN_ROOT;
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
      <ListeningTab
        value={PathConstant.ADMIN_LISTENING_ROOT}
        classes={{ root: classes.tab }}
      />
      <ReadingTab
        value={PathConstant.ADMIN_READING_ROOT}
        classes={{ root: classes.tab }}
      />
      <VocabularyTab
        value={PathConstant.ADMIN_VOCABULARY_ROOT}
        classes={{ root: classes.tab }}
      />
      <TestTab
        value={PathConstant.ADMIN_TEST_ROOT}
        classes={{ root: classes.tab }}
      />
      <UserInfoTab
        value={PathConstant.ADMIN_USES_ROOT}
        classes={{ root: classes.tab }}
      />
      <SettingAccountTab
        value={PathConstant.ADMIN_ACCOUNT_ROOT}
        classes={{ root: classes.tab }}
      />
    </Tabs>
  );
};

export default memo(Sidebar);

Sidebar.propTypes = {};

const useStyles = makeStyles((theme) => ({
  tabs: {
    height: "100%",
    display: "flex",
    background: "#373737",
    width: 250,
  },
  flexContainer: {
    height: "100%",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },
  indicator: {
    backgroundColor: "transparent",
  },
  tab: {
    alignItems: "flex-start",
    paddingLeft: theme.spacing(3),
  },
}));
