import React, {useEffect, useState} from 'react';
import "./UIPage.css";
import { GoArrowUpRight } from "react-icons/go";
import CalendarOut from '../Calendar/Calendar';
const UIPage = () => {

  return (
    <section className='panel'>
      <div class="top-row">
        <div className='schedule'>
          <div className='schedule-content'>
            <CalendarOut/>
          </div>
          {/* <div className='schedule-expand-icon'><GoArrowUpRight /></div> */}
        </div>
        <div className='chatbot'>
          Chatbot
        </div>
      </div>
      <div class="middle-row">
        <div className='calander'>
          Time Table
        </div>
        <div className='now'>
          Time and Weather
        </div>
      </div>
      <div class="bottom-row">
        <div className='extraction'>
            Extraction pannel
        </div>
      </div>
    </section>
  )
}

export default UIPage