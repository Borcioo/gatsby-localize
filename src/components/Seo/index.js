import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const SEO = (props) => {
  const { seo } = props;
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>{t(seo.title)}</title>
      <meta name='description' content={t(seo.description)} />
      <meta name='keywords' content={t(seo.keywords)} />
      <link rel='canonical' href={t(seo.canonical)} />
      <meta name='robots' content='index, follow' />
      <link rel='alternate' hreflang='x-default' href={t(seo.defaultAlter)} />
      <link rel='alternate' hrefLang='en-GB' href={t(seo.defaultAlterEn)} />
      <link rel='alternate' hrefLang={seo.mainLang} href={t(seo.defaultAlter)} />
    </Helmet>
  );
};

export default SEO;
