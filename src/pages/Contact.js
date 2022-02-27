import React, {useRef, useState, useEffect, useContext} from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import styled from 'styled-components'
import {styles} from '../Styles'
import emailjs from '@emailjs/browser'
import emailkey from '../emailkey'
import validator from 'validator'
import {StyleContext} from '../providers/StyleProvider'
const Contact = () => {
    const {styles, isMobile} = useContext(StyleContext)
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
            <Body y={-15}>
                {/* <p>Feel free to reach out via email, phone, or by sending a message below.</p> */}
                {/* <p>Get in touch!</p>  */}
                <p style={{marginTop: "0px"}}>asherbay@gmail.com</p>
                <p>801-822-9437</p>
                <form ref={form}>
                    <Field>Name: <Input name={"from_name"} placeholder={status==="not ready" ? "Name required" : ""} onChange={(e)=>{setMessName(e.target.value)}} style={{fontSize: styles.fontSizes.body+"pt"}}/></Field>

                    <Field>Email: <Input name={"email"} placeholder={status==="not ready" ? "Email required" : ""} onChange={(e)=>{setMessEmail(e.target.value)}}/></Field>

                    <Field>Message: <BigInput name={"message"} placeholder={status==="not ready" ? "Message required" : ""} onChange={(e)=>{setMessage(e.target.value)}} style={{height: (isMobile ? 80 : 300)+"px"}}/></Field>
                    <Button type="submit" onClick={handleSubmit} ready={status==="ready"} style={{fontSize: styles.fontSizes.body+"pt"}}>{status==="sent" && "Message sent!"}{status==="invalid email" && "Invalid email"}{status==="sending" && "Sending..."}{(status==="writing" || status==="not ready" || status==="ready") ? "Send→" : ""}</Button>
                </form>
            </Body>
        </section>
    )
}
export default Contact

const Input = styled.input`
    background: black;
    border: 3px solid white;
    color: white;
    outline-width: 0; 
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    
    margin-bottom: 30px;
    text-indent: 5pt;
    font-family: Bergen;
`
const BigInput = styled.textarea`
    background: transparent;
    border: 3px solid white;
    color: white;
    outline-width: 0; 
    font-size: ${styles.fontSizes.body}pt;
    width: 100%;
    height: 300px;
    resize: none;
    font-family: Bergen;
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;   
    position: relative;
    left: -5px;
    
`
const Button = styled.button`
    border: 2px solid white;
    font-family:  Bergen;
    color: white;

    padding 10px;
    background-color: transparent;
    float: right;
    margin-top: 30px;
    position: relative;
    right: -5px;
    &:hover {
        cursor: ${props => props.ready ? "pointer" : "not-allowed"};
    }
`