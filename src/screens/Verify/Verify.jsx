import React from "react";
import * as s from "./Verify.style";
import VerifyLogo from "@Assets/images/square.png";
import LoginForm from "@Components/LoginForm/LoginForm";
import {useSearchParams} from "react-router-dom";


const Verify = () => {
    const [searchParams] = useSearchParams();
    const user = "Corey";

    const token = searchParams.get("token");

    return (
        <s.VerifyContainer inital={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.3}} >
            {token != null ?
                (
                    <s.VerifyContent >
                        <s.VerifyLogo>
                            <img src={VerifyLogo} alt={"Company Logo"} />
                        </s.VerifyLogo>
                        <s.VerifyTitle>
                            Welcome back, {user}!
                        </s.VerifyTitle>
                        <s.VerifySubtitle>
                            Click the button below to complete the verification process,
                        </s.VerifySubtitle>
                        <s.VerifyForm>
                            <LoginForm />
                        </s.VerifyForm>
                    </s.VerifyContent>
                ) :
                (
                    <s.VerifyContent>
                        <s.VerifyLogo>
                            <img src={VerifyLogo} alt={"Company Logo"} />
                        </s.VerifyLogo>
                        <s.VerifyTitle>
                            Oops!
                        </s.VerifyTitle>
                        <s.VerifySubtitle>
                            There seems to be a problem verifying your account. <br/>Please get in touch with us to get this sorted!
                        </s.VerifySubtitle>
                    </s.VerifyContent>
                )
            }
        </s.VerifyContainer>
    );
};

export default Verify;
