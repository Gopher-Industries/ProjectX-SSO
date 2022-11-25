import styled from "styled-components";

export const TextInput = styled.input`
  display:block;
  width:100%;
  height:calc(1.5em + 0.75rem + 2px);
  padding:20px 15px;
  border-radius: 15px;
  box-shadow: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: #387690;
  background-clip: padding-box;
  transition: border-color 0.2s ease-in-out;
  outline: none;
  box-sizing: border-box;
  border:1px solid #387690;
  margin:20px 0;

  &:focus {
    border-color: #1ab4fc;
    outline: none;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
    font-family: "Open Sans", sans-serif;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
    font-family: "Open Sans", sans-serif;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
    font-family: "Open Sans", sans-serif;
  }
`
