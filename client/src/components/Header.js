import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Auth from './Auth';
import * as Scroll from 'react-scroll';
import {Link, Element , Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

const Header = props => {
    return (
       <Fragment>
            <nav className='navbar'>
                    <div className="nav-banner"></div>
                    <div className="nav-content">
                        <div className="nav-links">
                            <Auth />
                            <div className="nav-links-down">
                                <span>Start</span>
                                <span>
                                <Link
                                    activeClass="active"
                                    to="steps"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >O co chodzi?</Link>
                                </span>
                                <span>
                                <Link
                                    activeClass="active"
                                    to="aboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >O nas</Link>
                                </span>
                                <span>
                                <Link
                                    activeClass="active"
                                    to="help"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >Fundacje i organizacje</Link>
                                </span>
                                <span>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >Kontakt</Link>
                                </span>
                            </div>
                        </div>
                        <div className="nav-title">
                            <span>Zacznij pomagać!</span>
                            <span> Oddaj niechciane rzeczy w zaufane ręce</span>
                        </div>
                        <div className="nav-logo"></div>
                        <div className="nav-buttons">
                            <a href="" className='button'>
                                <span>Oddaj</span>
                                <span>rzeczy</span>
                            </a>
                            <a href="" class='button'>
                                <span>Zorganizuj</span>
                                <span>zbiórkę</span>
                            </a>
                        </div>
                    </div>
            </nav>
       </Fragment>
    )
}

Header.propTypes = {

}

export default Header;
