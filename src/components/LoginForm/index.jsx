import React, { useState } from 'react';
import signUser from 'services/sign-in-service';
import { useHistory } from 'react-router-dom';
import {
  Text,
  Link,
  Input,
  Container,
  SubmitBtn,
  CardHeader,
  CardContainer,
  CredentialsError,
} from 'components/common/Form/form.styles';

function LoginForm() {
  const [inputData, setData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState();
  const history = useHistory();

  const validate = () => {
    if (inputData.email === '' && inputData.password === '') {
      return true;
    }
    return false;
  };

  /**
   * Calls login service.
   * @param {object} event Submit event.
   */
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { data: userToken } = await signUser(inputData);
      console.log(userToken);
      history.push('/');
    } catch (err) {
      setErrors(`Wrong Credentials: ${err.response.data.message}`);
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Container>
        <CardHeader>
          <Text>Sign In</Text>
          <Link href="www.google.com">Need an account?</Link>
        </CardHeader>

        <CardContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={inputData.email}
            onChange={handleInputChange}
          />
          <br />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={inputData.password}
            onChange={handleInputChange}
          />
          {errors && <CredentialsError>{errors}</CredentialsError>}
          <br />
          <SubmitBtn disabled={validate()}>Sign in</SubmitBtn>
        </CardContainer>
      </Container>
    </>
  );
}

export default LoginForm;
