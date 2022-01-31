/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
function Seo({
  description,
  lang,
  meta,
  title,
  titleTemplate,
  img,
  path,
  date,
  article,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const blogJSONLD = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://upcare.pt${path}`,
    },
    headline: `${title}`,
    description: `${description}`,
    image: `https://upcare.pt${img}`,
    author: {
      "@type": "Organization",
      name: "Upcare",
    },
    publisher: {
      "@type": "Organization",
      name: "Upcare",
      logo: {
        "@type": "ImageObject",
        url: "https://upcare.pt/assets/favico.jpg",
      },
    },
    datePublished: `${date}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        titleTemplate ? titleTemplate : `%s | ${site.siteMetadata.title}`
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: img,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {article && (
        <script type="application/ld+json">{JSON.stringify(blogJSONLD)}</script>
      )}
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  article: PropTypes.bool,
}

export default Seo
