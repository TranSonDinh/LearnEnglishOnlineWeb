import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import store from "../redux";
import theme, { createEmotionCache } from "public/material";
import "public/styles/index.scss";
import "../languages";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    //Toggle debug mode for development
    window.isDebug = false;
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  emotionCache: PropTypes.object,
};

export default MyApp;
