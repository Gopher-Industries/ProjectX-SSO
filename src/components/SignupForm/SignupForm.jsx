import React, {useRef, useState} from "react";

import * as s from "./SignupForm.style";
import TextInput from "@Components/TextInput/TextInput";
import Button from "@Components/Button/Button";
import loadingGif from "@Assets/images/loading.gif";

import {AnimatePresence} from "framer-motion";

import axios from "axios";
import configData from "@Config/config.json";

const SignupForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const toggleLoading = () => {
        setIsLoading(!isLoading);
    }

    const submitSignup = (e) => {
        e.preventDefault();
        toggleLoading();

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            email: emailRef.current.value
        }

        axios.post(configData.API_URL.BASE + configData.API_URL.USER, {user})
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error.message);
        });
    }

    return (
        <AnimatePresence>
            {!isLoading ? (
                <s.SignupContainer key={"login-container"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <form onSubmit={submitSignup}>
                        <TextInput placeholder={"Full Name"} ref={nameRef} type={"text"} id={"form-name"} name={"form-name"} required={true} />
                        <TextInput placeholder={"Username"} ref={usernameRef} type={"text"} id={"form-username"} name={"form-username"} required={true} />
                        <TextInput placeholder={"Email"} ref={emailRef} type={"email"} id={"form-email"} name={"form-email"} required={true} />
                        <TextInput placeholder={"Password"} ref={passwordRef} type={"password"} id={"form-password"} name={"form-password"} required={true} />
                        <Button name={"form-submit"} id={"form-submit"} />
                    </form>
                </s.SignupContainer>
            ) : (
                <s.SignupLoading key={"login-loading"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{delay:0.5}}>
                    <img src={loadingGif} alt={"Loading"} />
                </s.SignupLoading>
            )}
        </AnimatePresence>
    );
};

export default SignupForm;
