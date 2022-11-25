import React, {useState} from "react";

import * as s from "./LoginForm.style";
import TextInput from "@Components/TextInput/TextInput";
import Button from "@Components/Button/Button";
import loadingGif from "@Assets/images/loading.gif";

import {AnimatePresence} from "framer-motion";
import axios from "axios";

const LoginForm = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = () => {
        setIsLoading(!isLoading);
    }

    const submitLogin = () => {
        toggleLoading();
        const user = {
            username: "",
            password: ""
        }

        axios.post(`#`, {user})
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
                    <TextInput placeholder={"Login"} type={"text"} id={"form-login"} name={"form-login"} required={true} />
                    <TextInput placeholder={"Password"} type={"password"} id={"form-password"} name={"form-password"} required={true} />
                    <Button name={"form-submit"} id={"form-submit"} onClickHandler={submitLogin} />
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
