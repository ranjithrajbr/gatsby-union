import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import tgif from "../images/gifs/tribe.gif"
import TeamCard from "../components/teamcard"
//import { Link } from "gatsby"

const Tribe = () => {
  return (
    <Layout>
      <section style={{backgroundColor:'#fd5555'}}>
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white uppercase md:text-6xl">
            our tribe
          </h1>
          <img className="w-20 h-20 md:w-44 md:h-44" src={tgif} alt="Otter dancing with a fish" />
        </div>
      </section>
      
      <section className="container md:pb-2">
      <div className="flex flex-col items-center justify-center">
          <div className="flex-1">
            <p className="text-center md:text-2xl">
              We are only as strong as our team! Each person in our tribe has a
              very important role to play & we believe that everyone can make a
              difference contributing to a better future.
            </p>
          </div>
        </div>
        </section>
        <section className="container">
        <div>
          <h1 className="text-xl font-semibold text-center uppercase md:text-4xl">
            Our founders
          </h1>
        </div>
        <div className="flex flex-col py-8 md:flex-row">
          <div className="flex items-center justify-center flex-1 pb-4">
            <StaticImage className="w-3/6 md:w-4/5 lg:w-3/6" src="../images/Tariq.jpg" alt="team" />
          </div>
          <div className="flex-1">
          <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
          Tariq Sheriff
            </h1>
            <p>Tariq Sheriff is the co-founder of The Union. He is true leader in every sense and is a visionary. He has great interpersonal skills and can strike up a conversation on just about anything. His life is like a book and every chapter is so interesting that your curiosity always gets the better of you. He is a companion we all reach out to and is very dependable. Creativity soars through his veins apart from the adamantium pumped in. There is much to learn from Tariq, and we look up to his guidance.</p>
          </div>
        </div>
        <div className="flex flex-col py-8 md:flex-row">
          <div className="flex items-center justify-center flex-1 pb-4 ">
            <StaticImage className="w-3/6 md:w-4/5 lg:w-3/6" src="../images/razi.jpg" alt="team" />
          </div>
          <div className="flex-1">
          <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
           Razi Abbas
            </h1>
            <p>Razi Abbas is the one stop solution for all your crazy, ground-breaking ideas. Driven by the concept of diffusing solutions through communities, Razi is one of the pillars holding The Union leading the way for the team. He has dedicated more than a year towards covid management and continues to relentlessly pursue and promote a proactive approach towards this cause. A friend, a confidante, not the best with movie choices but the best at sharing exciting experiences. He can be found making an SoP for the next big idea.</p>
          </div>
        </div>
        <div className="flex flex-col py-8 md:flex-row">
          <div className="flex items-center justify-center flex-1 pb-4">
            <StaticImage className="w-3/6 md:w-4/5 lg:w-3/6" src="../images/teamd.jpeg" alt="team" />
          </div>
          <div className="flex-1">
          <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
          Yohann John
            </h1>
            <p>Yohann John is known for his frankness, honesty, optimism and open-mindedness. There's no one else like him and his addition to the founding team has helped The Union in approaching and working with newer organisations.</p>
          </div>
        </div>
      </section>
      <section className="container">
          <h1 className="text-xl font-semibold text-center uppercase md:text-4xl">
            Our Core Team
          </h1>
      
       
          <TeamCard/>
        

      </section>
    </Layout>
  )
}

export default Tribe
