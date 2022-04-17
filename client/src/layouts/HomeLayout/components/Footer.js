import React, { memo } from "react";
import { Box, Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppTypography } from "components/common";
import { PathConstant } from "const";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        background: ({ palette }) => palette.background.dark,
        py: 6,
        px: 5,
      }}
    >
      <AppTypography variant="h2" align="center" color="common.white" mb={6}>
        <b>ENGLISH FOR YOU</b> chào bạn
      </AppTypography>
      <Stack direction="row" justifyContent="space-between">
        <Box className={classes.column}>
          <AppTypography
            variant="overline"
            fontWeight={700}
            color="common.white"
            mb={5}
            align="center"
          >
            Về chúng tôi
          </AppTypography>
          <FooterLink href="#">Thông tin về chúng tôi</FooterLink>
          <FooterLink href="#">Điều khoản</FooterLink>
          <FooterLink href="#">Liên hệ với chúng tôi</FooterLink>
        </Box>
        <Box className={classes.column}>
          <AppTypography
            variant="overline"
            fontWeight={700}
            color="common.white"
            mb={5}
            align="center"
          >
            Menu
          </AppTypography>
          <FooterLink href={PathConstant.LISTENING_ROOT}>Listening</FooterLink>
          <FooterLink href={PathConstant.READING_ROOT}>Reading</FooterLink>
          <FooterLink href={PathConstant.VOCABULARY_ROOT}>
            Vocabulary
          </FooterLink>
          <FooterLink href={PathConstant.TOEIC_TEST_ROOT}>
            Toeic Test
          </FooterLink>
        </Box>
        <Box className={classes.column}>
          <AppTypography
            variant="overline"
            fontWeight={700}
            color="common.white"
            mb={5}
            align="center"
          >
            Truyền thông xã hội
          </AppTypography>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">Youtube</FooterLink>
        </Box>
      </Stack>
    </Box>
  );
};

const FooterLink = (props) => {
  const classes = useStyles();
  return <Button className={classes.footerLink} {...props} />;
};

FooterLink.displayName = "FooterLink";

export default memo(Footer);

const useStyles = makeStyles((theme) => ({
  column: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    "&:not-child(1)": {
      marginLeft: theme.spacing(7.5),
    },
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))",
    gridDap: theme.spacing(2.5),
  },
  footerLink: {
    color: theme.palette.grey[600],
    fontSize: 15,
    fontWeight: 700,
    textDecoration: "none",
    padding: theme.spacing(0.625, 0),
    "&:hover": {
      color: theme.palette.common.white,
      textDecoration: "underline",
      transition: "200ms ease-in",
    },
  },
}));
