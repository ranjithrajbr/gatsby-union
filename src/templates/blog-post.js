import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const image = getImage(post.frontmatter.image)
  return (
   <Layout>
        <div className="container">
         <GatsbyImage image={image} alt={post.frontmatter.title} /> 
         <hr></hr>
        <div className="py-4">
        <h1 className="font-semibold md:text-2xl">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    </div>
   </Layout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
      }
    }
  }
`