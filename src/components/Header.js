import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import scale from './Scale'
import useWindowSize from '../hooks/useWindowSize'
import {styles} from '../Styles'
const Body = (props) => {
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
        <Banner ref={ref} y={props.y} width={elementWidth}>
            {props.children}
        </Banner>
    )
}
export default Body

const Banner = styled.section`
    
    color: white;
    border: 3px solid white;
    width: ${window.innerWidth<900 ? 80 : styles.sectionWidth}vw;
    text-align: center;

    @media screen and (max-width: 1000px) {
        font-size:  ${props => (scale(props.width, 100, 570, 12, styles.fontSizes.header))}pt;
    }
    @media screen and (min-width: 1001px) {
        font-size:  ${styles.fontSizes.header}pt;
    }

    
    padding: 30px;
    margin: 15px;
    min-width: 319px;
    margin-top: ${props => (props.y ? props.y + "px" : "-500px")};
    
    
`