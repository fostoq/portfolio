import "./portfolio.scss"

export default function portfolio() {
  return (
    <div className="portfolio" id='portfolio'>

       <div className="p-left">
         <div className="p-card bg"></div>
         <div className="p-card">

           <img src="pictures/ede3ed91-a099-4c1f-8608-c72ded2c0e5d (1).JPG" alt="Reem"/>
         </div>
       </div>

       <div className="p-right">
        <h1 className="p-title"><strong>About me</strong></h1>

          <p className="p-desc">
          I'm a passionately positive, focused, and driven UPEI computer science student. My
          goal is to evolve into a developer who is constantly inspired to learn, grow and perform 
          to the best of my ability.  My strengths encompass multitasking, organizational skills,
          and staying current of the latest technologies and frameworks. If you're interested in 
          exploring my code for personal projects, you're welcome to visit my GitHub account <a href="https://github.com/fostoq" target="_blank" rel="noopener noreferrer">here</a>.
          To delve deeper into my experiences and skills, please take a look at my resume below!


          </p>

          <div className="resume">
            <h3>Check out my resume!</h3>
            <a href="https://fostoq.github.io/resume/" target="_blank" rel="noopener noreferrer"> 
            <img src="https://cdn.pixabay.com/photo/2017/05/09/00/15/resume-2296951_1280.png" alt="" className="p-resume" />
            </a>
          </div>

       </div>
    </div>
  )
}
