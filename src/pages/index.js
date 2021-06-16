import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//import img1 from "../images/homeb.jpg"

const IndexPage = () => {
  const content = [
    {
      title: "We are the Union",
      description: "Uniting people from various walks of life to work together for a better future",
      button: 'Know more',
      color:'#008037',
      link: "/about"
    },
    {
      title: "Our Tribe",
      description: "We believe that everyone can make a difference. Each person has a unique contribution to make and together we can do great things!",
      button: 'Meet the team',
      link: "/tribe",
      color:'#FF5757'
    },
    {
      title: "Hope Helpline",
      description: "Are you looking for oxygen beds, oxygen concentrators, blood or vaccination? We promise to help!",
      button: 'Call us',
      color:'#00C2CB',
      link: "/contact"
    },
  ]


  return (
    <Layout>
      <section className="py-0">
        <div className="relative flex flex-col lg:flex-row">
          <div className="flex-1 px-8 lg:px-0 lg:pl-36 xl:pl-40">
            {content.map((item, index) => {
              return (
              <div key={index} className="flex flex-col py-10 lg:py-0 lg:justify-center lg:w-3/5 lg:h-screen">
                <h1 style={{color:item.color}} className="text-xl font-semibold lg:leading-tight md:text-4xl lg:text-6xl">
                  {item.title}
                </h1>
                <p className="lg:text-lg lg:text-left">
                  {item.description}
                </p>
                <button style={{backgroundColor:item.color}} className="p-1 text-sm font-bold text-white uppercase rounded-lg w-36 md:w-1/4 lg:w-3/6 lg:text-lg lg:p-2">
                  <Link to={item.link}>{item.button}</Link>
                </button>
              </div>
              )
            })}
          </div>
          <div className="sticky top-0 flex-1 block w-full h-screen md:flex md:justify-end">
          <StaticImage className="w-full h-screen "  src="../images/homebanner.png" alt="cover" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
