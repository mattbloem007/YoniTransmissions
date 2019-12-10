// const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            wpgraphql {
            posts {
              edges {
                node {
                  id
                  slug
                  date
                  featuredImage{
                    sourceUrl
                  }
                  categories {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }

            pages {
              edges {
                node {
                  id
                  slug
                }
              }
            }

            }
        }




    `).then(result => {
      console.log(result.data)
        const blogPosts = result.data.wpgraphql.posts.edges;
        const allPages = result.data.wpgraphql.pages.edges;
        console.log(blogPosts)

        blogPosts.forEach(({ node }) => {
          let template = (node.categories.edges[0].node.name).toLowerCase();
          if (template == "about") {
            createPage({
                path: node.slug,
                component: path.resolve("./src/templates/about.js"),
                context: {
                    id: node.id,
                    slug: node.slug,
                    featuredImage: node.featuredImage,
                    id2:  {"eq": "SitePage /" + node.slug},
                    id3: "SitePage /" + node.slug
                }
            });
          }
          else if (template == "projects") {
            createPage({
                path: node.slug,
                component: path.resolve("./src/templates/projects.js"),
                context: {
                    id: node.id,
                    slug: node.slug,
                    featuredImage: node.featuredImage,
                    id2:  {"eq": "SitePage /" + node.slug},
                    id3: "SitePage /" + node.slug
                }
            });
          }

        });

    });
};
//
// exports.onCreateNode = async ({ node, getNode, actions, store, cache, createNodeId, _auth, }) => {
//     const { createNodeField, createNode } = actions;
//     let fileNode
//
//     if (node.internal.type === `SitePage`) {
//      if (node.context != undefined) {
//
//        if (node.context.featuredImage) {
//          console.log("NODE: ", node.context)
//          try {
//            fileNode = await createRemoteFileNode({
//              url: node.context.featuredImage.sourceUrl,
//              parentNodeId: node.id,
//              store,
//              cache,
//              createNode,
//              createNodeId,
//              auth: _auth,
//            })
//          } catch (e) {
//            // Ignore
//          }
//        }
//       }
//     }
//     if (fileNode) {
//       node.localFile___NODE = fileNode.id
//     }
// };
