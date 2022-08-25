
export const LoginForm = () => {

  const onSubmitForm = (e) => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={onSubmitForm} className="login-form">
      <fieldset className="form-grid">
        <p className="form-fields">
          
          <label htmlFor="email-user">Usuario o email</label>
          <div className="form-field">
            <input type="text" name="email-user" id="email-login" />
          </div>
        </p>
        <p className="form-fields">
          <label htmlFor="email-user"> Contraseña</label>
          <div className="form-field">
            <input type="password" name="login-pwd" id="pwd-login" />
          </div>
        </p>
        <p className="button-submit">
          <input type="submit" value="Ingresar" />
        </p>
      </fieldset>
      <fieldset className="new-account">
        <a href="">No tienes cuenta?</a>
        <hr />
        <a href="">Olvidaste tu contraseña?</a>
      </fieldset>
    </form>
  )
}
