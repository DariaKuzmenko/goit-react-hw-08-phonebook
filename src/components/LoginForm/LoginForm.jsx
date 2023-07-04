import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth';
import { Form, Input, Label, LoginBtn } from './Login.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" placeholder="Enter email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Enter password" />
      </Label>

      <LoginBtn type="submit">Log In</LoginBtn>
    </Form>
  );
};
