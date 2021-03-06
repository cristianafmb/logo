const path = require('path');



exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page };
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1];
    page.matchPath = `/${langCode}/*`;
    // Recreate the modified page
    deletePage(oldPage);
    createPage(page);
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/postTemplate.js`);
  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`);
  const subPageTemplate = path.resolve(`src/templates/subpageTemplate.js`);

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
      allPagesJson {
        edges {
          node {
            areas {
              areas {
                href
                title
              }
              head
            }
            backgrounds {
              bannermobile
              backgroundfooter
              backgroundfootermobile
              backgroundtop
              backgroundtopmobile
            }
            pages {
              banner
              bannermobile
              head
              headhref
              info {
                simple{
                  title
                  details
                  btntext
                  href
                }
                details {
                  alt
                  corpoclinico {
                    alt
                    img
                    name
                    occupation
                  }
                  details
                  detailsbig
                  head
                  headhref
                  href
                  img
                  title
                }
              }
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {} // additional data can be passed via context
    });
  });

  result.data.allPagesJson.edges.forEach(({ node }) => {
    node.pages.forEach((page) => {
      page.info.details.forEach((subpage) => {
        createPage({
          path: subpage.href,
          component: subPageTemplate,
          context: {
            areas: page.info.simple,
            subpages: subpage,
            backgrounds: node.backgrounds
          }
          // additional data can be passed via context
        });
      });
    });
  });

  result.data.allPagesJson.edges.forEach(({ node }) => {
    node.pages.forEach((pages) => {
      createPage({
        path: pages.headhref,
        component: pageTemplate,
        context: {
          areas: node.areas,
          backgrounds: node.backgrounds,
          page: pages,
          infosimple: pages.info.simple,
          infodetails: pages.info.details
        }
      });
    });
  });
};
