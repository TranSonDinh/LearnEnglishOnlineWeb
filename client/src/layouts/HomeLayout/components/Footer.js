import React, { memo } from "react";
import { Box, Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppTypography } from "components/common";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        background: ({ palette }) => palette.background.dark,
        pt: 10,
        px: 5,
        pb: 6,
      }}
    >
      <AppTypography variant="h2" align="center" color="common.white" mb={6}>
        EFV chào bạn
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
            About Us
          </AppTypography>
          <FooterLink href="#">Aim</FooterLink>
          <FooterLink href="#">Vision</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink>
        </Box>
        <Box className={classes.column}>
          <AppTypography
            variant="overline"
            fontWeight={700}
            color="common.white"
            mb={5}
            align="center"
          >
            Services
          </AppTypography>
          <FooterLink href="#">Writing</FooterLink>
          <FooterLink href="#">Internships</FooterLink>
          <FooterLink href="#">Coding</FooterLink>
          <FooterLink href="#">Teaching</FooterLink>
        </Box>
        <Box className={classes.column}>
          <AppTypography
            variant="overline"
            fontWeight={700}
            color="common.white"
            mb={5}
            align="center"
          >
            Contact Us
          </AppTypography>
          <FooterLink href="#">Uttar Pradesh</FooterLink>
          <FooterLink href="#">Ahemdabad</FooterLink>
          <FooterLink href="#">Indore</FooterLink>
          <FooterLink href="#">Mumbai</FooterLink>
        </Box>
        <Box className={classes.column}>
          <AppTypography
            variant="overline"
            fontWeight={700}
            color="common.white"
            mb={5}
            align="center"
          >
            Social Media
          </AppTypography>
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>Youtube</span>
            </i>
          </FooterLink>
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
