import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const NavList = styled.ul`
  list-style-type: none;
  display:flex;
  gap:30px;
  
`

export const NavListItem = styled.li`
    text-decoration:none;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  transition: 0.3s;
  font-size: 14px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: white;

  
  &:hover {
    color:#40bda6;
  }
  
  &.active {
    color:#40bda6;
  }
`
