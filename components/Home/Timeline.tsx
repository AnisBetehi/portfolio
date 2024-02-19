import React from 'react'
import Container from '../common/Container'
import TimelineEntry from './TimelineEntry'

const timelineJobs = [
    {
        date: '14 Mar 2022 - Oct 2022',
        title: 'Full Stack Developer',
        company: 'L&B Tourisme et Voyage',
        companyLink: null,
        jobType: 'Freelance',
        details: [
            'Utilized React, Node.js, and MongoDB to deliver customized solutions tailored to client requirements.',
            'Contributed to the creation of robust software solutions by integrating backend and frontend components effectively.',
            'Collaborated closely with clients to understand project objectives and requirements, delivering high-quality solutions within specified timelines.'
        ]
    },
    {
        date: '04 Nov 2022 - Current',
        title: 'Full Stack Developer',
        company: 'Khotwa Tech',
        companyLink: 'https://khotwa-tech.com',
        jobType: 'Full Time',
        details: [
            'Utilized TypeScript, React, and Next.js to craft dynamic and responsive user interfaces.',
            'Developed admin panels and dashboards incorporating API integrations for efficient data management and visualization.',
            'Collaborated closely with UI/UX designers to translate Figma designs into functional web applications, ensuring seamless user experiences.',
            'Leveraged Node.js and MySQL to develop scalable and efficient server-side applications.',
            'Demonstrated adaptability and problem-solving skills in addressing challenges and optimizing the platform for optimal performance and user experience.'
        ]
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