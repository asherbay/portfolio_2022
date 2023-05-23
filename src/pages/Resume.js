import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import Header from '../components/Header'
import resume from '../images/resume23.pdf'

const Resume = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "30px", position: "relative", height: "800px"}}>
            <Header y={5} >RESUME</Header>
            <Body y={-15} style={{overflow: "hidden",}} >
            {/* <ProfPic src={pic} onClick={()=>{}} /> */}
                <img src={resume} style={{width: "1800px", overflow: "hidden"}}/>
            </Body>
        </section>
       
    )
}
export default Resume