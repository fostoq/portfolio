import "./intro.scss"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from "react";



export default function Intro() {


  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: [" Front-End Programmer", " Developer", " Designer"] })
    console.log(textRef);
  }, [])


  return (
    <div className="intro" id="intro">
      <div className="left">
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Reem Abdoon</h1>
          <h3>Aspiring<span ref={textRef}></span></h3>
        </div>
      </div>
      <div className = "itemContainer">
            <a href="#portfolio"><KeyboardArrowDown className="icon"/></a>
            </div>
    </div>
  )
}
