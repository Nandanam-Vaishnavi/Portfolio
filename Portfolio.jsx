import React from 'react'
import NavBar from './NavBar'
import TeamAllocation from "../assets/TeamAllocation.png"
import Tenzies from "../assets/Tenzies.png"
import Meme from "../assets/Meme.png"
 


const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: TeamAllocation,
      githubLink: 'https://github.com/Nandanam-Vaishnavi'
    },
    {
      id: 2,
      src: Tenzies,
      githubLink: 'https://github.com/Nandanam-Vaishnavi'
    },
    {
      id: 3,
      src: Meme,
      githubLink: 'https://github.com/Nandanam-Vaishnavi'
    },
    // {
    //   id: 4,
    //   src: reactSmooth
    // },
    // {
    //   id: 5,
    //   src: installNode
    // },
    // {
    //   id: 6,
    //   src: reactWeather
    // },
  ]
  return (
    <div
    name="portfolio"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <p className="text-3xl font-bold inline border-b-4 border-gray-500">My Work</p>
        <p className="py-6">My projects with react</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          portfolios.map(({id, src, githubLink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                 src={src}
                 alt=""
                 className="rounded-md duration-200 hover:scale-105"/>
                 <div className="flex items-center justify-center">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer">
                   <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                   </a>
                   {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button> */}
         
        
          
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
