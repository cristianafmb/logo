import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'

const Image = ({ src, alt,  className, ...rest }) => {

  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            name
            relativePath
            extension
            publicURL
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                    formats: [AUTO, WEBP, JPG]
                    quality: 100
                )
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )
  
  if (!match) return null

  const { node: { childImageSharp, publicURL, extension } = {} } = match

  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} alt={alt} loading="lazy" className={className} {...rest} />
  }

  return <GatsbyImage image={childImageSharp.gatsbyImageData} {...rest} className={className} alt={alt}/>
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default Image
