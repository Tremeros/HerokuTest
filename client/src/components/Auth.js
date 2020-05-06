import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../actions/auth';

const Auth = ({isAuthenticated, logout}) => {

    
   
  
 

    return (
        <Fragment>
            <div className="nav-links-up">
              {isAuthenticated ? <Link to='/logout'>Wyloguj</Link> : <Link to="/login">Zaloguj</Link>}
              {!isAuthenticated && <Link to="/register">Załóż konto</Link>}
            </div>
        </Fragment>
    )
}

Auth.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })

export default connect(mapStateToProps, {logout})(Auth);
