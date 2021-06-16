import * as React from "react"
import Layout from "../components/layout"
//import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
//import background from "../images/home/banner.jpg"
import pgif from "../images/gifs/cproject.gif"
//import * as styles from "../components/Index.module.css"

const Project = () => {
  return (
    <Layout>
      <section className="bg-u-yellow ">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white uppercase md:text-6xl">
            Our projects
          </h1>
          <img className="w-20 h-20 md:w-44 md:h-44" src={pgif} alt="Otter dancing with a fish" />
        </div>
      </section>
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
          <div className="w-full py-4 md:w-3/4 lg:py-0 lg:flex-1 lg:w-auto md:px-4">
           <Slider className="slider slider-slum">
             <img  src="/slum/5.jpg" alt="slumRehabilitation"/>
             <img src="/slum/2.jpg" alt="slumRehabilitation"/>
             <img src="/slum/1.jpg" alt="slumRehabilitation"/>
             <img src="/slum/6.jpg" alt="slumRehabilitation"/>
             <img src="/slum/6.jpg" alt="slumRehabilitation"/>
           </Slider>
          </div>
        </div>
      </section>
      <section className="container">
      <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
        <div className="w-full py-4 md:w-3/4 lg:py-0 lg:flex-1 lg:w-auto md:px-4">
        <Slider className="slider">
             <img  src="/oxy/3.jpg" alt="oxygenBank"/>
             <img src="/oxy/2.jpg" alt="oxygenBank"/>
             <img src="/oxy/1.jpg" alt="oxygenBank"/>
            
           </Slider>
        </div>
        <div className="lg:flex-1 md:px-4">
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
      </section>
      <section className="container">
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
        <div className="flex-1 py-4 lg:py-0 md:px-4">
          <StaticImage
            className="flex-1 w-52 md:w-full"
            src="../images/covid/one.png"
            alt="image"
          />
        </div>
      </div>
      </section>
    </Layout>
  )
}
export default Project
