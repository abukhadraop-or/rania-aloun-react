import styled from 'styled-components';
import breakpoints from 'styles/break-points';
import colors from 'styles/colors';

export const Container = styled.div`
  margin: 1.25rem auto;
  padding: 0 0.9375rem;
  width: fit-content;
  font-family: 'Source Sans Pro';
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 35px;
  margin: 0;
  font-weight: bold;
`;

export const Link = styled.a`
  color: ${colors.boringGreen};
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  margin: 10px;
`;

export const CardContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 0.25rem;
  height: 1.25rem;
  margin: 0;
  padding: 10px 20px;
  width: 23.125rem;
  border: none;
  outline: 0.0625rem solid ${colors.ashGrey};

  @media (max-width: ${breakpoints.tablet}) {
    width: fit-content;
  }
`;

export const SubmitBtn = styled.input`
  cursor: pointer;
  background-color: ${colors.boringGreen};
  color: white;
  border: none;
  height: 40px;
  width: 80px;
  border-radius: 5px;
`;
