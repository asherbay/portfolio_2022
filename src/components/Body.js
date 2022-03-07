import React from 'react'
import styled from 'styled-components'
import {styles} from '../Styles'
const Body = (props) => {

    return (
        <Sect y={props.y}>
            {props.children}
        </Sect>
    )
}
export default Body

// instead of making width directly proportional to window size, make just a couple fixed width options, conditional on window size
const Sect = styled.section`
    background: ${styles.bgColor};
    border: ${styles.borderWidth}px solid white;
    width: ${styles.sectionWidth}vw;
    font-size: ${styles.fontSizes.body}pt;
    padding: ${styles.contentGap}px;
    margin: ${styles.contentMargin}px;
    color: white;
    min-width: ${styles.minContentWidth};
    margin-top: ${props => (props.y !== null ? props.y + "px" : "-500px")};
`

