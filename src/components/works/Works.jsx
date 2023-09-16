import { useState } from "react";
import "./works.scss"
import angular from '../picture/angular2.webp'; 
import java from '../picture/java1.png';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Tour of Heroes",
      desc: "This is my angular website project built with Angular. It demonstrates my skills and experiences in angular in particular highlights the use of services, Injectables, observables, routes, error handling, remote server and in-memory functionality. Click the image for a live demo and the title to view the source code!",
      img: angular, 
      link: "https://fostoq.github.io/angular_project/",
      link2: "https://github.com/fostoq/angular_project/",
    },
    {
      id: "2",
      title: "Design Patterns",
      desc: "This Java project serves as a comprehensive demonstration of the practical application of design patterns. It showcases the utilization of various design patterns in software architecture (UML), enhancing code reliability, reusability, and overall efficiency. Click the image to view the source code!",
      img:  java,
      link: "https://gitfront.io/r/rkabdoon/nRQcUG4BNcrq/abdoon-design-patterns/",
    }

  ];


  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 1) 
    : setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map (d=>(

        <div className="container">
         
        <div className="item">
            <div className="left">
              <div className="leftContainer">

              <a href={d.link2} target="_blank" rel="noopener noreferrer">
                <h2 className="bold">{d.title}</h2>
              </a>  


                <p>
                  <b>
                  {d.desc}
                  </b>
                </p>

              </div>
            </div>


            <div className="right">

            {/* {imagesList.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
            ))} */}

            <a href={d.link} target="_blank" rel="noopener noreferrer">
              <img src={d.img} alt="" />
            </a>

            </div>
          </div>        
        </div>
        ))}
      </div>
      <img src= {require ('./arrow.png')} className = "arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src= {require ('./arrow.png')} className = "arrow right" alt="" onClick={() => handleClick("right")}/>
    </div>
  )
}
