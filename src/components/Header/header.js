import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  align-items: center;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 100px 0;
  position: sticky;
  top: 0;
  background-color: #fff;
  @media (max-width: 500px) {
    padding: 0 50px 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
