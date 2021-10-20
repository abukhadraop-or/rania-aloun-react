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
 * Component holding the sign in page's main components.
 */
function SignIn() {
  return (
    <>
      <Header />
      <Container>
        <CardHeader>
          <Text>Sign In</Text>
          <Link href="www.google.com">Need an account?</Link>
        </CardHeader>

        <CardContainer>
          <Input type="text" id="email" name="email" placeholder="Email" />
          <br />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <SubmitBtn type="submit" value="Sign in" />
        </CardContainer>
      </Container>
    </>
  );
}

export default SignIn;
