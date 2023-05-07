import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Project from '../components/Project'
import droneFlowerPic from '../images/droneflowerpic.png'
import vocalPic from '../images/vocalpic.png'
import portfolioPic from '../images/portfoliopic.png'
import digitPic from '../images/DigitDial.png'
import playerPic from '../images/PopupPlayer.png'
import autoTyperPic from '../images/AutoTyper.png'

import {styles} from '../Styles'
import {isMobile} from 'react-device-detect'

const Projects = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: (isMobile ? "20px" : "30px"),  position: "relative", }}>
            <Header y={5} >PROJECTS</Header>
            <Project y={-15}  pic={droneFlowerPic} name="Drone Flower" techTags={['React', 'P5.js', 'Tone.js']} url="https://droneflower.app/">
                An interactive audiovisual experience machine. Watch and listen as shapes and sounds evolve endlessly.
            </Project>

            <Project y={-15} pic={vocalPic}  name="Vocal" url="https://vocaljournal.herokuapp.com/" techTags={['React', 'Ruby+Rails', 'MUI']}>
                A full stack audio journal app featuring user authentication, usage analytics, and cloud data storage/retrieval.
            </Project>

            <Project y={-15} pic={autoTyperPic}  name="Auto Typer" url="https://codesandbox.io/s/autotyper-929sio" techTags={['React']}>
                A UI component that reveals text one character at a time in rapid succession, as if typing.
            </Project>

            <Project y={-15} pic={digitPic}  name="Digit Scroller" url="https://codesandbox.io/s/digit-dial-q30lc6?file=/" techTags={['React', 'Styled']}>
                A UI tool for dialing in numbers at arbitrary levels of precision.
            </Project>

            <Project y={-15} pic={playerPic}  name="Popup Player" url="https://codesandbox.io/s/popup-player-z6fdok" techTags={['React', 'CSSTransition']}>
               A minimal animated audio player.
            </Project>

            <Project y={-15} pic={portfolioPic}  name="Portfolio" url="https://asherbay.dev/" techTags={['React', 'P5.js']}>
                A custom portfolio website built in React featuring custom animations and responsive design.
            </Project>
                
            
        </section>
    )
}
export default Projects