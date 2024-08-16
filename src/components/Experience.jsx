import React from 'react'
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import python from "../../public/python.webp";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import node from "../../public/node.png";
import reactjs from "../../public/reactjs.png";


function Experience() {

    const cardItems=[
        {
            id:1,
            logo:mongodb,
            name:"mongodb"
        },
        {
            id:2,
            logo:css,
            name:"css"
        },
        {
            id:3,
            logo:html,
            name:"html"
        },
        {
            id:4,
            logo:python,
            name:"python"
        },
        {
            id:5,
            logo:reactjs,
            name:"reactjs"
        },
        {
            id:6,
            logo:node,
            name:"node"
        },
        {
            id:7,
            logo:express,
            name:"express"
        },
        {
            id:8,
            logo:javascript,
            name:"javascript"
        }
    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <span className=''>I've more than 1.5 years of experiance in below technologies.</span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-5'>
            {
                cardItems.map(({id,logo,name})=>(
                    <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[150px] rounded-full ' alt="" />
                        <div>
                            <div className=''>{name}</div>
                            
                        </div>
                        
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
