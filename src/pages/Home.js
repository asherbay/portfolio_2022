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
import VacuumStudy from '../audio/VacuumStudy.wav'
import AIIM from '../audio/AIIM.wav'
import PlayPic from '../images/play.png'
import PausePic from '../images/pause.png'
import VolPic from '../images/volume.png'
import playhead from '../images/playhead.png'
import arrow from '../images/triangle.png'
const Home = () => {

    const [playerOpen, setPlayerOpen] = useState(false)
    const [selAudio, setSelAudio] = useState(null)
    const [selTitle, setSelTitle] = useState(null)
  

    const [playing, setPlaying] = useState(false)
    const [progInt, setProgInt] = useState(null)
    const [progress, setProgress] = useState(0)
    const audio = useRef()

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
        {name: 'Heroku', img: herokuPic},
        {name: 'Figma', img: figmaPic},
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

    return (
        <Container>
            <Body y={5} >
            
            <ProfPic src={pic}/>
                I'm Asher Bay, a web developer in Salt Lake City, Utah. I enjoy figuring out new tools and obsessing over interesting projects.<br/>In 2022 I graduated from DevPoint Labs, a web development bootcamp affiliated with the University of Utah. Since then I've continued to learn and build.
                
                
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
                            <VolUI />
                        </PlayerUI>
                </Player>
            </CSSTransition>

        </Container>
    )
}
export default Home
 
export const VolUI = () => {
    const [open, setOpen] = useState(false)
    const [val, setVal] = useState(100)
    return (
        <VolBox>
            <CSSTransition in={!open} timeout={{ enter: 250, exit: 250 }} classNames="openVolPic" > 
                <VolButton src={VolPic} onClick={()=>{setOpen(true)}} />
            </CSSTransition>
             <CSSTransition in={open} timeout={{ enter: 250, exit: 250 }} classNames="openVol" > 
                <VolStrip type="range" value={val}/>
            </CSSTransition>
        </VolBox>
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
        height: 50px;
        padding-top: ${styles.contentGap/2 }px;
        padding-bottom: ${styles.contentGap/2}px;
        transition: height 250ms, padding-top 250ms, padding-bottom 250ms;
    }
    &>.openPlayer-exit {
        display: block;
        height: 50px;
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
        height: 50px;
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
        width: 50px;
        transition: width 250ms;
    }
    &>.openVol-enter-done {
        display: inline;
        width: 50px;
    }

    &>.openVol-exit {
        width: 50px;
    }
    &>.openVol-exit-active {
        width: 0px;
        transition: width 250ms;
    }
    &>.openVol-exit-done {
        width: 0px;
        transition: width 250ms;
    }

    


    &>.openVolPic-enter {
       display: inline;
       width: 27px;
    }
    &>.openVolPic-enter-active {
        display: inline;
        width: 42px;
        transition: width 250ms;
    }
    &>.openVolPic-enter-done {
        display: inline;
        width: 42px;
    }
 
    &>.openVolPic-exit {
        width: 42px;
    }
    &>.openVolPic-exit-active {
        width: 27px;
        transition: width 250ms;
    }
    &>.openVolPic-exit-done {
        width: 27px;
    }
     
`

const VolButton = styled.img`
    position: relative;
    left: -10px;
    top: 5px;
`

const VolStrip = styled.input`
    -webkit-appearance: none;
    
    display: none;
    position: relative;
    width: 50px;
    transform: rotate(90deg);
    top: 3px;
    left: -10px;
    margin: -10px;
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
    left: 25px;
`

const Info = styled.section`
    font-size: 14pt;
    display: flex;
    justify-content: space-between;
    width: 92%;
  
`

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
    width: 92%;
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
    top: -3px;
    align-items: center;
    overflow: visible;
    z-index: 1;
    
`

const PlayButton = styled.img`
    position: relative;
    left: 10px;
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
    gap: 10px;
    left: -12px;
    
`