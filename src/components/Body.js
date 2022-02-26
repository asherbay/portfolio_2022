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
    background-color: transparent;
    border: 3px solid white;
    width: ${styles.sectionWidth}vw;
    padding: 30px;
    margin: 15px;
    color: white;
    min-width: 319px;
    margin-top: ${props => (props.y !== null ? props.y + "px" : "-500px")};
`

