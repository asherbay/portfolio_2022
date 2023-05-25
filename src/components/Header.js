import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import scale from './Scale'
import useWindowSize from '../hooks/useWindowSize'
import {styles} from '../Styles'
const Header = (props) => {
    const windowSize = useWindowSize()
    const ref = useRef(null)
    const [elementWidth, setElementWidth] = useState(ref.current ? ref.current.offsetWidth : null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=>{
        setWindowWidth(window.innerWidth)
        // console.log('innerWidth', window.innerWidth)
    }, [window.innerWidth])

    useEffect(()=>{
        setElementWidth(ref.current.offsetWidth)
   
    }, [])
    // useEffect(()=>{
      

    // }, [elementWidth])

    useEffect(()=>{
       setElementWidth(ref.current.offsetWidth)
   
    }, [windowSize])


    return (
        <Banner ref={ref} y={props.y} width={elementWidth} windowWidth={windowWidth}>
            {props.children}
        </Banner>
    )
}
export default Header

const Banner = styled.section`
    
    color: white;
    background-color: ${styles.bgColor};
    border: ${styles.borderWidth}px solid white;
    width: ${props => (props.windowWidth < 1380 ? (styles.sectionWidth+"vw") : (1100+"px") )};
    text-align: center;

    @media screen and (max-width: 800px) {
        font-size:  ${props => (scale(props.width, 100, 570, 12, styles.fontSizes.header))}pt;
    }
    @media screen and (min-width: 801px) {
        font-size:  ${styles.fontSizes.header}pt;
    }

    
    padding: ${styles.contentGap}px;
    margin: ${styles.contentMargin}px;
    min-width: ${styles.minContentWidth};
    margin-top: ${props => (props.y ? props.y + "px" : "-500px")};
    
    
`