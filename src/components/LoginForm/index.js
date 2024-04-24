import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {userName: '', password: '', errorMessage: ''}

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if(response.ok === true){
      this.onSuccess()
    }
    else{
      this.setState({errorMessage:"*Username and Password did't match"})
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserNamefiled = () => {
    const {userName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={this.onChangeUserName}
          className="password-input-field"
          placeholder="Username"
        />
      </>
    )
  }

  renderUserPasswordfiled = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          className="user-name-input-field"
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-mobile"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop"
          />
          <div className="input-container">{this.renderUserNamefiled()}</div>
          <div className="input-container">
            {this.renderUserPasswordfiled()}
          </div>
          <button className="login-button" type="submit">Login</button>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
