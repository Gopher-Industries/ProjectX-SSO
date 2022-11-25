import React from "react";
import * as s from "./Home.style";
import homeLogo from "@Assets/images/square.png";
import LoginForm from "@Components/LoginForm/LoginForm";


const Home = () => {

    return (
        <s.HomeContainer inital={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.3}} >
            <s.HomeContent >
                <s.HomeLogo>
                    <img src={homeLogo} alt={"Company Logo"} />
                </s.HomeLogo>
                <s.HomeTitle>
                    Sign In
                </s.HomeTitle>
                <s.HomeSubtitle>
                    Sign in and start managing your account!
                </s.HomeSubtitle>
                <s.HomeForm>
                    <LoginForm />
                </s.HomeForm>
            </s.HomeContent>
        </s.HomeContainer>
    );
};

export default Home;
