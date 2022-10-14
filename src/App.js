import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

const initialList = []

class App extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    passwordList: initialList,
    count: 0,
    searchInput: '',
  }

  addBtn = event => {
    event.preventDefault()
    const {website, name, password, passwordList} = this.state
    const newPasswordList = {
      id: uuidv4,
      website,
      name,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordList],
      website: '',
      name: '',
      password: '',
      count: passwordList.length,
      isTicked: false,
    }))
  }

  onChangeWeb = event => {
    this.setState({website: event.target.value})
  }

  onChangeUser = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({isTicked: !prevState.isTicked}))
  }

  renderPasswordHistory = () => {
    const {passwordList} = this.state
    return (
      <div>
        <ul>
          {passwordList.map(eachPass => (
            <li>
              <h1>{eachPass.name[0]}</h1>
              <p>{eachPass.website}</p>
              <p>{eachPass.name}</p>
              <p>{eachPass.password}</p>
              <button type="button" onClick={this.onDelete}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderMaskPasswordHistory = () => {
    const {passwordList} = this.state
    return (
      <div>
        <ul>
          {passwordList.map(eachPass => (
            <li>
              <h1>{eachPass.name[0]}</h1>
              <p>{eachPass.website}</p>
              <p>{eachPass.name}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
              <button type="button" onClick={this.onDelete}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderPassWords = () => {
    const {isTicked} = this.state
    return (
      <div>
        {isTicked
          ? this.renderMaskPasswordHistory()
          : this.renderPasswordHistory()}
      </div>
    )
  }

  renderEmptyList = () => {
    const {count} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="sm-image"
        />
        <h1>No Passwords</h1>
      </div>
    )
  }

  renderPasswordList = () => {
    const {count, searchInput} = this.state
    return (
      <div>
        <div>
          <h1>
            Your Passwords <span>{count}</span>
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="logo"
            />
            <input
              type="search"
              onChange={this.onChangeInput}
              value={searchInput}
              className="input-ele"
            />
          </div>
        </div>
        <hr />
        <div>
          <div>
            <button
              type="button"
              className="checkBtn"
              onClick={this.onClickBtn}
            >
              <input type="checkbox" id="checkId" />
            </button>
            <label htmlFor="checkId">Show Passwords</label>
          </div>
        </div>
        <div>{count === 0 ? this.renderEmptyList() : this.renderPassWords}</div>
      </div>
    )
  }

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
              <div className="logo-card">
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
              <div className="logo-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="logo"
                />
                <input
                  type="text"
                  onChange={this.onChangeUser}
                  placeholder="Enter Username"
                  className="input-ele"
                />
              </div>
              <div className="logo-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />
                <input
                  type="password"
                  onChange={this.onChangePassword}
                  placeholder="Enter Password"
                  className="input-ele"
                />
              </div>
              <button type="button" onSubmit={this.addBtn} className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div>{this.renderPasswordList()}</div>
        </div>
      </div>
    )
  }
}

export default App
