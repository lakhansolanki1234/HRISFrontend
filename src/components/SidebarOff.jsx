import React from 'react'
import {Link , NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {useStateContext} from '../contexts/ContextProvider'
import userpro from "../data/profile.png"
import {BsThreeDots} from 'react-icons/bs'
import { useEffect } from 'react'
import {MdDashboard,MdFolder,MdSupervisedUserCircle,MdEnergySavingsLeaf,MdLockClock,MdWavingHand,MdFileCopy,MdHourglassTop} from "react-icons/md"
const NavButton =({title , customFunc, icon,color,dotColor})=>(
<TooltipComponent content={title} position="BottomCenter">
<button type="button" onClick={customFunc} style={{color}} className="relative text-xl hover:bg-light-gray">
<span style={{background:dotColor}} className="absolute inline-flex  ">
<BsThreeDots size={30} style={{marginTop:"-10px"}}/>

</span>
</button>
</TooltipComponent>
)
const SidebarOff = () => {
    const {activeMenu,setactiveMenu}=useStateContext();
  
 
  return (
    <div className=' h-screen md:overflow-hidden overflow-auto md:hover:overflow-hidden iconside '>
        
    {/* {activeMenu && (<>
    <div className='flex justify-between items-center '>
      <Link to="/" onClick={() => setactiveMenu(false)}  className="items-center ">
     
        <div className='menuicons'>
          <button  type='button' onClick={()=>setactiveMenu((prevactiveMenu)=>!prevactiveMenu)}>
        <BsThreeDots size={40}/>
        </button> 
        </div>
      </Link>
    </div>
    </>)}
     */}


<ul className='sideofful'>
  <li>
      <div className='sidebarofflist iconsoffbar'>
      <NavButton title="menu" customFunc={()=>setactiveMenu((prevactiveMenu)=>!prevactiveMenu)} color="orange" icon={<BsThreeDots/>}/>
      </div>
      </li>
      
      <li>

        <MdDashboard className="iconsoffbar1"/>
      
      </li>

      <li>

      <MdFolder className="iconsoffbar1"/>
      
      </li>

      <li>
      
      <MdSupervisedUserCircle className="iconsoffbar1"/>
      </li>

      <li>
      
      <MdEnergySavingsLeaf className="iconsoffbar1"/>
      </li>

      <li>
      <MdLockClock className='iconsoffbar1'/>
      </li>

      <li>
      <MdWavingHand className="iconsoffbar1"/>
      </li>

      <li>

      <MdFileCopy className="iconsoffbar1"/>

      </li>

      <li>
      <MdHourglassTop className="iconsoffbar1"/>
      </li>


      </ul>

      <div >
        <img src={userpro} className='userpro'/>
      </div>
  </div>
  )
}

export default SidebarOff