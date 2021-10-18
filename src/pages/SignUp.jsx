import React from 'react';
import Header from 'components/Header';
import {
  Container,
  Input,
  CardHeader,
  Text,
  Link,
  CardContainer,
  SubmitBtn,
} from 'components/Logging/logging';

/**
 * Component holding temporary text for sign up page, to be implemented
 */
function SignUp() {
  return (
    <>
      <>
        <Header />
        <Container>
          <CardHeader>
            <Text>Sign Up</Text>
            <Link href="www.google.com">Have an account?</Link>
          </CardHeader>

          <CardContainer>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
            <br />
            <Input type="text" id="email" name="email" placeholder="Email" />
            <br />
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <br />
            <SubmitBtn type="submit" value="Sign Up" />
          </CardContainer>
        </Container>
      </>
    </>
  );
}

export default SignUp;
