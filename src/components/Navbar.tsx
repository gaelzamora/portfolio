import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex bg-[#0a192f] py-4 text-gray-400 px-12 md:px-44 z-50 fixed top-0 w-screen items-center justify-between md:justify-center">
      <div className="flex gap-4 items-center md:hidden">
        <Link to={'jgaelhz@gmail.com'}><FontAwesomeIcon icon={faEnvelope} className='cursor-pointer' /></Link>
        <Link to={'https://www.linkedin.com/in/gael-zamora-8aab432ab/'}><FontAwesomeIcon icon={faLinkedin} className='cursor-pointer' /></Link>
        <Link to={'https://github.com/gaelzamora'}><FontAwesomeIcon icon={faGithub} className='cursor-pointer' /></Link>
      </div>

      <div className='md:flex hidden gap-4 font-bold tracking-widest'>
        <a href='/#home'>Home</a>
        <a href='/#about'>About</a>
        <a href='/#projects'>Projects</a>
      </div>

      <div className="flex-1" />

      <div className='flex gap-4 items-center justify-center'>
        <Link to={'jgaelhz@gmail.com'} className="hidden md:block"><FontAwesomeIcon icon={faEnvelope} className='cursor-pointer' /></Link>
        <Link to={'https://www.linkedin.com/in/gael-zamora-8aab432ab/'} className="hidden md:block"><FontAwesomeIcon icon={faLinkedin} className='cursor-pointer' /></Link>
        <Link to={'https://github.com/gaelzamora'} className="hidden md:block"><FontAwesomeIcon icon={faGithub} className='cursor-pointer' /></Link>
        <a href="/archives/RESUME.pdf" download className='cursor-pointer px-6 border-2 py-2 hover:bg-white hover:text-gray-800 font-semibold'>RESUME</a>
      </div>
    </div>
  )
}

export default Navbar