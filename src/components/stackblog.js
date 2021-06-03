import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export default function Stackblog() {
  const data = useStaticQuery(
    graphql`
      query {
        blogs: allMarkdownRemark {
          posts: nodes {
            id
            fields {
              slug
            }
            detail: frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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
      }
    `
  )
  const simplfied = data.blogs.posts

  return simplfied.map(post => {
    const image = getImage(post.detail.image)
    return (
      <Link key={post.id}  to={post.fields.slug}>
        <div className="bg-white shadow-md blog-container">
          <div className="flex flex-col">
            <div className="">
              <GatsbyImage image={image} alt="test" />
            </div>
            <div className="px-4 py-2">
              <h1 className="py-1 overflow-hidden font-semibold truncate whitespace-nowrap md:text-xl">
                {post.detail.title}
              </h1>
            </div>
            <div className="flex px-4 ">
              <div>
                <StaticImage
                  className="w-6 h-auto"
                  src="../images/user.png"
                  alt="user"
                />
              </div>
              <div className="flex flex-col px-2">
                <span className="text-xs text-black">Admin</span>
                <span className="text-xs text-black">{post.detail.date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  })
}
