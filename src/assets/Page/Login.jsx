import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { InputMask } from "primereact/inputmask";
import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import rasm from '../img/fon2.jpg'

function Login() {
  const [state, setState] = useState({ phone: "", password: "" });
  const [eye, setEye] = useState(false);
  const [value1, setValue1] = useState(null);
  return (
    <div className="login_container"
      style={{ background: `url(${rasm})` }}
    >
      <div className="login_main">
        {/* <div className="login_img"> */}
        {/* <img
            // src="https://i.pinimg.com/736x/c5/20/8e/c5208e457b292828003882e5c7210444.jpg"
            src="	https://img.freepik.com/free-vector/light-colors-ornamental-pattern-background_1268-794.jpg"
            width={"100%"}
            height={"100%"}
            alt="log_img"
          /> */}
        {/* </div> */}
        <div className="login_body">
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#febc66",
            }}
          >
            <FaArrowLeft /> Back to Website
          </Link>
          <br />
          <h2>Xush kelibsiz!</h2>
          <p className="signup">
            Hisobingiz yo'qmi? <Link to="/regis">Bepul hisob yarating</Link>
          </p>
          <form>
            <div className="input_div">
              <label for="phone">Telefon raqam:</label>
              <div className="phone_input">
                <span>+998</span>

                {/* <input
                type="phone"
                name="phone"
                required
                onChange={(e) => setState({ ...state, phone: e.target.value })}
                maxLength={9}
              /> */}
                <InputMask
                  style={{ color: "#000" }}
                  value={value1}
                  onChange={(e) => {
                    setValue1(e.value);
                    setState({ ...state, phone: e.target.value });
                  }}
                  mask="(99)-999-99-99"
                />
              </div>
            </div>
            <div className="input_div">
              <label for="password">Parol:</label>
              <div className="pass_input">
                {" "}
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  required
                  maxlength="8"
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
                <button type="button" onClick={() => setEye(!eye)}>
                  {!eye ? <RiEyeLine /> : <RiEyeCloseLine />}
                </button>
              </div>
            </div>

            <button type="submit">Log in</button>
            <Link className="forgot-password">Forgot password?</Link>
            <div className="social-buttons">
              {/* <button type="button" className="social-button google">
                <span className="sc_logo">
                  <FcGoogle />
                </span>
                <span className="sc_text">google o'rqali kirish</span>
              </button> */}
              {/* <button type="button" className="social-button facebook">
                <span className="sc_logo">
                  <FaFacebook style={{ color: "blue" }} />
                </span>
                <span className="sc_text">facebook o'rqali kirish</span>
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
