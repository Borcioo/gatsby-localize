import React from "react";
import { graphql } from "gatsby";

import { useTranslation } from "gatsby-plugin-react-i18next";

const TestPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("test")}</p>
    </>
  );
};

export default TestPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
