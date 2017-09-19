import React from 'react';

import Input from './Input';
import Button from './Button';

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <Input
          className="form-username"
          value=""
          type="text"
          name="username"
          placeholder="Enter your username"
        />
        <Input
          className="form-password"
          value=""
          type="password"
          name="username"
          placeholder="Enter your password"
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default LoginForm;
