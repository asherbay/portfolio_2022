import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'



const Resume = () => {

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "30px", position: "relative", }}>
            <Body y={5}>
            {/* <ProfPic src={pic} onClick={()=>{}} /> */}
                Resume
            </Body>
        </section>
       
    )
}
export default Resume