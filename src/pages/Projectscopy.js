import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Project from '../components/Project'
import droneFlowerPic from '../images/droneflowerpic.png'
import vocalPic from '../images/vocalpic.png'
const Projects = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "30px",  }}>
            <Body y={5} >                I'm Asher Bay, a full stack web developer in Salt Lake City, Utah. I love building systems and solving interesting problems with code.<br/> My current stack is React with Ruby on Rails and a PostgreSQL database. <br/>I graduated from DevPoint Labs in their Winter 2021 cohort. Since then I've enjoyed continuing to learn and build.
</Body>
            
                
            
        </section>
    )
}
export default Projects