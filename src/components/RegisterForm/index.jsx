import React, { useState } from 'react';
import Joi from 'joi-browser';
import registerUser from 'services/sign-up-service';
import { useHistory } from 'react-router-dom';
import {
  Text,
  Link,
  Input,
  ErrorBox,
  Container,
  SubmitBtn,
  CardHeader,
  CardContainer,
} from 'components/common/Form/form.styles';

function RegisterForm() {
  const [inputData, setData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const schema = {
    username: Joi.string().required().label('username').min(5).max(50),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 3, tlds: { allow: ['com', 'net'] } })
      .label('email'),
    password: Joi.string().required().min(5).label('password').min(5).max(255),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(inputData, schema, options);
    if (!error) return null;
    return error;
  };

  /**
   * Calls register service.
   * @param {object} event Submit event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await registerUser(inputData);
    if (typeof data === 'string')
      setErrors((errs) => ({
        ...errs,
        email: data,
      }));
    else {
      history.push('/');
    }
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const options = { abortEarly: false };
    const { error } = Joi.validate(obj, newSchema, options);
    return error ? error.details[0].message : null;
  };

  const handleInputChange = (event) => {
    event.persist();
    const errorMessage = validateProperty(event.target);
    if (errorMessage)
      setErrors((errs) => ({
        ...errs,
        [event.target.name]: errorMessage,
      }));
    else delete errors[event.target.name];

    setData((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Container>
        <CardHeader>
          <Text>Sign Up</Text>
          <Link href="www.google.com">Have an account?</Link>
        </CardHeader>

        <CardContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={inputData.username}
            onChange={handleInputChange}
          />
          {errors.username && <ErrorBox>{errors.username}</ErrorBox>}
          <br />
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={inputData.email}
            onChange={handleInputChange}
          />
          {errors.email && <ErrorBox>{errors.email}</ErrorBox>}
          <br />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={inputData.password}
            onChange={handleInputChange}
          />
          {errors.password && <ErrorBox>{errors.password}</ErrorBox>}
          <br />
          <SubmitBtn disabled={validate()}>Sign Up</SubmitBtn>
        </CardContainer>
      </Container>
    </>
  );
}

export default RegisterForm;
