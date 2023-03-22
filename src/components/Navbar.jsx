import React,{useEffect} from 'react'
import hris from "../data/hris.png"
import mail from "../data/mail.svg"
import userico from "../data/user.svg"
import menunav from "../data/menu.svg"

const Navbar = () => {
  return (
    <div className='flex  justify-between p-2 md:mx-6 relative'>
      <div className=' flex items-center '>
        
        <img src={hris} className="hrislogo"/>
        
      
        <span className='text-sm'>
          Cosmotech Phillppines Inc.
        </span>

        <button className="rounded-full navbutt">GETTING STARTED</button>

      
      <img src={mail} className="messicon"/>

      <img src={userico} className="useicon"/>

      <img src={menunav} className="menunav"/>


      </div>


    </div>
  )
}

export default Navbar