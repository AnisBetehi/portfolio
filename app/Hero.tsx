import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'

const Hero = () => {

  return (
    <Container>
        <main className='flex justify-center'>
                <motion.div            
                    className='mt-20 md:mt-28 flex flex-col lg:flex-row items-center gap-3'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className='text-center lg:text-left'>
                        <h1 className='text-3xl sm:text-5xl font-black'>HELLO, I&apos;M <span className='text-amber-700'>ANIS BETEHI</span></h1>
                        <h3 className='text-md sm:text-lg mt-2 font-medium'>A FULL STACK DEVELOPER BASED IN ALGERIA</h3>
                    </div>

                    <div className='w-full aspect-square md:w-[600px] md:h-[450px] relative'>
                        <Image 
                            src='/assets/images/illustration.jpg'
                            alt='woman'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>

                </motion.div>
        </main>
    </Container>
  )
}

export default Hero