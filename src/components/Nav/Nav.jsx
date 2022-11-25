import React from "react";

import * as s from "./Nav.style";


const Nav = () => {
    return (
        <div className="Nav-Container">
            <s.NavList>
                <s.NavListItem>
                    <s.Link to={""} end>Login</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link to={"/signup"}>Sign Up</s.Link>
                </s.NavListItem>

            </s.NavList>
        </div>
    );
};

export default Nav;
