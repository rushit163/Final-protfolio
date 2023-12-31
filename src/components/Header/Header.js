import React from "react";
import styled from "styled-components";
import { ModalLink } from "../styles/Modal.styled";

export const Header = () => {
  
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #16181d;
  color: white;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;
