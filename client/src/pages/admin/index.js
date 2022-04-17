import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import AdminLayout from "layouts/AdminLayout";
import { useRouter } from "next/router";
import { PathConstant } from "const";

const Admin = (props) => {
  const route = useRouter();

  useEffect(() => {
    route.push(PathConstant.ADMIN_LISTENING_ROOT);
  }, []);

  return <></>;
};

Admin.propTypes = {};

export default memo(Admin);
