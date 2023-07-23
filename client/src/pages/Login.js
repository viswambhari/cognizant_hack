import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

function Login() {

  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  }

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }


  const handleOnSubmit = async(e) => { // submit to the server
    e.preventDefault();

      const { password, username } = values;

      const resp = await axios.post(loginRoute, {
        username,
        password
      }); 

      const data = resp.data
  
      if(data.status === false){
        toast.error(data.response, toastOptions);
      }
      if(data.status === true){
        sessionStorage.setItem(process.env.REACT_APP_CLIENT_KEY, data.authToken);
        navigate('/')
      }

  };

  return (
    <>
      <FormContainer>
        <form
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <div className="brand">
            <h1>Login</h1>
          </div>

          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => handleOnChange(e)}
          />
          <button type="submit">Login</button>
          <span>Not a member?? <Link to='/signup'>Signup</Link></span>
        </form>

      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Login;
