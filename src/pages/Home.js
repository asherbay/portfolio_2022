import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import pic from '../images/smile001.png'



const Home = () => {

    return (
        
        <Body y={5}>
           {/* <ProfPic src={pic} onClick={()=>{}} /> */}
            I'm Asher Bay, a full stack web developer in Salt Lake City, Utah. I love building systems and solving interesting problems with code.<br/> My current stack is React with Ruby on Rails and a PostgreSQL database. <br/>I graduated from DevPoint Labs in their Winter 2021 cohort. Since then I've enjoyed continuing to learn and build.
        </Body>
       
    )
}
export default Home

const ProfPic = styled.img`
    width: 400px;
    &:hover {
        cursor: pointer;
    } 
`