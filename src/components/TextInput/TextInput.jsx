import React from "react";

import * as s from "./TextInput.style";
import PropTypes from "prop-types";


const TextInput = (props) => {
    const {name, id, required, placeholder, type} = props;
    return (
        <s.TextInput name={name} id={id} required={required} placeholder={placeholder} type={type} />
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
}

export default TextInput;
