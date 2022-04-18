import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import pic from '../images/smile001.png'
import jsPic from '../images/javascript.png'
import htmlPic from '../images/html5.png'
import cssPic from '../images/css3.png'
import reactPic from '../images/react.png'
import rubyPic from '../images/ruby.png'
import railsPic from '../images/rails.png'
import sqlPic from '../images/sql.png'
import gitPic from '../images/git.png'
import herokuPic from '../images/heroku.png'
import figmaPic from '../images/figma.png'
import wpPic from '../images/wordpress.png'
import shopifyPic from '../images/shopify.png'
import postgresPic from '../images/postgresql.png'
import {styles} from '../Styles'
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import LeanLaser from '../audio/VacuumStudy.wav'
import PlayPic from '../images/play.png'
import PausePic from '../images/pause.png'
import playhead from '../images/playhead.png'
import arrow from '../images/triangle.png'
const Home = () => {

    const [playerOpen, setPlayerOpen] = useState(false)
    const playerRef = useRef()
    useEffect(()=>{
        console.log('player: ' + playerOpen)
    }, [playerOpen])


    const stackTags = [
        {name: 'JS', img: jsPic},
        {name: 'HTML', img: htmlPic},
        {name: 'CSS', img: cssPic},
        {name: 'React', img: reactPic},
        {name: 'Ruby', img: rubyPic},
        {name: 'Rails', img: railsPic},
        {name: 'Postgres', img: postgresPic},
    ]
    const toolTags = [
        {name: 'Git', img: gitPic},
        {name: 'Heroku', img: herokuPic},
        {name: 'Figma', img: figmaPic},
        {name: 'WordPress', img: wpPic},
        {name: 'Shopify', img: shopifyPic},
    ]

    const renderTags = (arr) => {
        return (
            arr.map((t, i)=>{
                let initOffset = 0

                return (
                    <TechTag style={{marginLeft: initOffset + "px",}}>
                        <img src={t.img} />
                        {t.name}
                    </TechTag>
                )
            })
        )
    }

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "0px", }}>
            <Body y={5} >
            
            <ProfPic src={pic}/>
                I'm Asher Bay, a full stack web developer in Salt Lake City, Utah. I enjoy figuring out new tools and obsessing over interesting problems.<br/>In 2022 I graduated from DevPoint Labs, a web development bootcamp affiliated with the University of Utah. Since then I've continued to learn and build.
                
                
            </Body>
            <Body >
                <p style={{ marginTop: "0px", marginBottom: "15px", position: "relative"}}>Tech stack:</p>
                
                <section style={{display: "flex", rowGap: "15px", columnGap: "10px", alignItems: "center", alignContent: "space-between", justifyContent: "center", marginBottom: "0px", flexWrap: "wrap", marginRight: "50", marginLeft: "50",}}>
                    {/* React, JavaScript, HTML, CSS, Ruby on Rails, Postgres  */}
                    {renderTags(stackTags)}
                </section>
                <p style={{ marginTop: "45px", marginBottom: "15px", position: "relative"}}>Tools and platforms:</p>
                <section style={{display: "flex", rowGap: "15px", columnGap: "10px", alignItems: "center", alignContent: "space-between", justifyContent: "center", marginBottom: "0px", flexWrap: "wrap", marginRight: "50", marginLeft: "50",}}>
                    
                    {renderTags(toolTags)}
                </section>
            </Body>
            
            <Body style={{overflow: 'hidden'}} ref={playerRef}>

                When I'm not computer nerding I'm often music nerding (on the computer) making stuff like <a onClick={()=>{setPlayerOpen(true)}}>this</a> or this
                <PlayerBox  className="box sb" width={playerRef.current ? playerRef.current.clientWidth : "100%" }>
                    <audio src={LeanLaser} />
                    <CSSTransition in={playerOpen} timeout={{ enter: 500, exit: 500 }} classNames="openPlayer" >
                                <PlayerUI>
                                    <img src={PlayPic}/>
                                    <ProgBar type="range"/>
                                </PlayerUI>
                    </CSSTransition>
                </PlayerBox>
            </Body>
        </section>
    )
}
export default Home
 


const ProfPic = styled.img`
    width: ${styles.imgWidth}px;
    border-radius: 50%;
    float: right;
    margin-left: 10px;

    display: inline;
    &:hover {
        cursor: pointer;
    } 
`

const ProgBar = styled.input`
    -webkit-appearance: none;
    background-color: #474747;
    position: relative;
    height: 8px;
    width: 90%;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin: 0px;
        width: 10px;
        height: 8px;
        border: 0;
        background-color: white;
        cursor: pointer;
    }
`

const ArrowBorder = styled.img`
    margin: 0px;

    overflow: hidden;
    position: relative;
    top: -58px;
    z-index: 2;
    width: 80px;
`

const Bubble = styled.section`
   
    height: 0px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    z-index: -1;
    align-items: center;
    overflow: hidden;
    border-top: 3px solid white;
`
const PlayerUI = styled.section`
    display: flex;
    width: 100%;
    height: 0px;
    align-items: center;
    overflow: hidden;
    border-top: 3px solid white;
    z-index: -1;
`

const PlayButton = styled.span`
    background: black;
`

const PlayerBox = styled.section`
   
   position: relative;
   left: -30px; 
    
   width: 100%;
   
    overflow: hidden;
    .openPlayer-enter {
        height: 0px;
    }
    .openPlayer-enter-active {
        height: 50px;
        transition: height 500ms;
    }
    .openPlayer-exit {
        height: 50px;
    }
    .openPlayer-exit-active {
        height: 0px;
        transition: height 500ms;
    }
    .openPlayer-enter-done {
        height: 50px;
    }


`

const TechTag = styled.button`
    border: 0px solid white;
    font-family:  Bergen;
    color: white;
    font-size: ${styles.fontSizes.tag}pt;
    padding 5px;
    background-color: transparent;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    left: -12px;
    
`