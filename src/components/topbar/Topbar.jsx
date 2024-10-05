import "./topbar.scss"
import Person from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';
import GitHub from '@mui/icons-material/GitHub';


export default function Topbar({menuOpen, setMenuOpen}) {
  return (

    <div className= {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">

            <a href="#intro" className="logo">Portfolio</a>

            <div className = "itemContainer">
            <Person className="icon"/>
            <strong>902.620.8057</strong>
            </div>

            <div className = "itemContainer">
            <Mail className= "icon"/>
            <strong>reemsulum@gmail.com</strong>
            </div>
        </div>

        <div className="right">

        <div className = "itemContainer">
        <a href="https://github.com/fostoq/portfolio" target="_blank" rel="noopener noreferrer">
          <GitHub className="icon" />
        </a>
        </div> 

        <div className = "hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>
  )
}
