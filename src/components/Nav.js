import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import styled from 'styled-components'
import pic from '../images/smile001.png'
const Nav = () => {
    const [currentPage, setCurrentPage] = useState("")

    const setPage = (e) => {
        console.log(e.target.pathname.substring(1))
        setCurrentPage(e.target.pathname.substring(1))
    }

    


    return (
        <NavLinks  >
            <br/>
            {/* <ProfPic src={pic} onClick={()=>{setCurrentPage("home")}} /> */}
            <NamePlate currentpage={currentPage} onClick={()=>{setCurrentPage("home")}} to="/">ASHER BAY</NamePlate>
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
    width: 350px;
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
    
    order: 1;
`
