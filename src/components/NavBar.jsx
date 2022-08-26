import React, {useState} from 'react'
import {SiLinkedin, SiGithub} from 'react-icons/si'
import styles from '../style'
import icon from '../assets/sonya-icon.png'

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      title: 'LinkedIn',
    },
    {
      title: 'contact',
    },
  ]


  return (
    <nav className='w-full py-3 flex justify-between items-center navbar'>
      <div className='flex flex-row items-center'>
        <a className='text-xl font-medium' href=''>SONYA KIM</a>
        <img src={icon} className='w-[40px] h-[40px] ml-1'/>
      </div>

      {/* <ul className='flex flex-row'>
        {
          menu.map((page, index) => (
            <li key={index} className={`${index == menu.length-1? 'mr-0' : 'mr-6'} cursor-pointer capitalize text-sm font-normal`}>
              {page.title}
            </li>
          ))
        }
      </ul> */}
      <div className='flex flex-row'>
        <a href='https://www.linkedin.com/in/sonya-kim/' className='mr-4'>
          <SiLinkedin size={25} color={'565656'} />
        </a>
        <a href='https://github.com/sonyakim-dev'>
          <SiGithub size={25} color={'565656'}/>
        </a>
      </div>
      
    </nav>
  )
}

export default NavBar