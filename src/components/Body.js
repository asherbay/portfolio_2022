import React, {useContext} from 'react'
import styled from 'styled-components'
// import {styles} from '../Styles'
import {StyleContext} from '../providers/StyleProvider'
const Body = (props) => {
    const {styles} = useContext(StyleContext)
    console.log("fontsize " + styles.fontSizes.body)
    return (
        <Sect y={props.y} width={styles.sectionWidth} minWidth={styles.minContentWidth} fontSize={styles.fontSizes.body}>
            {props.children}
        </Sect>
    )
}
export default Body

// instead of making width directly proportional to window size, make just a couple fixed width options, conditional on window size
const Sect = styled.section`
    background-color: transparent;
    border: 3px solid white;
    width: ${window.innerWidth<900 ? 80 : styles.sectionWidth}vw;
    padding: 30px;
    margin: 15px;
    color: white;
    font-size: ${props => (props.fontSize !== null ? props.fontSize : 25)}pt;
    min-width: ${props => (props.minWidth !== null ? props.minWidth : 319)}px;
    margin-top: ${props => (props.y !== null ? props.y + "px" : "-500px")};
`

