import React from 'react'
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import python from "../../public/python.webp";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import node from "../../public/node.png";
import reactjs from "../../public/reactjs.png";


function Portfolio() {

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
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline'>featured project</span>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4'>
            {
                cardItems.map(({id,logo,name})=>(
                    <div className='md:h-[300px] md:w-[290px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                        <div>
                            <div className='font-bold text-xl mb-2'>{name}</div>
                            <p className='px-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, neque.</p>
                        </div>
                        <div className='px-6 py-4 space-x-4 justify-around'>
                            <button className='bg-blue-500 hover:bg-blue-700 font-bold text-white px-4 py-2 rounded'>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 font-bold text-white px-4 py-2 rounded'>source code</button>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
