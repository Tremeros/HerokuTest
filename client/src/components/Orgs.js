import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const Orgs = props => {
    
        const foundations = [
            {title: "Organizacja 1", description: "Lorem ipsum", features: "Lorem, ipsum"},
            {title: "Organizacja 2", description: "Lorem ipsum", features: "Lorem, ipsum"},
            {title: "Organizacja 3", description: "Lorem ipsum", features: "Lorem, ipsum"},
            {title: "Organizacja 4", description: "Lorem ipsum", features: "Lorem, ipsum"},
            {title: "Organizacja 5", description: "Lorem ipsum", features: "Lorem, ipsum"},
            {title: "Organizacja 6", description: "Lorem ipsum", features: "Lorem, ipsum"}
          ]
        
        
        const [currentPage, setCurrentPage] = useState(1);
        const [elementPerPage, setElementPerPage] = useState(3);
        
        const indexOfLastElement = currentPage * elementPerPage;
        const indexOfFirstElement = indexOfLastElement - elementPerPage;
        const currentElement = foundations.slice(indexOfFirstElement, indexOfLastElement);
        
        const pageNumbers =[];
        
         for(let i = 1; i <= Math.ceil(foundations.length / elementPerPage); i++) {
           pageNumbers.push(i);
         }
    
        return (
            <Fragment>
                <ul className="help-list">
                    {currentElement.map((el, index) => (
                        <li>
                            <div className="list-upper-text">
                                <span>{el.title}</span>
                                <p>{el.features}</p>
                            </div>
                            <div className="list-lower-text">
                                <p>{el.description}</p>
                            </div>
                       </li>
                    ))}   
                </ul>
                <div className="pagination">
                        {
                        pageNumbers.map((el, index) => {
                            return <button className='pagin-btn' key={index} onClick={() => setCurrentPage(el)}>{el}</button>
                        })
                        }
                </div>
            </Fragment>
    )
}

Orgs.propTypes = {

}

export default Orgs;
