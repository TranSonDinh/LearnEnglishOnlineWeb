import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PathConstant } from "const";

const Testing = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(PathConstant.TOEIC_TEST_ROOT);
  }, []);

  return <></>;
};

export default Testing;
