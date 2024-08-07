import { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import Auth from '../components/utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../components/utils/mutations';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { username, email, password },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign up for a new account
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
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Sign Up
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

export default Signup;
