import { useState } from "react";

import logo from "./assets/logo.png";

import "./App.scss";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} alt="logo-PMI" />
            </span>

            <span className="login-form-title"> Troca Senha PMIDOMAIN </span>


            <div className="wrap-input">
              <input
                className={user !== "" ? "has-val input" : "input"}
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Usuário"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Troca Senha</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;