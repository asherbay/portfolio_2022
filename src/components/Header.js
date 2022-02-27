import React, {useState, useEffect, useRef, useContext} from 'react'
import styled from 'styled-components'
import scale from './Scale'
import useWindowSize from '../hooks/useWindowSize'
// import {styles} from '../Styles'
import {StyleContext} from '../providers/StyleProvider'
const Header = (props) => {
    const {styles, isMobile} = useContext(StyleContext)
    const windowSize = useWindowSize()
    const ref = useRef(null)
    const [elementWidth, setElementWidth] = useState(ref.current ? ref.current.offsetWidth : null)
    

    useEffect(()=>{
        setElementWidth(ref.current.offsetWidth)
   
    }, [])

    useEffect(()=>{
      

    }, [elementWidth])

    useEffect(()=>{
       setElementWidth(ref.current.offsetWidth)
   
    }, [windowSize])


    return (
        <Banner ref={ref} y={props.y} width={elementWidth} 
            style={{
                width: styles.sectionWidth + "vw", 
                minWidth: styles.minContentWidth + "px", 
                fontSize: (isMobile ? styles.fontSizes.header : windowSize.width < 1000 ? scale(elementWidth, 100, 570, 12, styles.fontSizes.header) : styles.fontSizes.header),
            }}>
            {props.children}
        </Banner>
    )
}
export default Header

const Banner = styled.section`
    
    color: white;
    border: 3px solid white;
    width: ${window.innerWidth<900 ? 80 : styles.sectionWidth}vw;
    text-align: center;


    
    padding: 30px;
    margin: 15px;
    margin-top: ${props => (props.y ? props.y + "px" : "-500px")};
    
    
`