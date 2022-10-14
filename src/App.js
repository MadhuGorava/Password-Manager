import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {website: '', name: '', password: ''}

  render() {
    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="sm-image"
            />
            <form className="form-card">
              <h1 className="heading">Add New Password</h1>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo"
                />
                <input
                  type="text"
                  onChange={this.onChangeWeb}
                  placeholder="Enter Website"
                  className="input-ele"
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  onChange={this.onChangeUser}
                  placeholder="Enter Username"
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  onChange={this.onChangePassword}
                  placeholder="Enter Password"
                />
              </div>
              <button type="button" onClick={this.addBtn}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
