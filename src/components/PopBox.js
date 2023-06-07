import React, { useState, useRef, useEffect } from 'react';
import './PopBox.css';
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import {styles} from '../Styles'


function PopBox(props) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimer.current);
    setIsHovered(true);
  };

  const reenter = () => {
    if(isHovered){
        clearTimeout(hoverTimer.current);
    }
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    
    // console.log('leave')
    hoverTimer.current = setTimeout(exit, 500);
  };

  const exit = () => {
    
    if(findVideo()){
        findVideo().pause()
    }
    return setIsHovered(false)
  }

  useEffect(() => {    
    return () => clearTimeout(hoverTimer.current);
  }, []);

//   useEffect(() => {
//     console.log('isHovered', isHovered)    
//     if(!isHovered){
        
//     }
//   }, [isHovered]);

  const findVideo = () => {
    if(props.children){
        if(props.children.length){
            //more than 1 child
        } else {
            if(props.children.type == "video"){
                return props.children.ref.current
            }
        }
        return null
    }
  }


  const openLink = () => {
    if(findVideo()){
        findVideo().pause()
    }
    
    if(props.link){
        window.open(props.link)
    }
  }

  const autoPlay = () => {
    if(findVideo()){
        findVideo().play()
    }
  }

  return (
    <div 
      className="PopupBox-root"
      onMouseEnter={reenter}
      onMouseLeave={handleMouseLeave}
    >
        <ClickWord onMouseEnter={handleMouseEnter} showing={isHovered}>
        {props.keyword}
        </ClickWord>
        <CSSTransition classNames="popup" timeout={500} in={isHovered} onEntered={autoPlay}>
             <Pop width={props.width ? props.width : styles.popupWidth} height={styles.popupHeight}> {/*className="PopupBox-popup"> */}
                {props.children}
                <Pocket>
                    <Expand onClick={openLink}>
                        <>
                        ⓘ  
                        </>
                    </Expand> 
                </Pocket>
            </Pop>
        </CSSTransition>
        
    </div>
  );
}

export default PopBox;

const Pocket = styled.span`
    position: relative;
    width: 0;
    height: 0;

`

const Expand = styled.span`
    display: block;
    position: absolute;
    color: white;
    left: -36px;
    top: 4px;
    margin: 8px;
    opacity: 1;
    width: 0px;
    font-weight: normal;
    border-radius: 50%;
    font-size: 12pt;
    &:hover{
        cursor: pointer;
        font-weight: 900;
        font-size: 14pt;
    }

`

const Pop = styled.span`
    
    display: flex;
    object-fit: cover;
    overflow: hidden;
    transform-origin: bottom;


    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, -10px);
    border: 1px solid white;
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 3px;
    white-space: nowrap;
    z-index: 1000;
    opacity: 0;
    width: 0px;
    

    &.popup-enter {
        opacity: 0;
        width: 0px;
      }
      
    &.popup-enter-active {
        opacity: 1;
        width: ${props => props.width ? props.width : 320}px;
        transition: opacity, width 500ms;
    }
    &.popup-enter-done {
        opacity:  1;
        width: ${props => props.width ? props.width : 320}px;
      }
    
    &.popup-exit {
        opacity: 1;
        width: ${props => props.width ? props.width : 320}px;
    }
    
    &.popup-exit-active {
        opacity: 0;
        transition: opacity 250ms;
      
    }
    &.popup-exit-done {
        opacity: 0;
        width: 0px;
    }
`

const ClickWord = styled.span`
    cursor: pointer;
    text-decoration: none;
    
    text-decoration: ${props => props.showing ? "underline" : "none"};
    
    color: #24d674;
`