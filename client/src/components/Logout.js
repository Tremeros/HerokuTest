import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../actions/auth';
import PropTypes from 'prop-types';

const Logout = ({logout}) => {

    useEffect(() => {
        logout();
      }, [logout]);

    return (
        <Fragment>
          <section className="logout">
            <div className="logout-title">
                <span>Wylogowanie nastąpiło</span>
                <span>pomyslnie!</span>
            </div>
            <div className="logout-logo"></div>
            <Link to='/'>Strona główna</Link>
          </section>
        </Fragment>
    )
};

Logout.propTypes = {
    logut: PropTypes.func.isRequired
  }

export default connect(null, {logout})(Logout);