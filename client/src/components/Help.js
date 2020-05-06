import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Founds from './Founds';
import Orgs from './Orgs';
import Collections from './Collections';

const Help = props => {

    const [pagin, setPagin] = useState(<Founds />);

    const changePagin = (e, value) => {
        e.preventDefault();
        setPagin(value);
    } 

    return (
        <Fragment>
            <section className="help" id='help'>
                <div className="help-title">
                    <span>Komu pomagamy?</span>
                </div>
                <div className="help-logo"></div>
                <div className="help-buttons">
                    <a href="" onClick={e => changePagin(e, <Founds />)}><span>Fundacjom</span></a>
                    <a href="" onClick={e => changePagin(e, <Orgs />)}>
                        <span>Organizacjom</span>
                        <span>pozarządowym</span>
                    </a>
                    <a href="" onClick={e => changePagin(e, <Collections />)}>
                        <span>Lokalnym</span>
                        <span>zbiórkom</span>
                    </a>
                </div>
                <div className="help-text">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmuja, komu pomagaja i czego potrzebuja</p>
                </div>
                {pagin}
            </section>
        </Fragment>
    )
}

Help.propTypes = {

}

export default Help;
