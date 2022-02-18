import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'

//also need to add info about tech used



const Project = (props) => {
    
    const renderTechTags = () => {
        return (
            props.techTags.map((t)=>{
                return (<TechTag>{t}</TechTag>)
            })
        )
    }

    return (
        <Body y={-15}>
            <section style={{display: "flex", gap: "30px"}}>
                <img src={props.pic} style={{width: "300px", alignSelf: "center"}}/>
                <section style={{display: "flex", flexDirection: "column", justifyItems: "flex-start",  position: "relative", width: "100%",}}>
                    <a href={props.url} style={{textDecorationColor: "white", textUnderlineOffset: "5px"}}><p style={{marginTop: "0px", marginBottom: "0px", color: "white", }}>{props.name}</p></a>
                    <p style={{marginTop: "10px", fontSize: "15pt",}}>{props.children}</p>
                    
                    <section style={{display: "flex", gap: "10px", alignItems: "center", marginBottom: "0px",}}>
                    {/* <p style={{fontSize: "15pt"}}>Made with:</p> */}
                    <p style={{fontSize: "15pt", marginTop: "0px", marginBottom: "0px", right: "0px", position: "relative"}}>Made with:</p>
                        {props.techTags && renderTechTags()}
                        {/* <TechTag>React</TechTag>
                        <TechTag>P5.js</TechTag>
                        <TechTag>Tone.js</TechTag> */}
                    </section>
                </section>
                
            </section>
        </Body>
    )
}
export default Project


const TechTag = styled.button`
    border: 2px solid white;
    font-family:  Bergen;
    color: white;
    font-size: 13pt;
    padding 5px;
    background-color: transparent;
    border-radius: 10px;
    position: relative;
    
    left: -12px;
    &:hover {
        cursor: pointer;
    }
`