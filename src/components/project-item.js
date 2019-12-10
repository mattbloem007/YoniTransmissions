import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

class ProjectItem extends React.Component {

    render() {
      let isImage = false;
      let ind = this.props.index + 1
      console.log("FILE", this.props.file)
      // if (this.props.file.node.childImageSharp) {
      //   isImage = true;
      // }
      if (ind == 1) {
        return (
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
            {/**isImage? <Img fluid={this.props.file.node.childImageSharp.fluid}/> : null*/}
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>{this.props.data.node.title}</h4>
                <div className="text-black-50 mb-0" dangerouslySetInnerHTML={{
                    __html: this.props.data.node.content
                }} />
              </div>
            </div>
          </div>
        )
      }
      else if (ind == 2){
        return (
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              {/**isImage? <Img fluid={this.props.file.node.childImageSharp.fluid}/> : null*/}
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">{this.props.data.node.title}</h4>
                    <div className="mb-0 text-white-50" dangerouslySetInnerHTML={{
                        __html: this.props.data.node.content
                    }} />
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      else if (ind == 3) {
        return (

                  <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                      {/**isImage? <Img fluid={this.props.file.node.childImageSharp.fluid}/> : null*/}
                    </div>
                    <div className="col-lg-6 order-lg-first">
                      <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                          <div className="project-text w-100 my-auto text-center text-lg-right">
                            <h4 className="text-white">{this.props.data.node.title}</h4>
                            <div className="mb-0 text-white-50" dangerouslySetInnerHTML={{
                                __html: this.props.data.node.content
                            }} />
                            <hr className="d-none d-lg-block mb-0 mr-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        )
      }
      else {
        return (
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
            {/**isImage? <Img fluid={this.props.file.node.childImageSharp.fluid}/> : null*/}
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>{this.props.data.node.title}</h4>
                <div className="text-black-50 mb-0" dangerouslySetInnerHTML={{
                    __html: this.props.data.node.content
                }} />
              </div>
            </div>
          </div>
        )
      }

    }
}

export default function(props) {
    console.log(props.data)
    let items = [];
    let fileIndex;
    if (props.data.wpgraphql.posts.edges != undefined) {
      const data = props.data.wpgraphql.posts.edges;
      data.forEach(function(e, i) {
          if (props.remove && e.node.id === props.remove) return;
            fileIndex = props.data.allFile.edges.find(({node}) => {
              if (node.parent) {
                console.log(node.parent.id)
                if (node.parent.id == "SitePage /" + e.node.slug) {
                  return node
                }
              }
            })
            console.log(fileIndex)
            if (fileIndex) {
              items.push(<ProjectItem key={e.node.id} data={e} file={fileIndex} index={i}/>);
            }

      });
    }
    return <section id="wrapper">{items}</section>;
}
