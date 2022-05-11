import React, { useContext } from "react";
import { Container, Dropdown, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { TranslatedLink, TranslateUrlsContext } from "gatsby-plugin-translate-urls";

const Header = () => {
  const { originalPath, changeLanguage } = useI18next();
  const {
    locales, // ["en", "fr"]
    translateUrl, // (url(, locale)) => translatedUrl
    originalUrl,
  } = useContext(TranslateUrlsContext);

  return (
    <header>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          test
        </Link>
      </h1>
      <TranslatedLink to='/test'>Posts</TranslatedLink>
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
