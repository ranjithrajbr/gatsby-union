import React from "react"
import Layout from "../components/layout"
import { StaticImage} from "gatsby-plugin-image"
import BreadCrumb from "../components/breadcrumb"
//import { Link } from "gatsby"

import Join from "../components/join"
const Tribe = () => {
  

  return (
    <Layout>
     <BreadCrumb name="our tribe"/>
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
