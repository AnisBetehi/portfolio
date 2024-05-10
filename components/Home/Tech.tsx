import React from 'react'
import Container from '../common/Container'
import { techStack } from '../../data/techStack'

const Tech = () => {

  return (
    <Container className='section'>
        <section>
            <h2 className='section-title'>Tech</h2>
            <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 justify-center gap-6'>
                {techStack.map((tech, index) => (
                    <div 
                        key={index}
                        className='w-full bg-zinc-800 text-white p-10 rounded-lg flex flex-col items-center gap-3 text-center'
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