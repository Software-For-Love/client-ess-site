import React from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";

import { withPrefix, attribute } from "../utils";
import "../sass/main.scss";
//import Header from "./Header";
import Footer from "./Footer";
// import { I18nProvider, LOCALES } from '../i18n';
// import translate from '../i18n/translate';

export default function Body(props) {
  // const locale = LOCALES.FRENCH;

  return (
    <React.Fragment>
      {/* <I18nProvider locale={locale}> */}
      <Helmet>
        <title>
          {_.get(props, "pageContext.frontmatter.seo.title", null)
            ? _.get(props, "pageContext.frontmatter.seo.title", null)
            : _.get(props, "pageContext.frontmatter.title", null) +
              " - " +
              _.get(props, "pageContext.site.siteMetadata.title", null)}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initialScale=1.0" />
        <meta name="google" content="notranslate" />
        <meta
          name="description"
          content={
            _.get(props, "pageContext.frontmatter.seo.description", null) || ""
          }
        />
        {_.get(props, "pageContext.frontmatter.seo.robots", null) && (
          <meta
            name="robots"
            content={_.join(
              _.get(props, "pageContext.frontmatter.seo.robots", null),
              ","
            )}
          />
        )}
        {_.map(
          _.get(props, "pageContext.frontmatter.seo.extra", null),
          (meta, meta_idx) => {
            let key_name = _.get(meta, "keyName", null) || "name";
            return _.get(meta, "relativeUrl", null) ? (
              _.get(props, "pageContext.site.siteMetadata.domain", null) &&
                (() => {
                  let domain = _.trim(
                    _.get(props, "pageContext.site.siteMetadata.domain", null),
                    "/"
                  );
                  let rel_url = withPrefix(_.get(meta, "value", null));
                  let full_url = domain + rel_url;
                  return (
                    <meta
                      key={meta_idx}
                      {...attribute(key_name, _.get(meta, "name", null))}
                      content={full_url}
                    />
                  );
                })()
            ) : (
              <meta
                key={meta_idx + ".1"}
                {...attribute(key_name, _.get(meta, "name", null))}
                content={_.get(meta, "value", null)}
              />
            );
          }
        )}
        {_.get(props, "pageContext.site.siteMetadata.favicon", null) && (
          <link
            rel="icon"
            href={withPrefix(
              _.get(props, "pageContext.site.siteMetadata.favicon", null)
            )}
          />
        )}
      </Helmet>
      <div id="site-wrap" className="site">
        {/* <Header {...props} /> */}
        <main id="content" className="site-content">
          {props.children}
        </main>
        <Footer {...props} />
      </div>
      {/* </I18nProvider> */}
    </React.Fragment>
  );
}
