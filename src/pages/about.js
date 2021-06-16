import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import agif from "../images/gifs/about.gif"
const About = () => {
  return (
    <Layout>
      <section style={{ backgroundColor: '#007e35' }}>
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white uppercase md:text-6xl">
            About us
          </h1>
          <img className="w-20 h-20 md:w-44 md:h-44" src={agif} alt="Otter dancing with a fish" />
        </div>
      </section>
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
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
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
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
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
          <div className="flex-1 md:px-4">
            <StaticImage
              className="flex-1 w-52 md:w-full"
              src="../images/home/what.jpg"
              alt="image"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default About
