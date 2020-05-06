import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const AboutUs = props => {
    return (
        <Fragment>
            <div className="aboutUs" id='aboutUs'>
                <div className="aboutUs-content">
                    <div className="aboutUs-title"><span>O nas</span></div>
                    <div className="aboutUs-logo"></div>
                    <div className="aboutUs-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis veritatis a! Nisi odio molestias animi quaerat dolores beatae ratione.</p>
                    </div>
                    <div className="aboutUs-signature"></div>
                </div>
                <div className="aboutUs-image"></div>
            </div>
        </Fragment>
    )
}

AboutUs.propTypes = {

}

export default AboutUs;
