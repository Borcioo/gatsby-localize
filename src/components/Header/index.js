import React, { useContext } from "react";
import { Link } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { TranslatedLink, TranslateUrlsContext } from "gatsby-plugin-translate-urls";

const Header = () => {
  const { originalPath } = useI18next();
  const { locales, translateUrl } = useContext(TranslateUrlsContext);

  return (
    <header>
      <div style={{ display: "flex", gap: "10px" }}>
        <TranslatedLink to='/'>Home</TranslatedLink>
        <TranslatedLink to='/test'>Test</TranslatedLink>
      </div>
      <ul className='languages'>
        {locales.map((lang) => (
          <li key={lang}>
            <Link key={lang} to={translateUrl(originalPath, lang)}>
              {lang}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

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
