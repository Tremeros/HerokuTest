import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Columns = props => {
    return (
        <Fragment>
            <section className="columns">
                <div className="container">
                    <div className="column">
                        <span>10</span>
                        <span>Oddanych worków</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis.</p>
                    </div>
                    <div className="column">
                        <span>5</span>
                        <span>Wspartych organizacji</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis.</p>
                    </div>
                    <div className="column">
                        <span>7</span>
                        <span>Zorganizowanych zbiórek</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis.</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

Columns.propTypes = {

}

export default Columns;
