import React from "react";

import * as s from "./ContactForm.style";
import TextInput from "@Components/TextInput/TextInput";
import TextArea from "@Components/TextArea/TextArea";
import Button from "@Components/Button/Button";


const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <s.ContactFormContainer>
            <form onSubmit={handleSubmit}>
                <s.Row items={2}>
                    <TextInput name={"form-name"} id={"form-name"} placeholder={"Your Name"} required={true} />
                    <TextInput name={"form-email"} id={"form-email"} placeholder={"Your Email"} required={true} />
                </s.Row>
                <s.Row items={1}>
                    <TextInput name={"form-subject"} id={"form-subject"} placeholder={"Subject"} required={true} />
                </s.Row>
                <s.Row items={1}>
                    <TextArea name={"form-message"} id={"form-message"} placeholder={"Message"} required={true} rows={5} />
                </s.Row>
                <s.Row items={1}>
                    <Button placeholder={"Send Message"} name={"form-submit"} id={"form-submit"} />
                </s.Row>
            </form>
        </s.ContactFormContainer>
    );
};

export default ContactForm;
