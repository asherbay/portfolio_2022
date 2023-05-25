import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {styles} from '../Styles'
const Body = (props) => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        setWidth(window.innerWidth)
        console.log('innerWidth', window.innerWidth)
    }, [window.innerWidth])

    return (
        <Sect y={props.y} width={width}>
            {props.children}
        </Sect>
    )
}
export default Body

// instead of making width directly proportional to window size, make just a couple fixed width options, conditional on window size
export const Sect = styled.section`
    background: ${styles.bgColor};
    border: ${styles.borderWidth}px solid white;
    width: ${props => (props.width < 1380 ? (styles.sectionWidth+"vw") : (1100+"px") )};
    font-size: ${styles.fontSizes.body}pt;
    padding: ${styles.contentGap}px;
    margin: ${styles.contentMargin}px;
    color: white;
    min-width: ${styles.minContentWidth};
    max-width: ${styles.maxContentWidth};
    
    margin-top: ${props => (props.y !== null ? props.y + "px" : "-500px")};
`

