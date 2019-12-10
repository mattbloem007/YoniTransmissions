import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import Img from "gatsby-image";


export default function({ data }) {
  let isImage = false;
  // if (data.file.node.childImageSharp) {
  //   isImage = true;
  // }
    return (
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">{data.wpgraphql.post.title}</h2>
              <div className="text-white-50" dangerouslySetInnerHTML={{
                  __html: data.wpgraphql.post.content
              }} />
            </div>
          </div>
          {/**isImage? <Img className="img-fluid" fluid={this.props.file.node.childImageSharp.fluid}/> : null*/}
        </div>
      </section>
    )
  }

export const query = graphql`
query GET_POSTS($id: ID!, $id2: StringQueryOperatorInput) {

wpgraphql {
post(id: $id) {
  id
  postId
  title
  date
  uri
  excerpt
  content
  featuredImage {
    sourceUrl
    title
  }
}
}

file(parent: {id: $id2}) {
    name
    childImageSharp {
      fluid (maxWidth: 500){
        srcSet
        ...GatsbyImageSharpFluid

      }
    }
  }
}
`;
