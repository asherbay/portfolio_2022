import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import useWindowSize from '../hooks/useWindowSize'
import scale from './Scale'
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
        <Body id="boxParent" y={-15} >
            <ProjBox size={size}>
                <ProjImg src={props.pic} size={size}/>
                <section style={{display: "flex", flexDirection: "column", justifyItems: "flex-start",  position: "relative", width: "100%",}}>
                    <a href={props.url} style={{textDecorationColor: "white", textUnderlineOffset: "5px"}}><p style={{marginTop: "0px", marginBottom: "0px", color: "white", }}>{props.name}</p></a>
                    <p style={{marginTop: "10px", }}>{props.children}</p>
                    
                    <section style={{display: "flex", gap: "10px", alignItems: "center", marginBottom: "0px", flexDirection: (size.width>590 ? "row" : "column")}}>
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

const ProjBox = styled.section`
    display: flex; 
    flex-direction: ${props => (props.size.width > 1250 ? "row" : "column")};
    
    gap: 20px;
 
    p{
        font-size: 18pt;
    }
`

const ProjImg = styled.img`
    
    width: 300px;
    align-self: center;

`