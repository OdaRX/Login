import React, { useContext, useState } from 'react'
import UIButton from 'components/UI/Button/Button'
import Context from '../../context/Context'

import './Login.css'
import { useHistory } from 'react-router'

function initialState() {
  return { user: '', password: '' }
}

function Login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' }
  }
  return { error: 'Usuário ou senha inválido' }
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState)
  const { setToken } = useContext(Context)
  const history = useHistory()

  function onChange(event) {
    const { value, name } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  function onSubmit(event) {
    event.preventDefault()

    const { token } = Login(values)

    if (token) {
      setToken(token)
      return history.push('/')
    }

    setValues(initialState)
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope" onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            autoComplete="off"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  )
}

export default UserLogin
