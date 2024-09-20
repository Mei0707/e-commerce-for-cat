import React from 'react'

const title = "Most Popular Tags";

const tagsList = [ { link: "#", text:"CatLife", }, { link: "#", text: "CatPlay", }, 
{ link: "#", text: "HealthyCats", }, { link: "#", text: "CatTreats", }, 
{ link: "#", text: "CatDIY", }, { link: "#", text: "CatCrafts", }, { link: "#", text: "Homemade", }, 
{ link: "#", text: "Playful", }, { link: "#", text: "CatOwners", }, ];

const Tags = () => {
  return (
    <div className='widget widget-tags'>
        <div className='widget-header'>
                <h5 className='title'>{title}</h5>
        </div>
        <ul className='widget-wrapper'>
            {
                tagsList.map((val, i) => (
                    <li key={i}><a href={val.link}>{val.text}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Tags