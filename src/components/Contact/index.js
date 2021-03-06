import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// import { Link } from 'react-router-dom';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };
    return (
        <section className="section-header">
            <h2 >Contact me</h2>
            <div className="contact-padding">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-padding">
                        <label className="contact-label" htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className="form-padding">
                        <label className="contact-label" htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div className="form-padding">
                        <label className="contact-label" htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-message">{errorMessage}</p>
                        </div>
                    )}
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;