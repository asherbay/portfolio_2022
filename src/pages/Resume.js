import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import Header from '../components/Header'


const Resume = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "30px", position: "relative", }}>
            <Header y={5} >RESUME</Header>
            <Body y={-15}>
            {/* <ProfPic src={pic} onClick={()=>{}} /> */}
                Resume
            </Body>
        </section>
       
    )
}
export default Resume