import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { StaticImage, getImage } from "gatsby-plugin-image"
import Join from "../components/join"

const Covid = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "about/covidm.jpg" }) {
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
                Covid Management
              </h1>
              <p className="lg:text-lg">
              We envision a future where society works together to help each other in times of need


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
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:px-8">
          <p className="">
            At the Union, we firmly believe that every human is given equal
            access to resources. Our mission is to help bridge the demand-supply
            gap by collaborating with various organisations to provide access to
            resources to those who need it.
          </p>
          <p>
            To cater to the needs of specific medical requirements, the Union
            began its mission to support the battle against Covid19. With over
            700 registered volunteers, we created a helpline to meet the needs
            of the society. The volunteers have attended to over 33000 calls,
            helping more than 8500 Covid positive patients in India. Our
            volunteers and partner organisations also help with the distribution
            of rations in low-income areas.
          </p>
          <p>
            Our focus was on creating a resource bank to cater to the growing
            medical needs of society. We collaborate with various organisations
            and individuals to ensure that the society’s requirement for
            hospital beds, oxygen, blood, plasma, and vaccinations are met. Our
            volunteers go the extra mile to ensure you get the help you need. We
            have successfully completed over 150 plasma transfusions, creating a
            pathway for the plasma to reach the patient from the donor.
          </p>
          <p>
            To help with the oxygen crisis in India, the Union created an oxygen
            bank partnering with several medical institutions to source oxygen
            and ensure it reaches the patient on time. We have also successfully
            helped in getting access to oxygen concentrators for Covid positive
            patients who have been advised home isolation.
          </p>
          <p>
            The union has helped over 300 people get vaccinated against Covid19.
            We believe in bringing the vaccine closer to you. Our helpline is
            linked with vaccination centres to help you book an appointment at
            the centre closest to you.
          </p>
        </div>
        <div className="relative flex-1">
        <StaticImage
              className="z-10 covid"
              placeholder="blurred"
              src="../images/about/covid.jpg"
              alt="covid"
            />
          <div style={{width:'300px',height:'300px'}} className="absolute z-0 hidden w-full h-full bg-gray-100 md:block -right-12 top-32">
          </div>
        </div>
      </div>
    </section>
    <Join/>
  </Layout>
)
  }
export default Covid
