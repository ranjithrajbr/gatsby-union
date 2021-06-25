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
          <div className="flex-1 py-3 lg:py-0 md:px-4">
            <StaticImage
              className="w-full"
              src="../images/home/homebanner.jpg"
              alt="image"
            />
          </div>
          <div className="flex-1 md:px-4 md:pt-4 lg:py-0">
            <h1 className="text-2xl font-semibold text-center md:text-left md:text-4xl">
              Who we are
            </h1>
            <p className="text-center md:text-justify lg:text-left">
              The Union was established on 15th April 2018 with the vision to
              work with various stakeholders of the society, to aggregate
              resources to solve social problems from the root, while also
              creating an impact. Having been in the social sector for a while,
              we noticed that people not coming together to help society was a
              huge problem. Our vision is to build a youth community that works
              together for a better tomorrow.
            </p>
            <p className="text-center md:text-justify lg:text-left">
              In simpler terms, we are a social aggregator which thrives on the
              asset of the youth community that we create. The Union aims to
              unite people in society to work together for a better tomorrow. We
              are nothing without YOU!
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 md:px-4">
            <h1 className="text-2xl font-semibold text-center md:text-left md:text-4xl">
              What we do
            </h1>
            <div className="">
              <h2 className="py-1 font-semibold text-center text-md md:text-left md:text-xl">
                Youth Community
              </h2>
              <p className="text-center md:text-left lg:py-1">
                The aspect of the youth community is a primary pillar of The Union. Engineering and aligning the youth towards sustainable and actionable change is one of the core components of our existence.
              </p>
            </div>
            <div className="">
              <h2 className="py-1 font-semibold text-center text-md md:text-left md:text-xl">
                Platform for Change
              </h2>
              <p className="text-center md:text-left lg:py-1">
                The Union functions as a platform for change by bringing together minds. We bring skills, experience and exposure onto one platform and create an opportunity for people to learn. This is carried out with the help of the youth community.
              </p>
            </div>
            <div className="">
              <h2 className="py-1 font-semibold text-center text-md md:text-left md:text-xl">
                Hyper Local Intervention
              </h2>
              <p className="text-center md:text-left lg:py-1">
                Citizens of a city looking after the city is an ideal scenario. At The Union, this change is brought out by a hyper local intervention approach. The youth of the community diffuses problems by aggregating resources and directing towards a particular target audience. Thereby, creating a sustainable impact.</p>
            </div>
          </div>
          <div className="flex-1">
            <StaticImage
              className="w-full"
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
