import React from "react";
import * as s from "./Signup.style"
import homeLogo from "@Assets/images/square.png";

const Signup = () => {
    return (
        <s.SignupContainer inital={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.3}}  >
            <s.SignupContent >
                <s.SignupLogo>
                    <img src={homeLogo} alt={"Company Logo"} />
                </s.SignupLogo>
                <s.SignupTitle>
                    Sign Up
                </s.SignupTitle>
                <s.SignupSubtitle>
                    Fill out the form below to get started!
                </s.SignupSubtitle>
            </s.SignupContent>
        </s.SignupContainer>
    );
};

export default Signup;
