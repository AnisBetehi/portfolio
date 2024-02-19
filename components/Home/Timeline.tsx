import React from 'react'
import Container from '../common/Container'
import TimelineEntry from './TimelineEntry'
import { timelineJobs } from '../../data/timeline'

const Timeline = () => {

  return (
    <Container className='section'>
        <section>
            <h2 className='section-title'>My Timeline</h2>
            <div className='w-full flex justify-center'>
                <div className='w-full mt-5 timeline-container'>
                    {timelineJobs.map((job, index) => (
                        <TimelineEntry
                            key={index} 
                            job={job}
                        />
                    ))}
                </div>
            </div>
        </section>
    </Container>
  )
}

export default Timeline