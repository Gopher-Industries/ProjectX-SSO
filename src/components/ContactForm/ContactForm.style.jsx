import styled from "styled-components";

const handleRowItems = items => {
    return (100 / items) + "%";
}

export const ContactFormContainer = styled.div`
  padding-left:30px;
  padding-right:30px;
  padding-top:10px;
`

export const Row = styled.div`
  display:flex;
  gap:10px;
  margin-bottom:1rem;
  justify-content: space-around;

  > * {
    width: ${({ items }) => handleRowItems(items)};
  }
`
