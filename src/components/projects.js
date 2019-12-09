import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectItem from "./project-item";

export default function() {
    const query = useStaticQuery(graphql`
      query projectListAndImages{
          wpgraphql {
            posts (where: {categoryName: "Projects"}){
              edges{
                node{
                  content
                  excerpt
                  slug
                  date
                  title
                }
              }
            }
          }

        allFile {
            edges {
              node {
                name
                parent{
                  id
                }
                childImageSharp {
                  fluid (maxWidth: 500){
                    srcSet
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }

      }
    `);

        return (
            <section id="wrapper">
                <ProjectItem data={query} />
            </section>
        );
}
