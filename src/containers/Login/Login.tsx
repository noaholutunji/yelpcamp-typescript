import React, { useState, SyntheticEvent } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import axios from '../../axios-order';
import Navbar from '../../components/Navigation/Navbar';

const Login = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post('/login', data)
      .then(response => {
        if (response.data) {
          cookie.set('token', response.data.token);
          cookie.set('user', JSON.stringify(response.data.user));
          Router.push('/campgrounds');
        } else {
          console.log('Login Error');
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <div style={{ width: '30%', margin: '25px auto' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="username"
                required
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
