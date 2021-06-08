import * as React from "react"
import Layout from "../components/layout"
//import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//import background from "../images/home/banner.jpg"
import Join from "../components/join"
import BreadCrumb from "../components/breadcrumb"
//import * as styles from "../components/Index.module.css"

const Project = () => {
  return (
    <Layout>
        <BreadCrumb name="Projects"/>
      <section className="container">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
              Slum Rehabilitation Program
            </h1>
            <p className="text-center md:text-justify lg:text-left">
              At the union, we like to make a positive impact on everyone. Our
              team worked together to improve the living standards of the people
              living in a slum in Bangalore. After our analysis of the slum, we
              worked with our partners to create long-lasting solutions to their
              daily basic needs. We also worked extensively with our partners to
              ensure that rations were distributed to people that needed it.
            </p>
          </div>
          <div className="flex-1 md:px-4">
            <StaticImage
              className="flex-1 w-52 md:w-full"
              src="../images/slum/2.jpg"
              alt="image"
            />
          </div>
        </div>
        <div className="py-10 text-center">
          <h1 className="text-xl font-semibold text-center md:text-3xl">
            Covid Management
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 md:px-4">
            <StaticImage
              className="flex-1 w-52 md:w-full"
              src="../images/oxy/1.jpg"
              alt="image"
            />
          </div>
          <div className="flex-1 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
              Hope Oxygen Bank
            </h1>
            <p className="text-center lg:text-left md:text-justify">
              To help India cope with its demand and supply gap of oxygen
              cylinders during the second wave of Covid-19, we created an oxygen
              bank, collaborating with various individuals and organisations to
              cater to the demand for oxygen. We have also successfully helped
              many Covid-19 positive patients in need of oxygen by helping them
              get access to the oxygen concentrators.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
              Hope Helpline
            </h1>
            <p className="text-center md:text-justify lg:text-left">
              The Hope Helpline was started by The Union to help the community
              in its time of need. During the second wave of Covid 19 in India,
              many were left helpless and without access to life-dependent
              medical supplies such as hospital beds and oxygen. With a team of
              700+ volunteers growing steadily, the Hope Helpline has
              successfully helped over 8500 patients many of whom needed
              hospital beds, blood, plasma, oxygen and even vaccinations.
            </p>
          </div>
          <div className="flex-1 md:px-4">
            <StaticImage
              className="flex-1 w-52 md:w-full"
              src="../images/covid/one.png"
              alt="image"
            />
          </div>
        </div>
      </section>

      <Join />
    </Layout>
  )
}
export default Project
