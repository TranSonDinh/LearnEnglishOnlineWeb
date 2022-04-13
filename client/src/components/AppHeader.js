import React from "react";
import NextHead from "next/head";
import { string, number, oneOfType } from "prop-types";
import { PathConstant, ImageConstant, AppConstant } from "const";

const LOGO_PATH = ImageConstant.Favicon;
const OG_IMAGE = AppConstant.WIDI_MARKET_URL + ImageConstant.WidiMetaImage;
const TWITTER_IMAGE =
  AppConstant.WIDI_MARKET_URL + ImageConstant.WidiMetaTwitterImage;

const AppHead = (props) => {
  const absoluteUrl = AppConstant.WIDI_MARKET_URL + props.url;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={LOGO_PATH} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:title" content={props.title || ""} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.ogImage || OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:site" content={AppConstant.WIDI_TWITTER_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || TWITTER_IMAGE} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="600" />
    </NextHead>
  );
};

AppHead.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  ogType: string,
  fbAppId: oneOfType([string, number]),
};

AppHead.defaultProps = {
  description:
    "A place where you can buy, sell, trade NFT items and start your adventure in WidiLand",
  url: PathConstant.ROOT,
};

export default AppHead;
