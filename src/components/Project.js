import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import useWindowSize from '../hooks/useWindowSize'
import scale from './Scale'
import {styles} from '../Styles'
//also need to add info about tech used

let size

const Project = (props) => {
    size = useWindowSize()
    const renderTechTags = () => {
        return (
            props.techTags.map((t, i)=>{
                if(i===0){
                    return (<TechTag style={{marginLeft: "15px"}}>{t}</TechTag>)
                }
                return (<TechTag>{t}</TechTag>)
            })
        )
    }

    return (
        <Body id="boxParent" y={-15} style={{minWidth: "319px"}} >
            <ProjBox size={size}>
                <ProjImg src={props.pic} size={size} target="_blank" onClick={()=>{window.open(props.url, '_blank')}}/>
                <section style={{display: "flex", flexDirection: "column", justifyItems: "flex-start",  position: "relative", width: "100%",}}>
                    <a href={props.url} style={{textDecorationColor: "white", textUnderlineOffset: "5px"}} target="_blank"><p style={{marginTop: "0px", marginBottom: "0px", color: "white", }}>{props.name}</p></a>
                    <p style={{marginTop: "10px", }}>{props.children}</p>
                    
                    <section style={{display: "flex", gap: "10px", alignItems: "center", marginBottom: "0px", flexDirection: (size.width>720 ? "row" : "column")}}>
                        <p style={{ marginTop: "0px", marginBottom: "0px", position: "relative"}}>Made <br/>with:</p>
                        {props.techTags && renderTechTags()}
                    </section>
                </section>
            </ProjBox>
        </Body>
    )
}
export default Project


const TechTag = styled.button`
    border: 2px solid white;
    font-family:  Bergen;
    color: white;
    font-size: 17pt;
    padding 5px;
    background-color: transparent;
    border-radius: 10px;
    position: relative;
    
    left: -12px;
    &:hover {
        cursor: pointer;
    }
`

const ProjBox = styled.section`
    display: flex; 
    flex-direction: ${props => (props.size.width > 1350 ? "row" : "column")};
    gap: 20px;
    min-width: 419px;
    p{
        font-size: 20pt;
    }
    
    
`

const ProjImg = styled.img`
    
    width: 300px;
    align-self: center;
    &:hover {
        cursor: pointer;
    }
`