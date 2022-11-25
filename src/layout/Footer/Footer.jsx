import React from "react";
import * as s from "./Footer.style"

import SocialsButton from "@Components/SocialButtons/SocialButtons"

const Footer = (props) => {
    return (
        <s.FooterContainer>
           <s.FooterTop>
               <s.FooterTopContent>
                   <s.FooterTitle>Gopher Industries</s.FooterTitle>
                   <s.FooterSocials>
                       <SocialsButton />
                   </s.FooterSocials>
               </s.FooterTopContent>
           </s.FooterTop>
            <s.FooterBottom>
                © Copyright Gopher Industries. All Rights Reserved
            </s.FooterBottom>
        </s.FooterContainer>
    );
};

export default Footer;
