import React from 'react'
import Container from '../common/Container'
import { projects } from '../../data/projects'
import { FaGithub } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import Link from 'next/link';

const Projects = () => {

  return (
    <Container className='section'>
        <section>
          <h2 className='section-title'>Projects</h2>
          <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className='bg-zinc-800 p-4 rounded-lg w-full'
                >
                    <div className='flex justify-between items-center'>
                      <span className='inline-block text-xl font-semibold'>{project.name}</span>
                      <div className='flex gap-3'>

                        <Link href={project.repo} target='_blank' title='Repository'>
                          <FaGithub className='text-xl' />
                        </Link>

                        <Link href={project.demo} target='_blank' title='Demo'>
                          <TiArrowForward className='text-xl' />
                        </Link>

                      </div>
                    </div>

                    <p className='mt-3 text-md text-zinc-400 font-light'>
                      {project.name} {project.description}
                    </p>

                    <div className='mt-4 flex gap-4 flex-wrap'>
                      {project.stack.map((Tech, index) => (
                        <Tech.icon 
                          key={index}
                          className='text-2xl text-white cursor-pointer duration-200 hover:scale-[1.25]'
                          title={Tech.tech}
                        />
                      ))}
                    </div>
                </div>
              ))}
          </div>
        </section>
    </Container>
  )
}

export default Projects