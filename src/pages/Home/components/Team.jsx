import React from 'react'
import Team_img from "../../../assets/team-img.svg"

export const Team = () => {
  return (
    <div className='team-container bg-slate-800 max-lg:block'>
      <div className='team-content  max-lg:mb-16'>
        <h2 >Our Team
            Meet the passionate individuals behind My Recipe Website :</h2>
            <ul>
              <li>Recipe Curator: <span>Prashant Thapa</span></li>
              <li>Web Designer: <span>Prashant Thapa</span> </li>
              <li>Web Developer: <span>Prashant Thapa</span></li>
              <li>Content Writer: <span>ChatGPT</span> </li>
              <li>Web Management: <span>  Prashant Thapa</span></li>
              <li>Customer Support Specialist: <span> Prashant Thapa </span></li>
            </ul>
      </div>
      <div className='team-img'>
        <img src={Team_img} alt="" />
      </div>
    </div>
  )
}
