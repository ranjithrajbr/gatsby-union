import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { getImage} from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
//import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
//import { getImage } from "gatsby-plugin-image";
//import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            relativeDirectory: { eq: "bg" }
          }
        ) {
          images: edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `
  )
  const { ...images } = placeholderImage.images

  const imgArr = Object.keys(images).map(i => images[i])
  const img = imgArr.map(item => {
    return getImage(item.node)
  })
  const bgImage = img.map(item => {
    return convertToBgImage(item)
  })
  console.log(bgImage)

  const content = [
    {
      title: "slider1",
      image: "static/images/bg/covidm.jpg",
    },
    {
      title: "slider2",
      image: "static/images/bg/hope.jpg",
    },
    {
      title: "slider3",
      image: "static/images/bg/hope.jpg",
    },
  ]

  return (
    <Layout>
      

      <Slider autoplay={3000}>
     
      {bgImage.map((item, index) => {
        console.log(item);
        return <div key={index} className="background-height" style={{background:`url('${item.fluid.src}')`}}>
          
              
          </div>
        })}
   
  
      </Slider>
    </Layout>
  )
}
export default IndexPage
