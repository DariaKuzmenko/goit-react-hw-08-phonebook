import { useDispatch } from 'react-redux';

import { registerUser } from 'redux/auth';
import { Form, Input, Label, RegistrBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" placeholder="Enter user name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" placeholder="Enter email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Enter password" />
      </Label>
      <RegistrBtn type="submit">Register</RegistrBtn>
    </Form>
  );
};
