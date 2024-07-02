import { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';
//import { useMutation } from '@apollo/client';
//import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { email, password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        {error && (
          <Message error>
            <Message.Header>Error</Message.Header>
            <p>{error}</p>
          </Message>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default Login;


/*import { FormInput, FormCheckbox, Form } from 'semantic-ui-react'

const Login = () => {
  return (
    <Form>
      <FormInput
        error={{ content: 'Please enter your email address', pointing: 'below' }}
        fluid
        label='email'
        placeholder='email@domain.com'
        id='form-input-email'
      />
      <FormInput
        error='Please enter your password'
        fluid
        label='password'
        placeholder='valid password here'
      />
      <FormCheckbox
        label='I agree to the Terms and Conditions'
        error={{
          content: 'You must agree to the terms and conditions',
          pointing: 'left',
        }}
      />
    </Form>
  );
};

export default Login;*/