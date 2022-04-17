import React, { memo } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { ImageConstant } from "const";

const NotFoundData = ({ content }) => {
  const classes = useStyles();

  return (
    <Stack direction="column" className={classes.viewNotFound}>
      <Box
        component="img"
        sx={{ objectFit: "contain" }}
        src={ImageConstant.NotFoundImage}
        width={157}
        height={162}
      />
      <Typography className={classes.textNotFound}>{content}</Typography>
    </Stack>
  );
};

NotFoundData.propTypes = {
  content: PropTypes.string,
};
NotFoundData.defaultProps = {
  content: "",
};

const useStyles = makeStyles((theme) => ({
  viewNotFound: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    alignItems: "center",
  },
  textNotFound: {
    marginTop: theme.spacing(3.25),
  },
}));

export default memo(NotFoundData);
