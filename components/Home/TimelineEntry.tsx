import Link from 'next/link'
import React from 'react'

type IProps = {
    job: any
}

const TimelineEntry = ({ job, }: IProps) => {

  return (
    <div 
        className='timeline-entry-container cursor-pointer' 
    >
        <div className='timeline-entry bg-zinc-800'>

            <div className='flex flex-col sm:flex-row justify-between'>
                <h1 className='text-lg'>{job.title}</h1>
                <span>{job.date}</span>

            </div>

            <Link href={job.companyLink ?? '#'} target='_blank'>
                <span className='text-gray-400'>@{job.company}</span> • {job.jobType}
            </Link>

            <ul className='leading-7 mt-5 px-4'>
                {job.details.map((description, index) => (
                    <li
                        key={index}
                        className='text-zinc-300 font-extralight text-[.95rem]'
                    >
                        ▹ {description}
                    </li>
                ))}
            </ul>

        </div>
    </div>
  )
}

export default TimelineEntry