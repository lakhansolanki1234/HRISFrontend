
import React, {useEffect, useState,useRef} from 'react'

import { FiSettings } from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import $ from "jquery";




window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
    {
      type: "header",
      subtype: "h1",
      label: "Welcome To HRIS Form Builder"
    },
    {
      type: "paragraph",
      label: "This is a demonstration of Form Builder For HRIS "
    }
  ];


  const FormBuilder = ({ formData }) => {
    const fb = useRef(null);
  
    useEffect(() => {
      $(fb.current).formBuilder({ formData });
    }, [formData]);
  
    return <div id="fb-editor" className='fbedit' ref={fb} />;
  };
const Forms=()=>{
    return(
        <>
         <FormBuilder className="container"/>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
            <TooltipComponent content="Settings" position='top'>
                <button type='button' className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:'orange', borderRadius:'50%'}}> 
                    <FiSettings/>
                </button>
            </TooltipComponent>
            
        </div>
  
        </div>
        </>
    );
}
export default Forms;