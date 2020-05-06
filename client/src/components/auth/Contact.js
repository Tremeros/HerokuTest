import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sendContact} from '../../actions/contacts';
import Alert from '../Alert';

const Contact = ({sendContact}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const {name, email, message} = formData;
      const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

      const onSubmit = async e => {
         e.preventDefault();
         sendContact({name, email, message});
      }


    return (
        <Fragment>
            <section className="contact" id='contact'>
                <div className="contact-form">
                    <div className="contact-form-title"><span>Skontaktuj sie z nami</span></div>
                    <Alert />
                    <div className="contact-form-logo"></div>
                    <form className="contact-form-inputs" onSubmit={e => onSubmit(e)}>
                        <div className="form-group-upper">
                            <div>
                                <p>Wpisz swoje imie</p>
                                <input type="text" name="name" value={name} onChange={e => onChange(e)}/>
                            </div>
                            <div>
                                <p>Wpisz swój email</p>
                                <input type="email" name="email" value={email} onChange={e => onChange(e)}/>
                            </div>
                        </div>
                        <div className="form-group-lower">
                            <p>Wpisz swoja wiadomość</p>
                            <textarea name='message' value={message} onChange={e => onChange(e)}></textarea>
                        </div>
                        <input type="submit" value="Wyslij" className="btn btn-primary"/>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

Contact.propTypes = {
  sendContact: PropTypes.func.isRequired
}

export default connect(null, {sendContact})(Contact);
