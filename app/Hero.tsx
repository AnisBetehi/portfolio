import React from 'react'
import Container from '../components/common/Container'
import { GoDotFill } from "react-icons/go";
import { socials } from '../data/socials';
import IconButton from '../components/common/IconButton';
import Link from 'next/link';

const Hero = () => {

  return (
    <Container className='section'>
        <main>
            <div            
                className='mt-6 sm:mt-0 flex flex-col lg:flex-row gap-14'
            >
                <div className='lg:mt-20'>
                    <div className='flex items-center gap-1 mb-3'>
                        <GoDotFill 
                            className='text-green-400'
                        />
                        Online.
                    </div>
                    <h1 className='text-3xl sm:text-4xl font-bold font-primary'>Hey, I&apos;m <span>Anis</span></h1>
                    <h2 className='text-[1.6rem] sm:text-4xl font-primary font-black text-gradient mt-1'>FULL STACK DEVELOPER.</h2>

                    <div className='flex gap-4 flex-wrap my-6'>
                        {socials.map((social, index) => (
                            <Link
                                key={index}
                                href={social.link}
                                target='_blank'
                            >
                                <IconButton 
                                    Icon={social.icon}
                                    text={social.title}
                                />
                            </Link>
                        ))}
                    </div>

                    <p className='text-lg text-zinc-400 bg-neutral-950'>
                    Hi, my name is Anis Betehi, an experienced Full Stack Developer from Algeria, with <span className='font-semibold text-zinc-200'>2 years of experience</span> in React, Next, Node.js and SQL. Ready to create innovative web solutions!
                    </p>
                </div>
            </div>
        </main>
    </Container>
  )
}

export default Hero