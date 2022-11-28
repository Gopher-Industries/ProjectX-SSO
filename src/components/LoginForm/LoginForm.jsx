import React, {useRef, useState} from "react";

import * as s from "./LoginForm.style";
import TextInput from "@Components/TextInput/TextInput";
import Button from "@Components/Button/Button";
import loadingGif from "@Assets/images/loading.gif";

import {AnimatePresence} from "framer-motion";
import axios from "axios";
import configData from "@Config/config.json";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const toggleLoading = () => {
        setIsLoading(!isLoading);
    }

    const submitLogin = (e) => {
        e.preventDefault();
        toggleLoading();
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
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
                <s.LoginContainer key={"login-container"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <form onSubmit={submitLogin}>
                        <TextInput placeholder={"Login"} ref={usernameRef} type={"text"} id={"form-login"} name={"form-login"} required={true} />
                        <TextInput placeholder={"Password"} ref={passwordRef} type={"password"} id={"form-password"} name={"form-password"} required={true} />
                        <Button name={"form-submit"} id={"form-submit"}/>
                    </form>
                </s.LoginContainer>
            ) : (
                <s.LoginLoading key={"login-loading"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{delay:0.5}}>
                    <img src={loadingGif} alt={"Loading"} />
                </s.LoginLoading>
            )}
        </AnimatePresence>
    );
};

export default LoginForm;
