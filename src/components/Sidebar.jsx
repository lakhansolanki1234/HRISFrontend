import React , {useState} from 'react'
import {useStateContext} from '../contexts/ContextProvider'
import {Link , NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {BsThreeDots} from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const Sidebar = () => {

  const {activeMenu,setactiveMenu}=useStateContext();
  

  return (
    <div className='pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  pb-10'>
      {activeMenu && (<>
      <div className='flex justify-between items-center ' >
        <ul>

        <li className='navtext'>
        <span >
          HRIS 
        </span>
        
        
        </li>
        <li className='navsubtext'>
          <Link to={"/TimeKeep"}>
          <span >
      TimeKeep
        </span>
          </Link>
      
        </li>
        <li className='navsubtext'>
          <Link to={"/FormBuilder"}><span>
    
   Form Builder
  </span></Link>
        
        </li>
        <li className='navsubtext'>
          <Link to={"/Timelogs"}><span>
    
   Time logs
  </span></Link>
        
        </li>
        <li className='navsubtext'>
          <Link to={"/Formula"}><span>
    
  Formulas
  </span></Link>
        
        </li>
        </ul>
      </div>
      </>)}
    </div>
  )
}

export default Sidebar