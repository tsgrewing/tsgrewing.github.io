import React from 'react';
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <section class="row justify-content-center">
            <Header title="Contact Me" />
            <ContactForm />  
        </section>
    );
};

export default Contact;