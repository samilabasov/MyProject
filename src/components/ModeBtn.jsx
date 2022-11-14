import { t } from 'i18next'
import React from 'react'
import navdata from '../data/navdata'


const ModeBtn = ({color,setColor}) => {
    const switchColor =()=>{
        setColor(color === 'bg-light' ? 'bg-dark':'bg-light')
    }
  return (
    <div>
        {navdata.navbar.map((fd,i)=>(
          <button onClick={switchColor} className={`btn btn-light ${color === 'bg-light' ? 'bg-dark text-light':'bg-light text-dark'}`}>{t(`${fd.mode}`)}</button>
        ))}
    </div>
  )
}

export default ModeBtn