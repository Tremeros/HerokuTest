import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Columns from './Columns';
import Steps from './Steps';
import AboutUs from './AboutUs';
import Help from './Help';
import Contact from './auth/Contact';

const Landing = props => {
    return (
        <Fragment>
            <Header />
            <Columns />
            <Steps />
            <AboutUs />
            <Help />
            <Contact />
        </Fragment>
    )
}

Landing.propTypes = {

}

export default Landing;
