import styled from "styled-components";

const Button = styled.button`
    color: var(--mainWhite);
    background: var(--mainGreen);
    padding: 1em 0.7em;
    margin: 0 15px;
    box-shadow: none;
    border: none;
    cursor: pointer;
    transition: all 1.4s ease;
    &:hover {
        color: var(--mainGreen);
        background: var(--mainWhite);
        border: 1px solid var(--mainGreen);
        transform: scale(1.1);
    }
`

export default Button;
