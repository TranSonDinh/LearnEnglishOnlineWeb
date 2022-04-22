import React, { memo } from "react";
import PropTypes from "prop-types";
import { AppCard, AppContent } from "./common";

const CardItem = ({ data, onClick, ...otherProps }) => {
  return (
    <AppCard imageSrc={data?.imageSrc} {...otherProps}>
      <AppContent
        id={data?.id}
        title={data?.title}
        description={data?.description}
        isFinished={data?.isFinished}
        isSaved={data?.isSaved}
        example={data?.example}
        onClick={onClick}
      />
    </AppCard>
  );
};

CardItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    imageSrc: PropTypes.string,
    isFinished: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    title: PropTypes.string,
    description: PropTypes.string,
    isSaved: PropTypes.bool,
    example: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

CardItem.defaultProps = {
  data: {},
};

export default memo(CardItem);
