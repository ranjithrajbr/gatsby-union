import * as React from "react"
import Layout from "../components/layout"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import {Link} from"gatsby"
import pgif from "../images/gifs/cproject.gif"

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
      <section className="container lg:pr-12">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 py-0 md:px-4 md:py-2 lg:py-0">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
            Covid Management
            </h1>
            <p className="text-center md:text-justify lg:text-left">
            To cater to the needs of specific medical requirements, the Union began its mission to support the battle against Covid-19. With over 700 registered volunteers, we created a helpline to meet the needs of the society. The volunteers have attended to over 33,000 calls, helping more than 8,500 Covid-19 positive patients in India. Our volunteers and partner organisations also help with the distribution of rations in low-income areas.
            </p>
            <button className="p-3 text-sm font-bold text-white uppercase rounded-lg bg-u-yellow ">
            <Link to="/covid">Know more</Link>
          </button>
          </div>
          <div className="w-full py-4 lg:py-0 lg:flex-1 lg:w-auto">
            <Slider className="slider slider-covid">
              <img src="/covidm/1.png" alt="covidmanagement" />
              <img src="/covidm/2.png" alt="covidmanagement" />
              <img src="/covidm/3.png" alt="covidmanagement" />
              <img src="/covidm/4.png" alt="covidmanagement" />
              <img src="/covidm/5.png" alt="covidmanagement" />
              <img src="/covidm/6.png" alt="covidmanagement" />
              <img src="/covidm/7.png" alt="covidmanagement" />
            </Slider>
          </div>
        </div>
      </section>
      <section className="container lg:pr-12">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="w-full py-4 lg:py-0 lg:flex-1 lg:w-auto md:px-4">
            <Slider className="slider slider-covid">
              <img src="/clean/1.png" alt="cleanupdrive" />
              <img src="/clean/2.png" alt="cleanupdrive" />
              <img src="/clean/3.png" alt="cleanupdrive" />
              <img src="/clean/4.png" alt="cleanupdrive" />

            </Slider>
          </div>
          <div className="py-0 lg:flex-1 md:py-2 lg:py-0 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
            Clean-Up Drive
              </h1>
            <p className="text-center lg:text-left md:text-justify">
            A group of 60+ volunteers visited marketplaces across the city and conducted a massive plastic cleanup drive. Overall, the team collected plastic weighing over 2 tonnes from this drive. Similar to plastic drives, our teams identified and visited black spots in the city. With the help of the local authorities, we worked towards cleaning up these spots and reviving them by fixing the local garbage cycle with the help of the municipality
            </p>
          </div>
        </div>
      </section>
      <section className="container lg:pr-12">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
            Unnati Skilling Support
            </h1>
            <p className="text-center md:text-justify lg:text-left">
            We collaborated with Unnati Skill Centre to mobilise individuals from vulnerable sections of the society who could be upskilled and placed into stable income sources.
            </p>
          </div>
          <div className="w-full py-4 lg:py-0 lg:flex-1 lg:w-auto">
            <Slider className="slider slider-covid">
              <img src="/skill/1.png" alt="skill" />
              <img src="/skill/2.png" alt="skill" />
              <img src="/skill/3.png" alt="skill" />
              
            </Slider>
          </div>
        </div>
      </section>
      <section className="container lg:pr-12">
      <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="w-full py-4 md:w-3/4 lg:py-0 lg:flex-1 lg:w-auto md:px-4">
            <Slider className="slider slider-slum">
              <img src="/dog/1.png" alt="dogshelter" />
              <img src="/dog/2.png" alt="dogshelter" />
              <img src="/dog/3.png" alt="oxyshelter" />

            </Slider>
          </div>
          <div className="flex-1 py-0 md:py-2 lg:py-0 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
            Dog Shelters              </h1>
            <p className="text-center lg:text-left md:text-justify">
            Our team visited dog shelters to provide them with supplies. The shelters lacked resources to give the dogs a comfortable stay. Our volunteers worked towards supporting the shelters by visiting them and assessing the situation on-ground.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="flex-1 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
            Spot-Fixing
            </h1>
            <p className="text-center md:text-justify lg:text-left">
            Identified over 12 black spots across the city and revived the spots by cleaning up the garbage and painting the walls to prevent it from further littering and defacing.
            </p>
          </div>
          <div className="w-full py-4 md:w-3/4 lg:py-0 lg:flex-1 lg:w-auto md:px-4">
            <Slider className="slider slider-slum">
              <img src="/spot/1.png" alt="spotfixing" />
              <img src="/spot/2.png" alt="spotfixing" />
              <img src="/spot/3.png" alt="spotfixing" />
              <img src="/spot/4.png" alt="spotfixing" />
              <img src="/spot/5.png" alt="spotfixing" />
              <img src="/spot/6.png" alt="spotfixing" />
              <img src="/spot/7.png" alt="spotfixing" />
            </Slider>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex flex-col items-center justify-center md:py-3 lg:flex-row">
          <div className="w-full py-4 md:w-3/4 lg:py-0 lg:flex-1 lg:w-auto md:px-4">
            <Slider className="slider slider-slum">
              <img src="/slum/1.png" alt="slumRehabilitation" />
              <img src="/slum/2.png" alt="slumRehabilitation" />
              <img src="/slum/3.png" alt="slumRehabilitation" />
              <img src="/slum/4.png" alt="slumRehabilitation" />
              <img src="/slum/5.png" alt="slumRehabilitation" />
              <img src="/slum/6.png" alt="slumRehabilitation" />
            </Slider>
          </div>
          <div className="flex-1 py-0 md:py-2 lg:py-0 md:px-4">
            <h1 className="text-xl font-semibold text-center md:text-left md:text-3xl">
              Slum Rehabilitation Program
            </h1>
            <p className="py-1 text-center md:text-justify lg:text-left">
            With over 150 volunteers, The Union surveyed and worked on-ground with the locals of Mannekolala Slum to identify problems and curate solutions. After extensive work for over 3 months, our team was successful in implementing and educating the locals on basic hygiene and health. We catered to them with the following needs:
            </p>
            <ul className="list-disc list-inside">
                <li>Polio drops to over 400 children</li>
                <li>Implementation of 'Litre of Life' and 'Poopie Bag' concepts</li>
                <li>Fogging of the slum</li>
                <li>Awareness programs for the local population</li>
              </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Project
