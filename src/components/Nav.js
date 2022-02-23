import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import styled from 'styled-components'
import pic from '../images/smile001.png'
import scale from './Scale'
import {styles} from '../Styles'
import useWindowSize from '../hooks/useWindowSize'

const Nav = () => {
    const [currentPage, setCurrentPage] = useState("")
    const size = useWindowSize()
    const setPage = (e) => {
        console.log(e.target.pathname.substring(1))
        setCurrentPage(e.target.pathname.substring(1))
    }

    


    return (
        <NavLinks width={size.width} >
            <br/>
            {/* <ProfPic src={pic} onClick={()=>{setCurrentPage("home")}} /> */}
            <NamePlate id="name" currentpage={currentPage} onClick={()=>{setCurrentPage("home")}} to="/">ASHER BAY</NamePlate>
            <NavLink onClick={setPage} to="/projects">projects {currentPage=="projects" ? '⦿' : '○'} </NavLink>
            <NavLink onClick={setPage} to="/resume">resume {currentPage=="resume" ? '⦿' : '○'} </NavLink>
            <NavLink onClick={setPage} to="/contact">contact {currentPage=="contact" ? '⦿' : '○'} </NavLink>
        </NavLinks>
    )
}
export default Nav

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    background-color: transparent;

    
    


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
        border: 3px solid white;
        background-color: transparent;
        width: 356px;
        text-align: center;
        font-size: 45pt;
        padding: 4px;
        

        &:hover {
            color: red;
        }
    `





const NavLinks = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    align-items: center;
    position: relative;
    top: -75px;
    order: 1;

    &>*{
        @media screen and (max-width: 1000px) {
            width: ${props => scale(props.width, 100, 1000, 50, 350)}px;
        }
        @media screen and (min-width: 1001px) {
            width: 350px;
        }
    }
    #name{
        @media screen and (max-width: 1140px) {
            font-size: ${props => scale(props.width, 100, 1140, 23, 45)}pt;
        }
        @media screen and (min-width: 1001pt) {
            font-size: 45pt;
        }
    }
    &>:not(NamePlate){
        @media screen and (max-width: 1140px) {
            font-size: ${props => scale(props.width, 100, 1140, 12, 25)}pt;
        }
        @media screen and (min-width: 1001pt) {
            font-size: 25pt;
        }
    }

   
`
