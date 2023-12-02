import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { RiPagesFill } from "react-icons/ri"

export const navLinks = [
    {
      label: 'Works',
      link: '/works'
    },
    {
      label: 'Contact',
      link: '/contact'
    },
]

export const socials = [
    {
      icon: FaGithub,
      title: 'Github',
      link: 'https://github.com/AnisBetehi'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/anisbetehi'
    },
    {
      icon: IoMdMail,
      title: 'Email',
      link: 'mailto:anisbetehidz@gmail.com'
    },
    {
      icon: RiPagesFill,
      title: 'Resume',
      link: 'https://drive.google.com/file/d/1jomu8euOeSrk_RUNZHVeaizRigWRXYL-/view?usp=drive_link'
    },
  ]