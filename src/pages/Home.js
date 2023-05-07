import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import pic from '../images/smile001.png'
import pic2 from '../images/face.png'
import aiPic from '../images/ai_me.png'

import jiraPic from '../images/jira.png'
import npmPic from '../images/npm.png'


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
import VacuumStudy from '../audio/VacuumStudy.wav'
import AIIM from '../audio/AIIM.wav'
import PlayPic from '../images/play.svg'
import PausePic from '../images/pause.svg'
import VolPic from '../images/volume.svg'
import playhead from '../images/playhead.png'
import arrow from '../images/triangle.png'
import {isMobile} from 'react-device-detect'

import MUU from '../images/faceAngles/0 2.png'
import MU from '../images/faceAngles/0 1.png'
import MM from '../images/faceAngles/0 0.png'
import MD from '../images/faceAngles/0 -1.png'
import MDD from '../images/faceAngles/0 -2.png'

import RUU from '../images/faceAngles/1 2.png'
import RU from '../images/faceAngles/1 1.png'
import RM from '../images/faceAngles/1 0.png'
import RD from '../images/faceAngles/1 -1.png'
import RDD from '../images/faceAngles/1 -2.png'

import RRUU from '../images/faceAngles/2 2.png'
import RRU from '../images/faceAngles/2 1.png'
import RRM from '../images/faceAngles/2 0.png'
import RRD from '../images/faceAngles/2 -1.png'
import RRDD from '../images/faceAngles/2 -2.png'


import LUU from '../images/faceAngles/-1 2.png'
import LU from '../images/faceAngles/-1 1.png'
import LM from '../images/faceAngles/-1 0.png'
import LD from '../images/faceAngles/-1 -1.png'
import LDD from '../images/faceAngles/-1 -2.png'

import LLUU from '../images/faceAngles/-2 2.png'
import LLU from '../images/faceAngles/-2 1.png'
import LLM from '../images/faceAngles/-2 0.png'
import LLD from '../images/faceAngles/-2 -1.png'
import LLDD from '../images/faceAngles/-2 -2.png'

const faceAngles = [
    [LLUU, LLU, LLM, LLD, LLDD],
    [LUU, LU, LM, LD, LDD],
    [MUU, MU, MM, MD, MDD],
    [RUU, RU, RM, RD, RDD],
    [RRUU, RRU, RRM, RRD, RRDD],
]

const Home = () => {

    const [playerOpen, setPlayerOpen] = useState(false)
    const [selAudio, setSelAudio] = useState(null)
    const [selTitle, setSelTitle] = useState(null)
    const [facePic, setFacePic] = useState(MM)

    const [playing, setPlaying] = useState(false)
    const [progInt, setProgInt] = useState(null)
    const [progress, setProgress] = useState(0)
    const [mousePos, setMousePos] = useState({})

    const audio = useRef()

    useEffect(() => {

    
        window.addEventListener('mousemove', LookAtCursor);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            LookAtCursor
          );
        };
      }, []);

    useEffect(()=>{
        console.log('player: ' + playerOpen)
    }, [playerOpen])

    useEffect(()=>{
        if(playing && audio.current){
            audio.current.play()
            setProgInt(setInterval(() => {
                let val = audio.current.currentTime / audio.current.duration
                if(audio.current.ended){
                    setPlaying(false)
                } else {
                    setProgress(val * 100)
                }
                
            }, 250))
        } else if(!playing && audio.current){
            audio.current.pause()
            clearInterval(progInt)
        }
    }, [playing])

    useEffect(()=>{
        let title = (selAudio===VacuumStudy ? "Vacuum Study" : "Afterimage in Motion" )
        setSelTitle(title)
        if(playerOpen){
            if(!playing){
                setPlaying(true)
            } else {
                audio.current.play()
            }
        }
    }, [selAudio])


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
        {name: 'Figma', img: figmaPic},
        {name: 'Jira', img: jiraPic},
        {name: 'Heroku', img: herokuPic},
        {name: 'WordPress', img: wpPic},
        {name: 'Shopify', img: shopifyPic},
    ]

    const formatDuration = (secs) => {
        var date = new Date(0);
        date.setSeconds(parseInt(secs)); 
        return date.toString().substring(19, 24);
    }

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

    const handlePlayerOpen = (audio) => {
        if(playing && audio.current){
            audio.current.pause()
        }
        if(!playerOpen){
            setPlayerOpen(true)
        }
        setSelAudio(audio)
    }

    const togglePlayback = () => {
        if(playing && audio.current){
            setPlaying(false)
        } else if(!playing && audio.current){
            setPlaying(true)
        }
    }

    const LookAtCursor = (e) =>{
        let mouseX = e.clientX
        let mouseY = e.clientY
        let width = window.innerWidth
        let height = window.innerHeight
        let relX = mouseX / width
        let relY = mouseY / height

        let indexX
        for(let i=0; i<5; i++){
            if(relX >= (i/5)){
                indexX = i
            }
        }
        let indexY
        for(let i=0; i<5; i++){
            if(relY >= (i/2/5)){
                indexY = i
            }
        }
        // console.log('x:', indexX, 'y:', indexY)
        setFacePic(faceAngles[indexX][indexY])


    }

    

    return (
        <Container >
            <Body y={5} >
            
            <ProfPic src={aiPic} />
                Hello! I'm Asher Bay, a full stack <TextRoller keyword={"software"} rate={30}> engineer in Salt Lake City, Utah.</TextRoller> I build websites and apps, specializing in React and Ruby on Rails. I love obsessing over interesting projects and figuring out new tools. In 2019 I discovered my passion for programming while studying music composition in college.<br/>In 2022 I graduated from DevPoint Labs, the University of Utah's full stack bootcamp. After that I began my current role as a software engineer intern with Element United developing a crypto-based browser game. 
                
            </Body>
            <Body >
                <p style={{ marginTop: "0px", marginBottom: "15px", position: "relative"}}>Tech stack:</p>
                
                <section style={{display: "flex", rowGap: (isMobile ? "5px" : "15px"), columnGap: (isMobile ? "1px" : "10px"), alignItems: "center", alignContent: "space-between", justifyContent: "center", marginBottom: "0px", flexWrap: "wrap", marginRight: "50", marginLeft: "50",}}>
                    {/* React, JavaScript, HTML, CSS, Ruby on Rails, Postgres  */}
                    {renderTags(stackTags)}
                </section>
                <p style={{ marginTop: isMobile ? "15px" : "45px", marginBottom: "15px", position: "relative"}}>Other tools and platforms:</p>
                <section style={{display: "flex", rowGap: (isMobile ? "5px" : "15px"), columnGap: (isMobile ? "1px" : "10px"), alignItems: "center", alignContent: "space-between", justifyContent: "center", marginBottom: "0px", flexWrap: "wrap", marginRight: (isMobile ? "25px" : "50"), marginLeft: (isMobile ? "25px" : "50"),}}>
                    
                    {renderTags(toolTags)}
                </section>
            </Body>

            <Body style={{overflow: 'hidden'}} >

                When I'm not computer nerding I'm often music nerding (on the computer) making stuff like <AudioLink sel={selAudio===VacuumStudy && playerOpen} onClick={()=>{handlePlayerOpen(VacuumStudy)}} >this</AudioLink> or <AudioLink sel={selAudio===AIIM && playerOpen} onClick={()=>{handlePlayerOpen(AIIM)}}>this</AudioLink>.
                
                    
            </Body>
            <CSSTransition in={playerOpen} timeout={{ enter: 250, exit: 250 }} classNames="openPlayer" onEntered={()=>{setPlaying(true)}} > 
                <Player>
                    <audio src={selAudio} ref={audio}/>
                        <PlayerUI>
                            <PlayButton src={playing ? PausePic : PlayPic} onClick={togglePlayback}/>
                            <BarUI>
                                <Info>
                                    <span>{selTitle}</span>
                                    <span>{audio.current ? formatDuration(audio.current.duration) : formatDuration(0)}</span>
                                </Info>
                                <ProgBar type="range" value={progress} onChange={
                                (e)=>{
                                    audio.current.currentTime = audio.current.duration * (e.target.value / 100.0)
                                    setProgress(e.target.value)
                                }} />
                            </BarUI>
                            <VolUI audio={audio.current ? audio.current : null}/>
                        </PlayerUI>
                </Player>
            </CSSTransition>

        </Container>
    )
}
export default Home
 
export const VolUI = (props) => {
    const [open, setOpen] = useState(false)
    const [val, setVal] = useState(0)
    const volRef = useRef()

    const checkIfClickedOutside = (e) => {
      if (volRef.current && !volRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    useEffect(()=>{
        if(open){
            window.addEventListener("mousedown", checkIfClickedOutside)
        } else {
            window.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])

    useEffect(()=>{
        if(props.audio!==null){
            props.audio.volume = (100-val)/100.0
        }
    }, [val])

    return (
        <VolBox ref={volRef}>
            <CSSTransition in={!open} timeout={{ enter: 250, exit: 250 }} classNames="openVolPic" > 
                <VolButton src={VolPic} onClick={()=>{setOpen(true)}} />
            </CSSTransition>
             <CSSTransition in={open} timeout={{ enter: 250, exit: 250 }} classNames="openVol" > 
                <VolStrip type="range" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
            </CSSTransition>
        </VolBox>
    )
}

//this could even be its own little UI project in portfolio
export const TextRoller = (props) => {
    const fullText = props.children.split('')
    const [rolling, setRolling] = useState(false)
    const [done, setDone] = useState(false)
    const [rollInt, setRollInt] = useState(null)

    const textElement = useRef()

    let currentText = ""
    let count = 0
   
    const roll = () => {
        if(count<fullText.length){
            currentText += fullText[count]
            textElement.current.textContent = currentText
            count++
        } else {
            clearInterval(rollInt)
            setDone(true)
        }
    } 


    const start = () => {
        console.log('currentText', currentText)
        if(currentText.length<1 && !done){
            // console.log('start')
            setRollInt(setInterval(roll, props.rate ? props.rate : 20))
        } 
        
    }

    return (
        <span>
            <span onClick={start} style={{cursor:'pointer'}}>
                {props.keyword}
            </span>
            <span ref={textElement}>
            </span>
        </span>
    )
  }

//                                <CSSTransition in={volOpen} timeout={{ enter: 250, exit: 250 }} classNames="openVol" > 

//value={audio.current!==null ? audio.current.duration / (audio.current.currentTime + 0.5) : 0}
const Container = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
    
    &>.openPlayer-enter {
        overflow: hidden;
        display: block;
        height: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
    }
    &>.openPlayer-enter-active {
        height: ${isMobile ? 35 : 50}px;
        padding-top: ${styles.contentGap/2 }px;
        padding-bottom: ${styles.contentGap/2}px;
        transition: height 250ms, padding-top 250ms, padding-bottom 250ms;
    }
    &>.openPlayer-exit {
        display: block;
        height: ${isMobile ? 35 : 50}px;
        padding-top: ${styles.contentGap/2}px;
        padding-bottom: ${styles.contentGap/2}px;
    }
    &>.openPlayer-exit-active {
        height: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
        transition: height 250ms, padding-top 250ms, padding-bottom 250ms;
    }
    &>.openPlayer-enter-done {
        overflow: visible;
        display: block;
        height: ${isMobile ? 35 : 50}px;
        padding-top: ${styles.contentGap/2}px;
        padding-bottom: ${styles.contentGap/2}px;
    }

    

`


const VolBox = styled.span`
    margin: 0px;
    padding: 0px;
    max-width: 28px;
    display: contents;
    overflow: hidden;

    
    &>.openVol-enter {
       display: inline;
       width: 0px;
    }
    &>.openVol-enter-active {
        display: inline;
        width: ${isMobile ? 35 : 50}px;
        transition: width 250ms;
    }
    &>.openVol-enter-done {
        display: inline;
        width: ${isMobile ? 35 : 50}px;
    }

    &>.openVol-exit {
        display: inline;
        opacity: 1.0;
        width: ${isMobile ? 35 : 50}px;
    }
    &>.openVol-exit-active {
        display: inline;
        width: 0px;
        opacity: 0.0;

        transition: width 250ms, opacity 200ms;
    }
    &>.openVol-exit-done {
        display: none;
        width: 0px;
        transition: width 250ms;
    }

    


    &>.openVolPic-enter {
       display: inline;
       width: ${isMobile ? 20 : 35}px;
       margin-right: 0px;
    }
    &>.openVolPic-enter-active {
        display: inline;
        width: ${isMobile ? 30 : 42}px;
        margin-right: ${isMobile ? 8 : 20}px;
        transition: width 250ms,  margin-right 250ms;
    }
    &>.openVolPic-enter-done {
        display: inline;
        width: ${isMobile ? 30 : 42}px;
        margin-right: ${isMobile ? 8 : 20}px;
    }
 
    &>.openVolPic-exit {
        width:  ${isMobile ? 30 : 42}px;
        margin-right: ${isMobile ? 8 : 20}px;
    }
    &>.openVolPic-exit-active {
        width:  ${isMobile ? 20 : 35}px;
        margin-right: 0px;
        transition: width 250ms, margin-right 250ms;
    }
    &>.openVolPic-exit-done {
        width:  ${isMobile ? 20 : 35}px;
        margin-right: 0px;
    }
     
`

const VolButton = styled.img`
    position: relative;
    ${isMobile && 'width: 30px;'}
    margin-right: ${isMobile ? 8 : 20}px;
    margin-left: ${isMobile ? 3 : 10}px;
    top: 5px;
`

const VolStrip = styled.input`
    -webkit-appearance: none;
    
    display: none;
    position: relative;
    margin: 0px;
    transform: rotate(90deg);
    top: 3px;
    left: -5px;
    
    background-color: #474747;
    position: relative;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin: 0px;
        width: 10px;
        height: 8px;
        border: 0;
        background: white;
        cursor: pointer;
    }
`

const BarUI = styled.span`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2px;
    align-self: center;
    position: relative;
    left: 0px;
    margin-right: 10px;
    margin-left: 10px;
`

const Info = styled.section`
    font-size: ${isMobile ? 8 : 14}pt;

    display: flex;
    justify-content: space-between;
    width: 100%;
  
`

const ProfPic = styled.img`
    width: ${styles.imgWidth*1.5}px;
    border-radius: 50%;
    float: right;
    margin-left: 10px;

    display: inline;
    &:hover {
        cursor: pointer;
    } 
`



const AudioLink = styled.a`
    color: #586ed5;
    &:hover{
        cursor: pointer;
    }
    text-decoration: ${props => props.sel ? 'underline' : 'none'};
    text-underline-offset: 2px;
`

const ProgBar = styled.input`
    -webkit-appearance: none;
    background-color: #474747;
    position: relative;
    height: 8px;
    width: 100%;
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



const Player = styled.section`
    height: 0px;
    
    position: relative;
    top: ${0-styles.contentMargin}px;
    overflow: hidden;
    display: none;
    background: ${styles.bgColor};
    border: ${styles.borderWidth}px solid white;
    border-top-width: 0px;
    width: calc(${styles.sectionWidth}vw + ${styles.contentGap * 2}px);
    font-size: ${styles.fontSizes.body}pt;
   
    padding-top: 0px;
    padding-bottom: 0px;
    color: white;
    min-width: ${styles.minContentWidth};
`

const PlayerUI = styled.section`
    display: flex;
    width: 100%;
    position: relative;
    left: 0px;
    top: ${isMobile ? 0 : -3}px;
    align-items: center;
    overflow: visible;
    z-index: 1;
    &>img{
        ${isMobile && 'width: 30px'}
    }
  
    
`

const PlayButton = styled.img`
    position: relative;
    left: 0px;
    margin-right: ${isMobile ? 0 : 0}px;
    margin-left: ${isMobile ? 5 : 10}px;
    top: 3px;
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
    gap: ${isMobile ? 2 : 10}px;
    ${!isMobile && 'left: -12px'}
    img{
        ${isMobile && 'width: 35px'}
    }
    
    
`