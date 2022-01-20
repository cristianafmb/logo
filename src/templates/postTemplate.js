import React, { Component } from 'react'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

class Template extends Component {
  render() {
    const { markdownRemark } = this.props.data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
      <Layout>
        <SEO
          title={frontmatter.title}
          description={frontmatter.details}
          image={frontmatter.image}
          pathname={frontmatter.path}
        />

        <div>
          <div
            className="post-image"
            style={{ backgroundImage: `url(${frontmatter.image})` }}
          ></div>

          <div className="container">
            <h1 className="post-title">{frontmatter.title}</h1>

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <div className="spacer"></div>

            <div
              url="/blog"
              text="voltar"
              reverted
              className="post-button"
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        data
        id
        image
        path
        head
        details
        title
      }
    }
  }
`
