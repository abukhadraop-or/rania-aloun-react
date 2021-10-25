import styled from 'styled-components';
import breakpoints from 'styles/break-points';
import colors from 'styles/colors';

export const Container = styled.div`
  font-family: 'Source Sans Pro';
  margin: 1.25rem auto;
  padding: 0 0.9375rem;
  width: fit-content;
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 35px;
  font-weight: bold;
  margin: 0;
`;

export const Link = styled.a`
  color: ${colors.boringGreen};
  font-size: 0.9375rem;
  font-weight: bold;
  margin: 0.625rem;
  text-decoration: none;
`;

export const CardContainer = styled.form`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0.625rem 0;
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 0.25rem;
  border: none;
  height: 1.25rem;
  margin: 0;
  outline: 0.0625rem solid ${colors.ashGrey};
  padding: 0.625rem 1.25rem;
  width: 23.125rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: fit-content;
  }
`;

export const SubmitBtn = styled.input`
  background-color: ${colors.boringGreen};
  border-radius: 0.3125rem;
  border: none;
  color: white;
  cursor: pointer;
  height: 2.5rem;
  width: 5rem;
`;
