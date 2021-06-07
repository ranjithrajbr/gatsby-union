import React from "react"
import Layout from "../components/layout"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import Join from "../components/join"
const Tribe = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about/tribemain.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <BackgroundImage
        tag="div"
        {...bgImage}
        className="w-full bg-cover background-height"
      >
        <div className="overlay">
        <div className="container h-full">
          <div className="flex items-center h-full">
            <div className="">
              <h1 className="text-xl font-semibold md:text-4xl lg:text-6xl">
                Our Tribe
              </h1>
              <p className="lg:text-lg">
              We believe that everyone can make a difference. Each person has a unique contribution to make and together we can do great things!

              </p>
              <button className="p-1 font-bold border-2 border-white lg:text-lg lg:p-3 hover:border-transparent hover:bg-white hover:text-black">
                <Link to="/contact">Get Involved</Link>
              </button>
            </div>
            <div>{/* Add some image */}</div>
          </div>
        </div>
            
        </div>
      </BackgroundImage>
      <section className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex-1">
            <p className="text-center md:text-2xl">
              We are only as strong as our team! Each person in our tribe has a
              very important role to play & we believe that everyone can make a
              difference contributing to a better future.
            </p>
          </div>
          <StaticImage
            className="flex-1 w-16 h-auto md:w-full"
            src="../images/about/tribe.jpg"
            alt="image"
          />
        </div>
      </section>
      <Join />
    </Layout>
  )
}

export default Tribe
