import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import dataJson from "../../static/teamdata.json"




const TeamCard = () => {
    return(
        <div className="grid md:grid-cols-4 md:gap-4">
         {
            dataJson.map((item, index) => {
                return (
                    <div key={index} className="flex flex-col items-center justify-center border shadow-md">
                        <div className="flex-1">
                            <img className="object-cover rounded-full md:w-36 md:h-36 lg:w-40 lg:h-40" src={item.image} alt="team" />
                        </div>
                        <div className="flex-1">
                            <span className="block py-4 font-semibold">{item.name}</span>
                        </div>
                    </div>
                )
            })
        }
        </div>  
    )
    
        
    


}

export default TeamCard