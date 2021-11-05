import React, { useState } from 'react'
import UIButton from 'components/UI/Button/Button'

import './Login.css'

function initialState() {
  return { user: '', password: '' }
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState)

  function onChange(event) {
    const { value, name } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">Usuário</label>
          <input
            id="user"
            type="text"
            name="email"
            autoComplete="off"
            onChange={onChange}
            value={values.email}
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
