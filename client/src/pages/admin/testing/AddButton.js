import React, { memo, useCallback, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@mui/material";
import { AppButton, AppDialog } from "components/common";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { utils } from "xlsx";
import { handleFile } from "utils";
import { TestingService } from "services";
import { ApiConstant } from "const";

const AddButton = (props) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const [data, setData] = useState([]);

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
      let reading = [];
      let listing = [];
      data.forEach((item) => {
        if (item[4] === 1) {
          if (item[5]) {
            reading.push({
              threads: item[5],
              questions: [
                {
                  title: item[6],
                  content: item[7],
                  answers: [
                    {
                      content: item[8],
                      isTrue: item[12] === "A",
                    },
                    {
                      content: item[9],
                      isTrue: item[12] === "B",
                    },
                    {
                      content: item[10],
                      isTrue: item[12] === "C",
                    },
                    {
                      content: item[11],
                      isTrue: item[12] === "D",
                    },
                  ],
                },
              ],
            });
          } else if (reading.length > 0) {
            reading = reading.map((readingItem, index) => {
              if (reading.length - 1 === index) {
                return {
                  ...readingItem,
                  questions: [
                    ...readingItem.questions,
                    {
                      title: item[6],
                      content: item[7],
                      answers: [
                        {
                          content: item[8],
                          isTrue: item[12] === "A",
                        },
                        {
                          content: item[9],
                          isTrue: item[12] === "B",
                        },
                        {
                          content: item[10],
                          isTrue: item[12] === "C",
                        },
                        {
                          content: item[11],
                          isTrue: item[12] === "D",
                        },
                      ],
                    },
                  ],
                };
              }
              return readingItem;
            });
          }
        } else {
          if (item[5]) {
            listing.push({
              threads: item[5],
              questions: [
                {
                  title: item[6],
                  content: item[7],
                  answers: [
                    {
                      content: item[8],
                      isTrue: item[12] === "A",
                    },
                    {
                      content: item[9],
                      isTrue: item[12] === "B",
                    },
                    {
                      content: item[10],
                      isTrue: item[12] === "C",
                    },
                    {
                      content: item[11],
                      isTrue: item[12] === "D",
                    },
                  ],
                },
              ],
            });
          } else if (listing.length > 0) {
            listing = listing.map((listingItem, index) => {
              if (listing.length - 1 === index) {
                return {
                  ...listingItem,
                  questions: [
                    ...listingItem.questions,
                    {
                      title: item[6],
                      content: item[7],
                      answers: [
                        {
                          content: item[8],
                          isTrue: item[12] === "A",
                        },
                        {
                          content: item[9],
                          isTrue: item[12] === "B",
                        },
                        {
                          content: item[10],
                          isTrue: item[12] === "C",
                        },
                        {
                          content: item[11],
                          isTrue: item[12] === "D",
                        },
                      ],
                    },
                  ],
                };
              }
              return listingItem;
            });
          }
        }
      });
      return {
        imageSrc: data[0][1],
        title: data[0][2],
        description: data[0][3],
        readingQuestions: reading,
        listeningQuestions: listing,
      };
    },
    [data]
  );

  const onCreate = () => {
    try {
      const newData = handleData(data);
      console.log(newData);
      if (data && data?.length > 0) {
        // TestingService.createTesting(newData).then((res) => {
        //   if (res.status === ApiConstant.STT_OK) {
        //     toggleOpen(false);
        //   }
        // });
      }
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
