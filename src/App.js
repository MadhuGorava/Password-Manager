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

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
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
      count: passwordList.length,
      isTicked: false,
    }))
    this.setState({website: '', name: '', password: ''})
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

  onClickBtn = () => {
    this.setState(prevState => ({isTicked: !prevState.isTicked}))
  }

  onDelete = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(eachPass => eachPass.id !== id)
    this.setState({passwordList: filteredList})
  }

  renderPasswordHistory = () => {
    const {searchInput, passwordList} = this.state
    const searchList = passwordList.filter(eachPass =>
      eachPass.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <ul>
          {searchList.map(eachPass => (
            <li key={eachPass.id} className="list-items-container">
              <h1>{eachPass.name[0]}</h1>
              <p>{eachPass.website}</p>
              <p>{eachPass.name}</p>
              <p>{eachPass.password}</p>
              <button
                type="button"
                onClick={this.onDelete}
                className="check-btn"
                testid="delete"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                  className="delete-btn"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderMaskPasswordHistory = () => {
    const {searchInput, passwordList} = this.state
    const searchList = passwordList.filter(eachPass =>
      eachPass.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <ul>
          {searchList.map(eachPass => (
            <li key={eachPass.id} className="list-items-container">
              <h1>{eachPass.name[0]}</h1>
              <div className="list-card">
                <p>{eachPass.website}</p>
                <p>{eachPass.name}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  alt="stars"
                  className="stars"
                />
              </div>
              <button
                type="button"
                onClick={this.onDelete}
                className="check-btn"
                testid="delete"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                  className="delete-btn"
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
          ? this.renderPasswordHistory()
          : this.renderMaskPasswordHistory()}
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
        <p className="password-head">No Passwords</p>
      </div>
    )
  }

  renderPasswordList = () => {
    const {count, searchInput} = this.state
    return (
      <div className="passwords-list-container">
        <div className="passwords-heads">
          <p className="password-head">
            Your Passwords <span>{count}</span>
          </p>
          <div className="logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              onChange={this.onChangeInput}
              value={searchInput}
              className="search-input-ele"
            />
          </div>
        </div>
        <hr className="style-line" />
        <div>
          <div className="check-box-card">
            <button
              type="button"
              className="check-btn"
              onClick={this.onClickBtn}
            >
              <input type="checkbox" id="checkId" />
            </button>
            <label htmlFor="checkId" className="password-head">
              Show Passwords
            </label>
          </div>
        </div>
        <div>
          {count === 0 ? this.renderEmptyList() : this.renderPassWords()}
        </div>
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
              <button type="button" onClick={this.addBtn} className="add-btn">
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
