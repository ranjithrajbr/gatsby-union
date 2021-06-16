import React from "react"
import Layout from "../components/layout"
import BreadCrumb from "../components/breadcrumb"
//import {  Link } from "gatsby"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import pic1 from "../images/covid/3.jpeg"
import pic2 from "../images/covid/4.jpeg"
import pic3 from "../images/covid/5.jpeg"
import pic4 from "../images/covid/two.jpeg"
const Covid = () => {
    return (
        <Layout>
      <BreadCrumb name="covid management" />
      <section className="py-0">
        <div className="relative flex flex-col md:flex-row">
          <div className="flex-1 px-3 py-4 md:px-10 md:pt-10">
            <p className="text-center md:text-justify">
              At the Union, we firmly believe that every human is given equal
              access to resources. Our mission is to help bridge the
              demand-supply gap by collaborating with various organisations to
              provide access to resources to those who need it.
            </p>
            <p className="text-center md:text-justify">
              To cater to the needs of specific medical requirements, the Union
              began its mission to support the battle against Covid19. With over
              700 registered volunteers, we created a helpline to meet the needs
              of the society. The volunteers have attended to over 33000 calls,
              helping more than 8500 Covid positive patients in India. Our
              volunteers and partner organisations also help with the
              distribution of rations in low-income areas.
            </p>
            <p className="text-center md:text-justify">
              Our focus was on creating a resource bank to cater to the growing
              medical needs of society. We collaborate with various
              organisations and individuals to ensure that the society’s
              requirement for hospital beds, oxygen, blood, plasma, and
              vaccinations are met. Our volunteers go the extra mile to ensure
              you get the help you need. We have successfully completed over 150
              plasma transfusions, creating a pathway for the plasma to reach
              the patient from the donor.
            </p>
            <p className="text-center md:text-justify">
              To help with the oxygen crisis in India, the Union created an
              oxygen bank partnering with several medical institutions to source
              oxygen and ensure it reaches the patient on time. We have also
              successfully helped in getting access to oxygen concentrators for
              Covid positive patients who have been advised home isolation.
            </p>
            <p className="text-center md:text-justify">
              The union has helped over 300 people get vaccinated against
              Covid19. We believe in bringing the vaccine closer to you. Our
              helpline is linked with vaccination centres to help you book an
              appointment at the centre closest to you.
            </p>
          </div>
          <div className="sticky top-0 flex-1 h-screen md:px-8">
            <Slider autoplay={3000}>
             <img src={pic1} alt="covid"/>
             <img src={pic2} alt="covid"/>
             <img src={pic3} alt="covid"/>
             <img src={pic4} alt="covid"/>
            </Slider>
          </div>
        </div>
      </section> 
    </Layout>
    )
}
export default Covid