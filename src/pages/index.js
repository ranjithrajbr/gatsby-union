import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import slide1 from "../images/bg/covidm.jpg"
import slide2 from "../images/bg/hope.jpg"
import slide3 from "../images/bg/tribemain.jpg"

const IndexPage = () => {
  const content = [
    {
      title: "We are the Union",
      description: "Uniting people from various walks of life to work together for a better future",
      button: 'Know more',
      image: slide1,
      link: "/about"
    },
    {
      title: "Our Tribe",
      description: "We believe that everyone can make a difference. Each person has a unique contribution to make and together we can do great things!",
      button: 'Know more',
      image: slide3,
      link: "/tribe"
    },
    {
      title: "Hope Helpline",
      description: "Are you looking for oxygen beds, oxygen concentrators, blood or vaccination? We promise to help!",
      button: 'Call us',
      image: slide2,
      link: "/contact"
    },
    {
      title: "Covid management",
      description: "We envision a future where society works together to help each other in times of need",
      button: 'know more',
      image: slide1,
      link: "/covid"
    },
  ]

  return (
    <Layout>
      <Slider autoplay={3000}>
        {content.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-cover background-height"
              style={{ backgroundImage: `url(${item.image}` }}
            >
              <div className="overlay">
                <div className="container h-full">
                  <div className="flex flex-col items-center justify-center h-full md:items-start">
                   
                      <h1 className="text-xl font-semibold md:text-4xl lg:text-6xl">
                        {item.title}
                      </h1>
                      <p className="text-center lg:text-lg lg:text-left">
                        {item.description}
                      </p>
                      <button className="p-1 font-bold uppercase border-2 border-white lg:text-lg lg:p-3 hover:border-transparent hover:bg-white hover:text-black">
                        <Link to={item.link}>{item.button}</Link>
                      </button>
                   
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </Layout>
  )
}
export default IndexPage
