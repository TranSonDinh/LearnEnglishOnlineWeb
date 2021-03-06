import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppCard, AppContent } from "./common";

const CardItem = ({ data, onClick, ...otherProps }) => {
  return (
    <AppCard imageSrc={data?.imageSrc} {...otherProps}>
      <AppContent
        id={data?._id}
        title={data?.title}
        content={data?.content || data?.spelling}
        isFinished={data?.isFinished}
        isSaved={data?.isSaved}
        example={data?.example}
        audioSrc={data?.audioSrc}
        onClick={onClick}
      />
    </AppCard>
  );
};

CardItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    imageSrc: PropTypes.string,
    isFinished: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    title: PropTypes.string,
    content: PropTypes.string,
    isSaved: PropTypes.bool,
    example: PropTypes.string,
    audioSrc: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

CardItem.defaultProps = {
  data: {},
};

export default memo(CardItem);
