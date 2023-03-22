import React, {useEffect, useState,useRef} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {Navbar,Footer,Sidebar,SidebarOff,ThemeSettings} from './components'
import {Home,Kanban,TimeKeep,Editor,ColorMapping,ColorPicker, } from './pages'
import Line from './pages/Charts/Line'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'
import Forms from './components/FormField'
import Timelogs from './pages/Timelogs';
import Formula from './pages/Formulakachoda'




// import $ from "jquery";
// import  { Component, createRef } from "react";



// window.jQuery = $;
// window.$ = $;

// require("jquery-ui-sortable");
// require("formBuilder");

// const formData = [
//     {
//       type: "header",
//       subtype: "h1",
//       label: "Welcome To HRIS Form Builder"
//     },
//     {
//       type: "paragraph",
//       label: "This is a demonstration of Form Builder For HRIS "
//     }
//   ];


//   const FormBuilder = ({ formData }) => {
//     const fb = useRef(null);
  
//     useEffect(() => {
//       $(fb.current).formBuilder({ formData });
//     }, [formData]);
  
//     return <div id="fb-editor" className='fbedit' ref={fb} />;
//   };

const App = () => {
    const {activeMenu}=useStateContext()
  return (
    <div>
        
        <BrowserRouter>
        <Navbar/>
       
        {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white sdbar' >
                <Sidebar/>
            </div>
        ):(
            <div className='sidebar dark:bg-secondary-dark-bg sdclose '>
                
                <SidebarOff/>
            </div>
        )}
        <div className='sidebar fixed dark:bg-secondary-dark-bg sdclose'>
        <SidebarOff/>
        </div>
        {/* <div className={activeMenu?'dark:bg-main-bg bg-main-bg min-h-screen   w-full '
        :'dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full'
        }>
          <div className=' md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>

          </div>

        </div>  */}

        <div>
            <Routes>
                {/*dashboard*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Home/>}/>
                {/* pages */}
                <Route path='/FormBuilder' element={<Forms/>}/>
                <Route path='/TimeKeep' element={<TimeKeep/>}/>
                
                {/* apps */}
                <Route path="/Kanban" element={<Kanban/>}/>
                <Route path="/ColorPicker" element={<Editor/>}/>

                <Route path="/Line" element={<Line/>}/>
                <Route path="/ColorMapping" element={<ColorMapping/>}/>
                <Route path="/Timelogs" element={<Timelogs/>}/>
                <Route path="/formula" element={<Formula/>}/>
                 
            </Routes>
        </div>
    
        </BrowserRouter>
    </div>
    
  )
}

export default App