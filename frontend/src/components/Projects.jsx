import React from 'react'
import Cards from './Cards'

const Projects = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 mt-12'>
          <div className='text-center space-y-3'>
                <h3 className='uppercase text-sm font-bold bg-gradient-to-r from-emerald-300 to-cyan-500 text-transparent bg-clip-text inline'>Real-World Results</h3>


                <h2 className='text-5xl font-bold bg-gradient-to-b from-neutral-50 from-40% to-neutral-500 text-transparent bg-clip-text'>
  Featured Projects
</h2>


                <p className='text-neutral-400'>See how I transform concepts into engaging digital experiences.</p>
          </div>
          <Cards/>
    </section>
  )
}

export default Projects