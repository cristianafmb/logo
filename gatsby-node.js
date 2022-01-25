const path = require("path")


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/postTemplate.js`)
  const subPageTemplate = path.resolve(`src/templates/subpageTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      allSubpagesJson {
        edges {
          node {
            subpages {
              areas {
                areas {
                  area
                  link
                }
                head
              }
              backgroundfooter
              backgroundfootermobile
              backgroundtop
              backgroundtopmobile
              banner
              bannermobile
              cards {
                btntext
                details
                link
                title
              }
              cardsparttwo {
                details
                btntext
                link
                title
              }
              head
              href
              info {
                all {
                  corpoclinico {
                    alt
                    img
                    name
                    occupation
                  }
                  alt
                  details
                  head
                  headlink
                  img
                  title
                  link
                }
                areas {
                  area
                  link
                }
              }
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {}, // additional data can be passed via context
    })
  })
  result.data.allSubpagesJson.edges.forEach(({ node }) => {
    node.subpages.forEach(({ info }) => {
      info.all.forEach(({ link }) => {
        createPage({
          path: link,
          component: subPageTemplate,
          context: {
            house: `Gryffindor`,
            subpages: node,
            info: info,
          },
          // additional data can be passed via context
        })
      })
    })
  })

}
