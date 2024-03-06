import React, { useState } from "react";

function Auth () {

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInputs;

  const saveUserInputs = ({ target }) => {
    const { name, value } = target;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const signup = () => {};
  const login = () => {};
  const logout = () => {};

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>
          email
          <input value={email} name="email" onChange={saveUserInputs} />
        </label>
      </div>
      <div>
        <label>
          password
          <input value={password} name="password" onChange={saveUserInputs} />
        </label>
      </div>
      <button onClick={signup}>sign up</button>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </form>
  );
}

export default Auth;