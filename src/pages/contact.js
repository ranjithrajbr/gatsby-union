import React from "react"
import Layout from "../components/layout"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Contact = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about/hope.jpg" }) {
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
  return(
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
                Hope Helpline
              </h1>
              <p className="lg:text-lg">
              Are you looking for oxygen beds, oxygen concentrators, blood or vaccination? We promise to help!
              </p>
              <button className="p-1 font-bold border-2 border-white lg:text-lg lg:p-3 hover:border-transparent hover:bg-white hover:text-black">
                <Link to="/contact">Call us for assistance</Link>
              </button>
            </div>
            <div>{/* Add some image */}</div>
          </div>
        </div>
            
        </div>
      </BackgroundImage>
    <section className="container">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:px-8">
          <p>
            Let’s beat Covid together! Call our helpline for any assistance. We
            promise to do our best to ensure you get the help you need.
          </p>
          <p>
            You have a role to play! Together we can build a world where
            everyone has access to the resources they need. Join us as a
            volunteer and help us grow our family
          </p>
        </div>
        <div className="flex-1">
          <StaticImage
            className="z-10 covid"
            placeholder="blurred"
            src="../images/about/work.jpg"
            alt="covid"
          />
        </div>
      </div>
    </section>
    <section className="container">
    <div>
        <p className="text-center md:text-2xl">
        Your support saves lives! If you’re looking becoming one of our partners or collaborating with us in any other way then,
        </p>
       
        <a  href="mailto:info@example.com"><h1 className="text-xl font-bold text-center text-gray-300 md:text-4xl">info@example.com</h1></a>
        <a  href="tel:+917777777777"><h1 className="text-xl font-bold text-center text-gray-300 md:text-4xl">+91 7777777777</h1></a>
      </div>
    </section>
  </Layout>
)
  }
export default Contact
