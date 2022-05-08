import React, { memo, useCallback, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@mui/material";
import { AppButton, AppDialog } from "components/common";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { utils } from "xlsx";
import { handleFile } from "utils";
import { ListeningService } from "services";
import { ApiConstant } from "const";
import { useDispatch } from "react-redux";
import ListeningActions from "redux/listening.redux";

const AddButton = (props) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const [open, toggleOpen] = useReducer(
    (currentStatus, nextStatus) => nextStatus ?? !currentStatus,
    false
  );

  const onChangeFile = (e) => {
    const files = e.target.files;
    if (files && files[0]) handleFile(files[0], setData);
  };

  const handleData = useCallback(
    (data) => {
      let formatData = data.map((item) => {
        return {
          imageSrc: item[1],
          listeningFile: item[2],
          title: item[3],
          content: item[4],
          question: [
            {
              title: item[5],
              answers: [
                {
                  content: item[6],
                  isTrue: item[10] === "A",
                },
                {
                  content: item[7],
                  isTrue: item[10] === "B",
                },
                {
                  content: item[8],
                  isTrue: item[10] === "C",
                },
                {
                  content: item[9],
                  isTrue: item[10] === "D",
                },
              ],
            },
          ],
        };
      });
      let currentIndex;
      formatData.forEach((item, index) => {
        if (item?.title) {
          currentIndex = index;
        } else {
          formatData[currentIndex].question.push(...item.question);
        }
      });

      const finalData = formatData.filter(({ content }) => Boolean(content));
      return finalData;
    },
    [data]
  );

  const onCreate = () => {
    try {
      const newData = handleData(data);

      ListeningService.createListening(newData).then((res) => {
        if (res.status === ApiConstant.STT_OK) {
          toggleOpen(false);
          dispatch(ListeningActions.getListeningList());
        }
      });
    } catch (error) {
      window.isDebug && console.log(error);
    }
  };

  return (
    <>
      <AppButton
        classes={{ contained: classes.contained }}
        onClick={() => toggleOpen(true)}
      >
        {getLabel("TXT_ADD")}
      </AppButton>
      <AppDialog
        open={open}
        title={getLabel("TXT_ADD")}
        onClose={() => toggleOpen(false)}
        closeIcon
        classes={{ paper: classes.paper }}
      >
        <Input
          inputProps={{
            accept: ".xlsx",
          }}
          id="contained-button-file"
          type="file"
          onChange={onChangeFile}
        />
        <AppButton classes={{ root: classes.btn }} onClick={onCreate}>
          {getLabel("TXT_CREATE")}
        </AppButton>
      </AppDialog>
    </>
  );
};

AddButton.propTypes = {};

export default memo(AddButton);

const make_cols = (refstr) => {
  let o = [],
    C = utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
  return o;
};

const useStyles = makeStyles((theme) => ({
  contained: {
    width: 200,
    background: theme.palette.success.main,
    borderRadius: 5,
    boxShadow: "unset",
    "&:hover": {
      background: theme.palette.success.main,
      boxShadow: "unset",
    },
  },
  paper: {
    width: 600,
    borderRadius: theme.spacing(2),
  },
  label: {
    minWidth: 70,
  },
  btn: {
    marginTop: theme.spacing(3),
    width: 100,
    alignSelf: "center",
  },
}));
