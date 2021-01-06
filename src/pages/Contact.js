import React from 'react';
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <section class="row justify-content-center">
            <Header title="Contact Me" />
            <h5 class="col-xs-12 col-sm-11 col-md-11 col-lg-11">tsgrewing@gmail.com</h5>
            <ContactForm />  
        </section>
    );
};

export default Contact;