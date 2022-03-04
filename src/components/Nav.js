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
            {/* <ProfPic src={pic} onClick={()=>{setCurrentPage("home")}} /> */}
            <NamePlate id="name" currentpage={currentPage} onClick={()=>{setCurrentPage("home")}} to="/">ASHER BAY</NamePlate>
            <NavLink onClick={setPage} to="/projects">projects {currentPage=="projects" ? '⦿' : '○'} </NavLink>
            <NavLink onClick={setPage} to="/contact">contact {currentPage=="contact" ? '⦿' : '○'} </NavLink>
            <NavLink onClick={()=>{window.open(resume)}} to={location.pathname}>resume {currentPage=="resume" ? '⦿' : '○'} </NavLink>
            {/* <Link to="/backgroundtest">BG</Link> */}
            <section>
                
                <a href="https://github.com/asherbay" target="_blank"><IconLink src={githubPic}></IconLink></a>
                <a href="https://www.linkedin.com/in/asherbay/" target="_blank"><IconLink src={linkedinPic}></IconLink></a>
                 {/* <a><IconLink src={resumeIcon} onClick={()=>{window.open(resume)}}></IconLink></a> */}
            </section>
        </NavLinks>
    )
}
export default Nav


const IconLink = styled.img`
    width: 70px;
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
    background-color: ${styles.bgColor};
    text-align: right;
    border: 3px solid white;
    padding: 4px;
    padding-right: 10px;

    &:hover {
        color: red;
    }
`


const NamePlate = styled(NavLink)`
        text-decoration: none;
        color: white;
        border-width: 3px;
        border-color: white;
        border-style: solid;
        background: ${styles.bgColor};
        width: 100%;
        text-align: center;
        font-size: ${styles.fontSizes.namePlate}pt;
        padding: 4px;
        padding-left: 6px;
        padding-right: 6px;
        text-decoration: ${props => props.currentpage==="home" ? "underline" : "none"};
        text-decoration-thickness: 3px;
        text-underline-offset: 10px;
        &:hover {
            color: red;
        }
    `





const NavLinks = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 30px;
  
    align-items: center;
    margin-top: -75px;
 
    order: 1;

    &>*{
        @media screen and (max-width: 800px) {
            width: ${props => scale(props.width, 100, 800, 50, styles.navWidth)}px;
        }
        @media screen and (min-width: 801px) {
            width: ${styles.navWidth}px;
        }
    }
    #name{

        @media screen and (max-width: 800px) {
            font-size: ${props => scale(props.width, 100, 1140, styles.fontSizes.namePlate/2, styles.fontSizes.namePlate)}pt;
            width: ${props => scale(props.width, 100, 800, 50, 350)}px;
        }
        @media screen and (min-width: 801px) {
            font-size: ${styles.fontSizes.namePlate}pt;
            width: ${styles.navWidth}px;
        }
    }
    &>:not(NamePlate){
        @media screen and (max-width: 800px) {
            font-size: ${props => scale(props.width, 100, 1140, 12, 25)}pt;
        }
        @media screen and (min-width: 801px) {
            font-size: ${styles.fontSizes.body}pt;
        }
    }
`
