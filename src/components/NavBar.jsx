import React, {useState} from 'react'
import {TbBallBowling, TbCircleDotted} from 'react-icons/tb'
import styles from '../style'
import icon from '../assets/sonya-icon.png'

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      title: 'about',
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

      <ul className='flex flex-row'>
        {
          menu.map((page, index) => (
            <li key={index} className={`${index == menu.length-1? 'mr-0' : 'mr-6'} cursor-pointer capitalize text-sm font-normal`}>
              {page.title}
            </li>
          ))
        }
      </ul>
      
    </nav>
  )
}

export default NavBar