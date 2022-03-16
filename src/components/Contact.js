import './contact.css'

import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact(){
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_k88t36a",
                "template_rvvjjhe",
                formRef.current,
                "AemMmKmrJTF3BMeY5"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact me if you're interested what I do</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +1 902 719 7095
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            myronmyy@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            1595 Barrington Street, Halifax, Nova Scotia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form  ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input  type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Successful Submitted"}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;
