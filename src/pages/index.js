import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { getImage, StaticImage } from "gatsby-plugin-image"
//import background from "../images/home/banner.jpg"
import Join from "../components/join"
//import * as styles from "../components/Index.module.css"

const IndexPage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home/banner.jpg" }) {
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
        <div className="container h-full">
          <div className="flex items-center h-full">
            <div className="">
              <h1 className="text-xl font-semibold md:text-4xl lg:text-6xl">
                We are the Union
              </h1>
              <p className="lg:text-lg">
                Uniting people from various walks of life to work together for a
                better future
              </p>
              <button className="p-1 font-bold border-2 border-black lg:text-lg lg:p-3 hover:border-transparent hover:bg-black hover:text-white">
                <Link to="/contact">Get Involved</Link>
              </button>
            </div>
            <div>{/* Add some image */}</div>
          </div>
        </div>
      </BackgroundImage>
      <section className="container">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 md:px-4">
            <StaticImage
              className="flex-1 w-52 md:w-full"
              src="../images/home/homebanner.jpg"
              alt="image"
            />
          </div>
          <div className="flex-1 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-3xl">
              Who we are
            </h1>
            <p className="text-center md:text-justify lg:text-left">
              The Union was established on 15th April 2018 with the vision to
              work with various stakeholders of the society, to aggregate
              resources to solve social problems from the root, while also
              creating an impact. Having been in the social sector for a while,
              we noticed that people not coming together to help society was a
              huge problem. Our vision is to build a youth community that works
              together for a better tomorrow
            </p>
            <p className="text-center md:text-justify lg:text-left">
              In simpler terms, we are a social aggregator which thrives on the
              asset of the youth community that we create. The union aims to
              unite people in society to work together for a better tomorrow. We
              are nothing without YOU!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
        <div className="flex-1 md:px-4">
            <StaticImage
              className="flex-1 w-52 md:w-full"
              src="../images/home/what.jpg"
              alt="image"
            />
          </div>
          <div className="flex-1 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-3xl">
              What we do
            </h1>
            <p className="text-center lg:text-left md:text-justify">
              We kick-started our journey with a slum rehabilitation program,
              during which our volunteers did a complete need analysis and
              helped implement the best solutions for them. As part of the
              on-going battle against Covid-19, we have set up a dedicated
              helpline to provide help to those in need. Our volunteers go out
              of their way to provide help in any way they can.{" "}
            </p>
          </div>
        </div>
      </section>

      <Join />
    </Layout>
  )
}
export default IndexPage
