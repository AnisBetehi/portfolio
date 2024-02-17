import React from 'react'
import Container from '../common/Container'
import { techStack } from '../../data/techStack'

const Tech = () => {

  return (
    <Container className='section'>
        <section>
            <h2 className='section-title'>Tech</h2>

            <div className='flex justify-center gap-6 flex-wrap mt-5 md:justify-start'>
                {techStack.map((tech, index) => (
                    <div 
                        key={index}
                        className='bg-zinc-700 hover:bg-zinc-800 duration-100 cursor-pointer text-white p-10 rounded-lg flex flex-col items-center gap-3 w-[45%] sm:w-[30%]'
                    >
                        <tech.icon className='text-4xl'/>
                        <span className='text-md'>{tech.name}</span>
                    </div>
                ))}
            </div>

        </section>
    </Container>
  )
}

export default Tech