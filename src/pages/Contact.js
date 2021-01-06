import React from 'react';
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <section class="row justify-content-center">
            <Header title="Contact Me" />
            <h4>You can also reach me directly at: tsgrewing@gmail.com</h4>
            <ContactForm />  
        </section>
    );
};

export default Contact;