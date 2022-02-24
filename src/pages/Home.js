import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import pic from '../images/smile001.png'
import jsPic from '../images/javascript.png'
import htmlPic from '../images/html5.png'
import cssPic from '../images/css3.png'
import reactPic from '../images/react.png'
import rubyPic from '../images/ruby.png'
import railsPic from '../images/rails.png'
import sqlPic from '../images/sql.png'
import postgresPic from '../images/postgresql.png'


const Home = () => {
    const techTags = [
        {name: 'JS', img: jsPic},
        {name: 'HTML', img: htmlPic},
        {name: 'CSS', img: cssPic},
        {name: 'React', img: reactPic},
        {name: 'Ruby', img: rubyPic},
        {name: 'Rails', img: railsPic},
        {name: 'SQL', img: sqlPic},
        {name: 'Postgres', img: postgresPic},
    ]
    const renderTechTags = () => {
        return (
            techTags.map((t, i)=>{
                let initOffset = 0
                if(i===0){
                    initOffset = 15
                }
                return (
                    <TechTag style={{marginLeft: initOffset + "px"}}>
                        <img src={t.img} style={{width: "50px"}}/>
                        {t.name}
                    </TechTag>
                )
             
            })
        )
    }

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "30px", position: "relative", }}>
            <Body y={5} >
            <ProfPic src={pic}/>
                I'm Asher Bay, a front end React developer in Salt Lake City, Utah. I love building systems, learning new tools, and solving interesting problems with code.<br/>In 2022 I graduated from DevPoint Labs, a web development bootcamp affiliated with the University of Utah. Since then I've enjoyed continuing to learn and build.
                <br/>
                <section style={{display: "flex", gap: "10px", alignItems: "center", marginBottom: "0px",}}>
                    <p style={{ marginTop: "0px", marginBottom: "0px", position: "relative"}}>Skills:</p>
                    {renderTechTags()}
                </section>
            </Body>
        </section>
       
    )
}
export default Home

const ProfPic = styled.img`
    width: 300px;
    border-radius: 50%;
    float: right;
    margin-left: 10px;
    display: inline;
    &:hover {
        cursor: pointer;
    } 
`

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