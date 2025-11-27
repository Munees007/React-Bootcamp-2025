import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import navBarStyle from "./NavBar.module.css"
export default function NavBar() {
    const [language,setLanguage] = useLocalStorage({key:"language",init:"tamil"})

  return (
    <div className={navBarStyle.main}>
        <h3>{language == "tamil" ? "திருக்குறள்" : "Thirukural"}</h3>
        <select value={language} onChange={(e)=>{
            setLanguage(e.target.value)
        }}>
            <option value={"tamil"}>தமிழ்</option>
            <option value={"english"}>Eng</option>
        </select>
    </div>
  )
}
