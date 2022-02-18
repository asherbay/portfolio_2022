import React from 'react'
import styled from 'styled-components'
const Body = (props) => {

    return (
        <Banner y={props.y}>
            {props.children}
        </Banner>
    )
}
export default Body

const Banner = styled.section`
    
    color: white;
    border: 3px solid white;
    width: 35vw;
    text-align: center;
    font-size: 66pt;
    padding: 30px;
    margin: 15px;
    position: relative;
    margin-top: ${props => (props.y ? props.y + "px" : "-500px")};
    
`