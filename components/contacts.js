import styles from "../styles/contacts.module.css"
import {globalContent} from "./content"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';



export function Contacts(props){

    const [emailSent, setEmailSent] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setState({ ...state , [name]: value });
        console.log(state.name, state.email, state.message)
    }

    // function sendEmail(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_mI8fMO1xh7LRltvIQ3FQk')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    // }

    function sendEmail(e) {

        setEmailSent(true)

        e.preventDefault();

        console.log("Name and email sent:" + state.name +" "+ state.email)

        const templateParams = {
            from_name: state.name + " (" + state.email + ")",
            to_name: "Alexandru Codreanu",
            message: state.message
        };

        emailjs
            .send("contact_service", "contact_form", templateParams, "user_mI8fMO1xh7LRltvIQ3FQk")
            .then(
                function(response) {
                // toast.success("Your message has successfully sent!", {
                //     position: toast.POSITION.BOTTOM_CENTER
                // });
                console.log("SUCCESS!", response.status, response.text);
                },
                function(err) {
                // toast.error("Your message was not able to be sent");
                }
            );
        setState({
            name: "",
            email: "",
            message: ""
        });
    }

    
    return(
        <div className={styles.wrapper}>
            <section name="contacts" className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>
                        {globalContent[props.lang].contactsContent.heading}
                    </h1>
                    <div className={styles.contacteBox}>
                        <div className={styles.leftContacteBox}>
                            <h2 className={styles.h2}>
                                {globalContent[props.lang].contactsContent.heading1}
                            </h2>
                            <div className={styles.mobileLine}></div>
                            <a
                                href="https://t.me/joinchat/AAAAAEgPEa1HRUVe6vN8Gw"
                                className={styles.link}
                            >
                                <div className={styles.contactBox}>
                                    <img src="/telegramIcon3.svg" className={styles.icon}></img>
                                    <div className={styles.contactLink}>SOUPP MARKET OWNERS</div>
                                </div>
                            </a>
                            <div className={styles.contactBox}>
                                <img src="/emailIcon.svg" className={styles.icon}></img>
                                <div className={styles.contactLink}>soupp.capital@yandex.ru</div>
                            </div>
                            <div className={styles.socialBox}>
                                <a href="https://www.instagram.com/soupp.crypto/" target="blank">
                                    <img 
                                        src="/instagramIcon3.svg" className={styles.socialIcon}
                                    ></img>
                                </a>
                                <a href="https://discord.gg/Dg8eePQ3" target="blank">
                                    <img 
                                        src="/discord2.svg" 
                                        className={styles.socialIcon}
                                    ></img>
                                </a>
                                {/* <img src="/facebookIcon3.svg" className={styles.socialIcon}></img> */}
                            </div>
                        </div>

                        <div className={styles.rightContainerBox}>
                            <h3 className={styles.h3}>
                                {globalContent[props.lang].contactsContent.heading2}
                            </h3>
                            <div className={styles.mobileLine}></div>

                            <div 
                                className={styles.emailSent}
                                style={{
                                    display : emailSent ? "block" : "none"
                                }}
                            >
                                {globalContent[props.lang].contactsContent.emailSent}
                            </div>

                            <form
                                onSubmit={sendEmail}
                                className={styles.form}
                            >
                                <input 
                                    type="text" 
                                    placeholder={globalContent[props.lang].contactsContent.input1} 
                                    id="name"
                                    name="name"
                                    onChange={handleInputChange}
                                    required
                                    value={state.name}
                                    className={styles.input}
                                ></input>
                                <input 
                                    type="text" 
                                    placeholder={globalContent[props.lang].contactsContent.input2} 
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    required
                                    value={state.email}                        
                                    className={styles.input}
                                ></input>
                                <input 
                                    type="text" 
                                    placeholder={globalContent[props.lang].contactsContent.input3} 
                                    className={styles.input} 
                                    id="message"
                                    name="message"
                                    onChange={handleInputChange}
                                    required
                                    value={state.message}                        
                                    style={{height: "120px"}}
                                ></input>
                                <input 
                                    className={styles.button}
                                    type="submit"
                                    placeholder={globalContent[props.lang].contactsContent.button}
                                >
                                </input>
                            </form>
                        </div>
                    </div>
                </div>
                <img src="/SOUPPlogo.svg" className={styles.backgroundImg}></img>
            </section>
        </div>
    )
}