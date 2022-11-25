import React from "react";

import * as s from "./LoginForm.style";
import TextInput from "@Components/TextInput/TextInput";
import Button from "@Components/Button/Button";

const LoginForm = (props) => {
    return (
        <s.LoginContainer>
            <TextInput placeholder={"Login"} type={"text"} id={"form-login"} name={"form-login"} required={true} />
            <TextInput placeholder={"Password"} type={"password"} id={"form-password"} name={"form-password"} required={true} />
            <Button name={"form-submit"} id={"form-submit"} />
        </s.LoginContainer>
    );
};

export default LoginForm;
