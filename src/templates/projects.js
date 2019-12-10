import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import Img from "gatsby-image";


export default function({ data }) {
  let isImage = false;
  if (data.file.childImageSharp) {
    isImage = true;
  }
    return (
      <div className="row align-items-center no-gutters mb-4 mb-lg-5">
        <div className="col-xl-8 col-lg-7">
        {isImage? <Img fluid={data.file.childImageSharp.fluid}/> : null}
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>{data.wpgraphql.post.title}</h4>
            <div className="text-black-50 mb-0" dangerouslySetInnerHTML={{
                __html: data.wpgraphql.post.content
            }} />
          </div>
        </div>
      </div>
    )
  }

export const query = graphql`
query GET_POST($id: ID!, $id2: StringQueryOperatorInput) {

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
