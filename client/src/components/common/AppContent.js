import React, { memo, useEffect, useReducer, useRef } from "react";
import FinishLabelWithIcon from "components/FinishLabelWithIcon";
import AppButton from "./AppButton";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import AppTypography from "./AppTypography";
import { IconButton, Stack } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { makeStyles } from "@mui/styles";

const AppContent = ({
  title,
  content,
  isFinished,
  isSaved,
  example,
  onClick,
  audioSrc,
}) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const audioRef = useRef();

  const [isPlay, togglePlay] = useReducer(
    (currentState, nextState) => nextState ?? !currentState,
    false
  );

  useEffect(() => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlay]);

  return (
    <>
      <Stack
        sx={{ width: "100%", alignItems: "flex-start", position: "relative" }}
      >
        <FinishLabelWithIcon isFinished={isFinished} isSaved={isSaved}>
          {title}
        </FinishLabelWithIcon>
        <AppTypography variant="h6" fontWeight={400} color="text.subText">
          {content}
        </AppTypography>
        {example && <AppTypography>{example}</AppTypography>}
      </Stack>
      {example ? (
        <Stack direction="row" spacing={3}>
          <IconButton className={classes.iconButton} onClick={onClick}>
            <VolumeUpIcon
              className={classes.icon}
              onClick={() => togglePlay()}
            />
            <audio src={`/assets/listening/${audioSrc}`} ref={audioRef}></audio>
          </IconButton>
          <IconButton className={classes.iconButton} onClick={onClick}>
            {isSaved ? (
              <DeleteOutlineIcon className={classes.icon} />
            ) : (
              <LibraryAddIcon className={classes.icon} />
            )}
          </IconButton>
        </Stack>
      ) : (
        <AppButton sx={{ width: "100px" }} onClick={onClick}>
          {isFinished ? getLabel("TXT_REDO") : getLabel("TXT_START")}
        </AppButton>
      )}
    </>
  );
};

AppContent.propTypes = {
  isFinished: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  title: PropTypes.node,
  content: PropTypes.string,
  isSaved: PropTypes.bool,
  onClick: PropTypes.func,
  audioSrc: PropTypes.string,
};
AppContent.defaultProps = {};

export default memo(AppContent);

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: theme.spacing(1),
    background: "#e5e5e5",
    "&:hover": { background: "#d6d3d3" },
  },
  icon: {
    color: theme.palette.grey[400],
    fontSize: 36,
  },
}));
