import React from 'react';
import Header from 'components/Header';
import {
  Text,
  Link,
  Input,
  Container,
  SubmitBtn,
  CardHeader,
  CardContainer,
} from 'components/Logging/logging';

/**
 * Component holding the sign up page's main components.
 */
function SignUp() {
  return (
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
  );
}

export default SignUp;
