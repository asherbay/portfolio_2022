import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Project from '../components/Project'
import droneFlowerPic from '../images/droneflowerpic.png'
import vocalPic from '../images/vocalpic.png'
import portfolioPic from '../images/portfoliopic.png'
import {styles} from '../Styles'
const Projects = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: styles.contentGap +"px",  position: "relative", }}>
            <Header y={5} >PROJECTS</Header>
            <Project y={-15}  pic={droneFlowerPic} name="Drone Flower" techTags={['React', 'P5.js', 'Tone.js']} url="https://droneflower.app/">
                An interactive audiovisual experience machine. Watch and listen as shapes and sounds evolve endlessly.
            </Project>

            <Project y={-15} pic={vocalPic}  name="Vocal" url="https://vocaljournal.herokuapp.com/" techTags={['React', 'Ruby+Rails', 'MUI']}>
                A full stack audio journal app featuring user authentication, usage analytics, and cloud data storage/retrieval.
            </Project>

            <Project y={-15} pic={portfolioPic}  name="Portfolio" url="https://asherbay.dev/" techTags={['React', 'P5.js']}>
                A custom portfolio website built in React featuring custom animations and responsive design.
            </Project>
                
            
        </section>
    )
}
export default Projects