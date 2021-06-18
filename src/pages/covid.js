import React from "react"
import Layout from "../components/layout"
import cgif from "../images/gifs/covid.gif"
//import {  Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Covid = () => {
  return (
    <Layout>
      <section style={{ backgroundColor: '#00c0c9' }}>
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white uppercase md:text-6xl">
            covid management
          </h1>
          <img className="w-20 h-20 md:w-44 md:h-44" src={cgif} alt="Otter dancing with a fish" />
        </div>
      </section>
      <section className="container">
        <div className="relative flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="text-center md:text-justify">
              Bengaluru witnessed a huge spike in cases towards mid-April 2021 which resulted in an overwhelmed system that made it difficult for the citizens of Bengaluru to gain access to medical facilities. As a solution to this, The Union intensified its approach to support the city by mobilising the youth by providing it with a platform to aid the city. Some of the activities carried out by The Union are:
            </p>
            <div className="py-2">
              <h2 className="py-1 font-semibold text-center md:text-left md:text-xl">Pool of Volunteers</h2>
              <p className="text-center md:text-justify">
                The Union put out a call for youth volunteers on the 22nd of April 2021. The Union saw a response from 50 volunteers on day one. With consistent efforts, this number grew to over 1,000 registered volunteers with The Union. On average, The Union has over 650 active volunteers.
              </p>
            </div>
            <div className="py-2">
              <h2 className="py-1 font-semibold text-center md:text-left md:text-xl">
                Oxygen Support to Hospitals
              </h2>
              <p className="text-center md:text-justify">
                Our teams have intercepted SOS calls from hospitals that required an immediate supply of oxygen cylinders. We supported them with oxygen cylinders with the help of other social groups and authorities. Shreyas Hospital, Tulip Hospital, Medimax and Safa Hospital were some of the hospitals we supported during their time of need with 60+ cylinders. The Union along with <b>#OneBreathAtATime</b> mobilised 15 jumbo cylinders that were distributed between New Wave Nursing home and a medical home on Bannerghatta Road.
              </p>
            </div>
            <div className="py-2">
              <h2 className="py-1 font-semibold text-center md:text-left md:text-xl">
                Hope Helpline
              </h2>
              <p className="text-center md:text-justify">
                Upon gathering a pool of volunteers, teams were formed to support the city primarily in finding beds for patients in need along with logistical patient management support. Functional teams were linked to a <b>24x7 Helpline - 080-47186868</b>. The helpline launched on the 30th of April 2021 and has seen 35,000+ calls. The helpline has 180+ members in the calling team and 250+ members managing the backend operations. With this helpline, we have been successful in supporting 9,500+ patients with 1,500+ beds being booked.
              </p>
            </div>
            <div className="py-2">
              <h2 className="py-1 font-semibold text-center md:text-left md:text-xl">
                Ration Distribution
              </h2>
              <p className="text-center md:text-justify">
                As a part of our efforts to support the city, our on-ground teams distributed ration kits, food packets and fruit packets to frontline workers, migrant workers and the urban poor community. The Union was able to aid and distribute ration kits to over 2,500 individuals to various slums, hospitals, police stations, Dunzo/Swiggy/Zomato delivery executives, sex workers and the old age home of “Little Sisters of the Poor”.
              </p>
            </div>
            <div className="py-2">
              <h2 className="py-1 font-semibold text-center md:text-left md:text-xl">
                Hope Oxygen Bank
              </h2>
              <p className="text-center md:text-justify">
                Upon recognition of the oxygen issue in the city, our teams worked for over 3 weeks to liaise with various social organizations to gain access to oxygen concentrators. The Union partnered with ‘Oxygen for India’ and ‘Who is Hussain Foundation’ to secure an inventory of 151 concentrators with which the <b>Hope Oxygen Bank</b> was set up. The operations of this facility are managed by The Union with the support of ‘Laureate’, ‘Sahayya’ and ‘Open App’. This concept is a pilot that we have initiated. This allows all inventory to be pooled together and dispatched from a single location. The oxygen bank was launched on the 22nd of May 2021 and has so far catered to over 40 patients.
              </p>
            </div>
            <div className="py-2">
              <h2 className="py-1 font-semibold text-center md:text-left md:text-xl">
                Mass Vaccination Camps
              </h2>
              <p className="text-center md:text-justify">
                The city for a very long time was facing a dearth of vaccine doses. The availability of the doses to communities was a huge challenge. Looking at this scenario, The Union partnered with leading hospitals in the city to conduct mass vaccination camps for group sizes of 100-250 people. This is a resumption of the mass vaccination camps conducted in the first week of April 2021. Our helpline teams, on-ground teams and back-end teams work to support these camps. On the 4th of June 2021, we conducted our first mass vaccination camp for 110 beneficiaries. Currently, we have a requirement of over 2,000 doses for other smaller groups which will be undertaken in the coming days.
              </p>
            </div>
          </div>
          <div className="flex-1 md:px-8">
            <div className="grid grid-cols-2">
              <div>
                <StaticImage src="../images/covid/1.png" alt="covid" />
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
                <StaticImage src="../images/covid/2.png" alt="covid" />
              </div>
              <div>
                <StaticImage src="../images/covid/3.png" alt="covid" />
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
                <StaticImage src="../images/covid/4.png" alt="covid" />
              </div>
              <div>
                <StaticImage src="../images/covid/5.png" alt="covid" />
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
                <StaticImage src="../images/covid/6.png" alt="covid" />
              </div>
              <div>
                <StaticImage src="../images/covid/7.png" alt="covid" />
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
                <StaticImage src="../images/covid/10.png" alt="covid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Covid