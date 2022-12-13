import React, {useRef, useState, useEffect} from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import styled from 'styled-components'
import {styles} from '../Styles'
import emailjs from '@emailjs/browser'
import emailkey from '../emailkey'
import validator from 'validator'
import {isMobile} from 'react-device-detect'
import bcPic from '../images/bandcamp1.png'
import githubPic from '../images/github.png'
import linkedinPic from '../images/linkedin.png'

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("writing")
    const [messName, setMessName] = useState("")
    const [messEmail, setMessEmail] = useState("")
    const [message, setMessage] = useState("") 

    useEffect(()=>{
        if(status==="sent" || status==="not ready" || status==="invalid email"){
            setStatus("writing")
        }
        if(messEmail && messName && message){
            setStatus("ready")
        }
    }, [messName, messEmail, message])


    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault(); // Prevents default refresh by the browser
        if(status==="ready"){
            if (validator.isEmail(messEmail)) {
                setStatus("sending")
                emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, form.current, emailkey.USER_ID)
                .then((result) => {
                    form.current.reset()
                    setStatus("sent")
                },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                });
            } else {
                setStatus("invalid email")
            }
        } else {
            setStatus("not ready")
        }
        
    };

    return (
        <section style={{display: 'flex', flexDirection: 'column', gap: "30px", position: "relative", }}>
        <Header y={5} >CONTACT</Header>
            <Body y={-15} >
                <p style={{marginTop: "0px",}}>Email: asherbay@gmail.com</p>
                <p style={{marginBottom: "0px", }}>Phone: 801-822-9437</p>
                {isMobile && <p style={{marginBottom: "5px", marginTop: "11px"}}>Links: 
                    <a href="https://github.com/asherbay" target="_blank"><IconLink src={githubPic}></IconLink></a>
                    <a href="https://www.linkedin.com/in/asherbay/" target="_blank"><IconLink src={linkedinPic}></IconLink></a>
                    <a href="http://www.asherbay.bandcamp.com" target="_blank"><IconLink src={bcPic}></IconLink></a>
                </p>}
            </Body>
            <Body y={-15}>
                {/* <p>Feel free to reach out via email, phone, or by sending a message below.</p> */}
                {/* <p>Get in touch!</p>  */}
                
                <form ref={form}>
                    <Field>Name: <Input name={"from_name"} placeholder={status==="not ready" ? "Name required" : ""} onChange={(e)=>{setMessName(e.target.value)}}/></Field>

                    <Field>Email: <Input name={"email"} placeholder={status==="not ready" ? "Email required" : ""} onChange={(e)=>{setMessEmail(e.target.value)}}/></Field>

                    <Field>Message: <BigInput name={"message"} placeholder={status==="not ready" ? "Message required" : ""} onChange={(e)=>{setMessage(e.target.value)}}/></Field>
                    <Button type="submit" onClick={handleSubmit} ready={status==="ready"}>{status==="sent" && "Message sent!"}{status==="invalid email" && "Invalid email"}{status==="sending" && "Sending..."}{(status==="writing" || status==="not ready" || status==="ready") ? "Send→" : ""}</Button>
                </form>
            </Body>
        </section>
    )
}
export default Contact

const IconLink = styled.img`
    width: ${styles.tagImgWidth * 0.75}px;
    border: 0px solid white;
   display: inline;
    margin-left: 10px;
    margin-bottom: -7px;
    &:hover {
        transform: scale(115%);
        cursor: pointer;
    }
`


const Input = styled.input`
    background: transparent;
    border: ${styles.borderWidth}px solid white;
    color: white;
    border-radius: 0%;
    outline-width: 0; 
    font-size: ${styles.fontSizes.body}pt;
    width: ${isMobile ? 93 : 100}%;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: ${isMobile ? 15 : 20}px;
    text-indent: 5pt;
    font-family: Bergen;
`
const BigInput = styled.textarea`
    background: transparent;
    border: ${styles.borderWidth}px solid white;
    border-radius: 0%;
    color: white;
    outline-width: 0; 
    font-size: ${styles.fontSizes.body}pt;
    width: ${isMobile ? 93 : 100}%;
    padding-top: 5px;
    padding-bottom: 5px;
    
    text-indent: 5pt;
    height: ${isMobile ? 70 : 150}px;
    resize: none;
    font-family: Bergen;
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;   
    position: relative;
    left: ${isMobile ? 0 : -5}px;
    
`
const Button = styled.button`
    border: ${styles.borderWidth}px solid white;
    font-family:  Bergen;
    
    color: white;
    font-size: ${styles.fontSizes.body}pt;
    padding ${isMobile ? 5 : 10}px;
    background-color: transparent;
    float: right;
    margin-top: ${isMobile ? 15 : 30}px;
    position: relative;
    right: ${isMobile ? 0 : -1}px;
    &:hover {
        cursor: ${props => props.ready ? "pointer" : "not-allowed"};
    }
`