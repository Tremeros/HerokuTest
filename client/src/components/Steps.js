import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Steps = props => {
    return (
        
            <section className="steps" id='steps'>
                <div className="steps-title">
                    <span>Wystarczą 4 proste kroki</span>
                </div>
                <div className="steps-logo"></div>
                <div className="steps-columns">
                    <Link to='/login' className="steps-column">
                        <div className="steps-column-icon icon-1"></div>
                        <div className="steps-column-title"><span>Wybierz rzeczy</span></div>
                        <div className="steps-column-line"></div>
                        <div className="steps-column-text"><p>Ubrania, zabawki, sprzęt i inne</p></div>
                    </Link>
                    <Link to='/login' className="steps-column">
                        <div className="steps-column-icon icon-2"></div>
                        <div className="steps-column-title"><span>Spakuj je</span></div>
                        <div className="steps-column-line"></div>
                        <div className="steps-column-text"><p>Skorzystaj z wokrów na śmieci</p></div>
                    </Link>
                    <Link to='/login' className="steps-column">
                        <div className="steps-column-icon icon-3"></div>
                        <div className="steps-column-title"><span>Zdecyduj komu chcesz pomóc</span></div>
                        <div className="steps-column-line"></div>
                        <div className="steps-column-text"><p>Wybierz zaufane miejsce</p></div>
                    </Link>
                    <Link to='/login' className="steps-column">
                        <div className="steps-column-icon icon-4"></div>
                        <div className="steps-column-title"><span>Zamów kuriera</span></div>
                        <div className="steps-column-line"></div>
                        <div className="steps-column-text"><p>Kurier przyjedzie w dogodnym terminie</p></div>
                    </Link>
                </div>
                <div className="steps-button">
                    <Link to='/login' className='button'>
                        <span>Oddaj</span>
                        <span>rzeczy</span>
                    </Link>
                </div>
            </section>
       
    )
}

Steps.propTypes = {

}

export default Steps;
