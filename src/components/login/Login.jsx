import React from 'react';
import './Login.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import signInWithGoogle from '../../firebase/firebase.utils';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ email: '', password: '' })
  }
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="email"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;
