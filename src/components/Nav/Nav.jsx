import React from "react";

import * as s from "./Nav.style";


const Nav = (props) => {
    const { barsolid } = props;
    return (
        <div className="Nav-Container">
            <s.NavList>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={""} end>Home</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={"/about-us"}>About Us</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={"/products"}>Products</s.Link>
                </s.NavListItem>
                <s.NavListItem>
                    <s.Link $barsolid={barsolid} to={"/contact-us"}>Contact Us</s.Link>
                </s.NavListItem>
            </s.NavList>
        </div>
    );
};

export default Nav;
