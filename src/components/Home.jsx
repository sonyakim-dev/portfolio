import React, { useState } from 'react';
import styles from '../style';
import projects from '../constants/projects';
import { FaHammer } from 'react-icons/fa'
import { SiCplusplus, SiUnity, SiShopify, SiHtml5, SiReact, SiAdobephotoshop } from 'react-icons/si';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import TargetVR from './TargetVR';
import FormeLove from './FormeLove';

function Home() {
  const [projectPage, setProjectPage] = useState('');

  return (
    <section id='Home' className={`flex flex-col ${styles.paddingY} `}>
      {/* intro */}
      <div name='intro' className={`flex flex-row ${styles.flexStart} justify-between sm:px-16 px-6 mb-20`}>
        <div className='flex-col'>
          <h1 className='font-semibold ss:text-[72px] text-[62px] ss:leading-[100px] leading-[80px] ss:mb-10 mb-5'>
            <div className='flex felx-row items-center'>
              <img src={require('../assets/waving-hand.png')} className='h-[80px]'/>,I'm a
            </div>
            Developer + Designer
          </h1>
          <p className='ss:text-[16px] text-[14px]'>
            I studied Art Craft and worked as a Graphic Designer for 2 years.<br/>
            I'm learning Computer Science to combine my design and development skills.
          </p>
        </div>
        
        <img src={require('../assets/profile.png')} className='hidden md:flex w-[400px] mt-10 right-0'/>
      </div>

      {/* portfolio */}
      <div name='portfolio' className='w-full mx-auto flex flex-col justify-center'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-9 px-12 sm:px-0'>
          {
            projects.map((project, index) => (
              <div
                key={index}
                className='rounded-xl hover:scale-105 duration-300 hover:cursor-pointer'
                onClick={()=> {/*setProjectPage(project.name);*/ project.link != null && window.open(`${project.link}`, '_blank')}}
              >
                <img src={project.image} className='rounded-xl aspect-square object-cover'/>
                <div className='flex flex-row items-center justify-between mx-3 my-3'>
                    <h3 className='text-[23px] font-medium`'>{project.name}</h3>
                  <div className='flex flex-row items-center space-x-1 rounded-xl bg-slate-100 px-3 py-1'>
                    <p className='text-[15px] pr-1'>{project.feature}</p>
                    {project.tool === 'React' && (<SiReact size={20} color='#60D9FA'/>)}
                    {project.tool === 'HTML' && (<SiHtml5 size={20} color='#F25320'/>)}
                    {project.tool === 'C++' && (<SiCplusplus size={20} color='#9C033A'/>)}
                    {project.tool === 'Unity' && (<SiUnity size={20} color='black'/>)}
                    {project.tool === 'Shopify' && (<SiShopify size={20} color='#95BF47'/>)}
                    {project.tool === 'Photoshop' && (<SiAdobephotoshop size={20} color='#2FA3F7'/>)}
                    {project.tool === 'craft' && (<FaHammer size={20} color='black'/>)}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {
        projectPage === 'Target VR' && (<TargetVR/>)
      }
    </section>
  )
}

export default Home