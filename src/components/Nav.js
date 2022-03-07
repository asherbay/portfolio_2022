import {Link, useLocation} from 'react-router-dom'
import React, {useState, useEffect, } from 'react'
import styled from 'styled-components'
import pic from '../images/smile001.png'
import scale from './Scale'
import {styles} from '../Styles'
import useWindowSize from '../hooks/useWindowSize'
import githubPic from '../images/github.png'
import linkedinPic from '../images/linkedin.png'
import resumeIcon from '../images/resume.png'
import resume from '../images/resume.pdf'
import {isMobile} from 'react-device-detect'

const Nav = () => {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState(location.pathname==="/" ? "home" : location.pathname.substring(1))
    const size = useWindowSize()
    const setPage = (e) => {
        console.log(e.target.pathname.substring(1))
        setCurrentPage(e.target.pathname.substring(1))
    }


    useEffect(()=>{
        console.log("location.pathname " + currentPage)
    }, [location.pathname])


    return (
        <NavLinks width={size.width} selPath={currentPage}>
            <br/>
            
            <NamePlate id="name" currentpage={currentPage} onClick={()=>{setCurrentPage("home")}} to="/" selected={currentPage==="home"}>ASHER BAY</NamePlate>
            <NavLink onClick={setPage} to="/projects" selected={currentPage==="projects"}>projects {!isMobile && (currentPage==="projects" ? '⦿' : '○')} </NavLink>
            <NavLink onClick={setPage} to="/contact" selected={currentPage==="contact"}>contact {!isMobile && (currentPage=="contact" ? '⦿' : '○')} </NavLink>
            <NavLink onClick={()=>{window.open(resume)}} to={location.pathname} selected={currentPage==="resume"}>resume {!isMobile && (currentPage=="resume" ? '⦿' : '○')} </NavLink>
            
            {!isMobile && <section>
                
                <a href="https://github.com/asherbay" target="_blank"><IconLink src={githubPic}></IconLink></a>
                <a href="https://www.linkedin.com/in/asherbay/" target="_blank"><IconLink src={linkedinPic}></IconLink></a>
            </section>}
        </NavLinks>
    )
}
export default Nav


const IconLink = styled.img`
    width: ${styles.tagImgWidth}px;
    border: 0px solid white;
    float: right;
    margin-left: 10px;
    &:hover {
        transform: scale(115%);
        cursor: pointer;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    background: ${isMobile ? "transparent" : styles.bgColor};
    text-align: right;
    font-size: ${isMobile ? styles.fontSizes.namePlate : styles.fontSizes.body}pt;
   ${isMobile ? "border-bottom: 1" : "border: " + styles.borderWidth}px solid white;
    ${isMobile ? (props => props.selected ? "border: 0px solid white;" : "border: 0px solid white;") : "border: " + styles.borderWidth + "px solid white;"}
    padding: 5px;
    padding-right: ${isMobile ? 5 : 10}px;
    text-decoration: ${props => props.selected && isMobile ? "underline" : "none"};
    text-decoration-thickness: ${isMobile ? 1 : styles.borderWidth}px;
    text-underline-offset: ${isMobile ? 5 : 10}px;
       
        &:hover {
          ${ !isMobile && "color: red;" }
        }   
   
    
`


const NamePlate = styled(NavLink)`
        text-decoration: none;
        color: white;
         ${isMobile ? (props => props.selected ? "border: 0px solid white;" : "border: 0px solid white;") : "border: " + styles.borderWidth + "px solid white;"}
        background: ${isMobile ? "transparent" : styles.bgColor};
        
        text-align: center;
        font-size: ${styles.fontSizes.namePlate}pt;
        padding: 5px;
        padding-left: ${isMobile ? 5 : 6}px;
        padding-right: ${isMobile ? 5 : 6}px;px;
        text-decoration: ${props => props.selected ? "underline" : "none"};
        text-decoration-thickness: ${isMobile ? 1 : 2}px;
        text-underline-offset: ${isMobile ? 5 : 10}px;
        
    `





const NavLinks = styled.nav`
    display: flex;
    flex-direction: ${isMobile ? "row" : "column"};
    gap: ${isMobile ? 0 : styles.contentGap}px;
    
    align-items: center;
    margin-top: ${isMobile ? -30 : -75}px;
 
    order: ${isMobile ? -1 : 1};

    ${isMobile && 
        `&:last-child{
            padding-left: 0px;
            
        };
        width: 100vw;
        `
    }


    ${ !isMobile &&
    `&>*{
        @media screen and (max-width: 800px) {
            width: ${props => scale(props.width, 100, 800, 50, styles.navWidth)}px;
        }
        @media screen and (min-width: 801px) {
            width: ${styles.navWidth}px;
        }

    }
    
        #name{

            @media screen and (max-width: 800px) {
                font-size: ${isMobile ? styles.fontSizes.namePlate : (props => scale(props.width, 100, 1140, styles.fontSizes.namePlate/1.63, styles.fontSizes.namePlate))}pt;
                width: ${props => scale(props.width, 100, 800, 50, styles.navWidth)}px;
            }
            @media screen and (min-width: 801px) {
                font-size: ${styles.fontSizes.namePlate}pt;
                width: ${styles.navWidth}px;
            }
        }`
    }
`
