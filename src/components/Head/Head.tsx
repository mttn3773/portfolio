import React from "react";
import { Helmet } from "react-helmet";
interface HeadProps {}

export const Head: React.FC<HeadProps> = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Портфолио</title>
    </Helmet>
  );
};
