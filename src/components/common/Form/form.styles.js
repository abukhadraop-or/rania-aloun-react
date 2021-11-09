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

export const Text = styled.h1`
  font-size: 2.375rem;
  margin: 0;
`;

export const Link = styled.a`
  color: ${colors.boringGreen};
  font-size: 15px;
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
  font-size: 1.25rem;
  height: 50px;
  margin: 0;
  outline: 0.0625rem solid ${colors.ashGrey};
  padding: 0.625rem 1.25rem;
  width: 600px;

  @media (max-width: ${breakpoints.tabletWide}) {
    width: 100%;
  }
`;

export const SubmitBtn = styled.button`
  background-color: ${colors.boringGreen};
  border-radius: 0.3125rem;
  border: none;
  color: white;
  cursor: pointer;
  height: 3.125rem;
  width: 6.25rem;
  font-size: 1.125rem;

  &:disabled {
    background-color: ${colors.disabledGreen};
  }
`;

export const ErrorBox = styled.div`
  background-color: ${colors.pastelPink};
  border-radius: 0.25rem;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.lightMaroon};
  height: fit-content;
  margin: 0;
  outline: 0.0625rem solid ${colors.bubbleGum};
  padding: 0.625rem 1.25rem;
  width: 37.5rem;

  @media (max-width: ${breakpoints.tabletWide}) {
    width: 100%;
  }
`;

export const CredentialsError = styled.div`
  background-color: ${colors.pastelPink};
  border-radius: 0.25rem;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.lightMaroon};
  height: fit-content;
  margin: 0;
  outline: 0.0625rem solid ${colors.bubbleGum};
  padding: 0.625rem 1.25rem;
  margin: 30px 0 0 0;
  width: 600px;

  @media (max-width: ${breakpoints.tabletWide}) {
    width: 100%;
  }
`;
