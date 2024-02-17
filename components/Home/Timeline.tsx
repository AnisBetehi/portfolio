import React from 'react'
import Container from '../common/Container'
import Link from 'next/link'

const timelineJobs = [
    {
        date: '14 Mar 2022 - Oct 2022',
        title: 'Full Stack Developer',
        company: 'L&B Tourisme et Voyage',
        companyLink: null,
        jobType: 'Freelance',
        description: ''
    },
    {
        date: '04 Nov 2022 - Current',
        title: 'Full Stack Developer',
        company: 'KhotwaTech',
        companyLink: 'https://khotwa-tech.com',
        jobType: 'Full Time',
        description: ''
    },
]

const Timeline = () => {

  return (
    <Container className='section'>
        <section>
            <h2 className='section-title'>My Timeline</h2>
            <div className='w-full flex justify-center'>
                <div className='w-full mt-5 timeline-container'>
                    {timelineJobs.map((job, index) => (
                        <div key={index} className='px-5 [&:not(:last-child)]:pb-10'>
                            <span className='text-pink-400'>{job.date}</span>
                            <h1 className='text-lg'>{job.title}</h1>
                            <Link href={job.companyLink ?? '#'} target='_blank'>
                                <span className='text-gray-400'>@{job.company}</span> • {job.jobType}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </Container>
  )
}

export default Timeline