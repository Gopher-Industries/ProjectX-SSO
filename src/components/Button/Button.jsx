import React from "react";

import * as s from "./Button.style";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <s.StyledButton type={"submit"} onClick={props.onClickHandler} value={props.placeholder} />
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button;
