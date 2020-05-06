import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

const Login = ({login, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
   
      const { email, password } = formData;
      const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
   
      const onSubmit = async e => {
        e.preventDefault();
         login(email, password);
        }
        // Redirect if loged in
   
        if(isAuthenticated) {
          return <Redirect to='/' />
        }


    return (
        <Fragment>
         <div class="login">
            <div class="login-title">
                <span>Zaloguj się</span>
            </div>
            <div class="login-logo"></div>
            <form onSubmit={e => onSubmit(e)} class="login-form">
                    <p>Email</p>
                    <input type="email" name="email" value={email} onChange={e => onChange(e)}/>
                    <p>Hasło</p>
                    <input type="password" minlength="6" name="password" value={password} onChange={e => onChange(e)}/>
                    <div class="login-buttons">
                    <input type="submit" value="Wyslij" class="btn"/>
                    <Link to="/register" class='btn'>Załóż konto</Link>
            </div>
            </form>
            
        </div>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })
  
  export default connect(mapStateToProps, {login})(Login);
