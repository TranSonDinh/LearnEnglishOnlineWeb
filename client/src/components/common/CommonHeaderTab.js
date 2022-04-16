import React, { memo } from "react";
import PropTypes from "prop-types";
import CommonTab from "./CommonTab";
import CommonTabLabel from "./CommonTabLabel";

const CommonHeaderTab = ({ labelProps, ...otherProps }) => {
  return (
    <CommonTab label={<CommonTabLabel {...labelProps} />} {...otherProps} />
  );
};

export default memo(CommonHeaderTab);

CommonHeaderTab.propTypes = {
  labelProps: PropTypes.object,
};
