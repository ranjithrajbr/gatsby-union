import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
//import { Link } from "gatsby"
const Contact = () => {
  return(
  <Layout>
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
