import { Metadata } from 'next'
import '../styles/main.scss'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Sidebar from '../components/common/Sidebar'
import SidebarContext from '../context/SidebarContext'

export const metadata: Metadata = {
  title: 'Anis Betehi',
  description: 'Full Stack Developer',
  keywords: [           
  'Web Development',
  'Frontend Development',
  'Backend Development',
  'Programming',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Typescript',
  'React',
  'Next.js',
  'Node.js',
  'ExpressJs',
  'NestJS',
  'MySQL',
  'PostrgreSQL',
  'MongoDB',
  'Responsive Design',
  'Web Design',
  'UI/UX'
  ],
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <SidebarContext>
          <Header />
          {children}
          <Footer />
          <Sidebar />
        </SidebarContext>
      </body>
    </html>
  )
}
