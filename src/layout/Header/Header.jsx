import React, {useState} from "react";
import * as s from "./Header.style";
import logoSrc from "@Assets/images/full-white-2.png";
import Nav from "@Components/Nav/Nav";

const Header = (props) => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400){
            setVisible(true);
            console.log("scrolled");
        }
        else if (scrolled <= 400){
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <s.HeaderContainer style={{backgroundColor: visible ? 'white' : 'transparent'}}>
            <s.InnerHeader>
                <s.Logo src={logoSrc} alt={"Company Logo"} />
                <Nav barsolid={visible}/>
            </s.InnerHeader>
        </s.HeaderContainer>
    );
};

export default Header;
