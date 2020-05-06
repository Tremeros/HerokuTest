import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {register} from '../../actions/auth';
import {setAlert} from '../../actions/alert';
import Alert from '../Alert';

const Register = ({register, setAlert, isAuthenticated}) => {


    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: ''
      });

      const {email, password, password2} = formData;
      const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

      const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
          setAlert('Password do not match', 'danger');
        console.log('Password do not match');
        } else {
         register({email, password});
         console.log('Success');
        }
      }
   
      if(isAuthenticated) {
        return <Redirect to='/' />
      }

    return (
        <Fragment>
            <div class="login">
                <div class="login-title">
                    <span>Załóż konto</span>
                </div>
                <Alert />
                <div class="login-logo"></div>
                <form action="" class="login-form" onSubmit={e => onSubmit(e)}>
                        <p>Email</p>
                        <input type="email" name="email" value={email} onChange={e => onChange(e)}/>
                        <p>Hasło</p>
                        <input type="password" name="password" value={password} onChange={e => onChange(e)}/>
                        <p>Powtórz hasło</p>
                        <input type="password" name="password2" value={password2} onChange={e => onChange(e)}/>
                        <div class="login-buttons">
                    <div class="login-buttons">
                        <input type="submit" value="Wyslij" class="btn"/>
                        <Link to="/login" class='btn'>Zaloguj się</Link>
                </div>
                </div>
                </form>
                
            </div>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })

export default connect(mapStateToProps, {register, setAlert})(Register);
