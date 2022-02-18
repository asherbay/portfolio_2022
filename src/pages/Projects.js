import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Project from '../components/Project'
import droneFlowerPic from '../images/droneflowerpic.png'
import vocalPic from '../images/vocalpic.png'
const Projects = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "30px"}}>
            <Header y={80}>PROJECTS</Header>
            <Project y={-15} pic={droneFlowerPic} name="Drone Flower" techTags={['React', 'P5.js', 'Tone.js']} url="https://620eb5ac1a8ae50008c9cdde--thirsty-babbage-5c55cb.netlify.app/">
                An interactive audiovisual experience machine. Watch and listen as the shapes and sounds evolve endlessly.
            </Project>

            <Project y={-15} pic={vocalPic} name="Vocal" url="https://vocaljournal.herokuapp.com/" techTags={['React', 'Ruby+Rails', 'MUI']}>
                A full stack audio journal app featuring user authentication, usage analytics, and cloud data storage/retrieval.
            </Project>
                
            
        </section>
    )
}
export default Projects