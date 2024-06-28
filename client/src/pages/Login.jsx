import { FormInput, FormCheckbox, Form } from 'semantic-ui-react'

const Login = () => {
  return (
    <Form>
      <FormInput
        error={{ content: 'Please enter your email address', pointing: 'below' }}
        fluid
        label='Email'
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

export default Login;