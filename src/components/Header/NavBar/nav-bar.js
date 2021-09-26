import styled from "styled-components";

export default styled.ul`
  font-size: 15px;
  background-color: white;
  color: #98a69b;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media (max-width: 375px) {
    position: absolute;
    top: 0.6rem;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.8);
    width: fit-content;
    flex-direction: column;
    right: 2.2rem;
  }
`;
