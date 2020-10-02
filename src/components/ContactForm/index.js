import React from 'react';

function ContactForm() {
    return (
            <form action="https://formspree.io/xknpwyak" method="POST" id="contact-form" class="col-xs-12 col-sm-11 col-md-11 col-lg-11" name="contact-form" >
                <div class="form-group">
                    <label for="name">Name</label>
                    <input name="sender name" type="text" class="form-control" id="name" placeholder="Name" />
                </div>

                <div class="form-group">
                    <label for="email">Email address</label>
                    <input name="sender email" type="email" class="form-control" id="email" placeholder="name@example.com" />
                </div>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="messsage" class="form-control" id="message" rows="4"></textarea>
                </div>
                <button type="submit" class="btn btn-secondary" value="submit">Submit</button>
            </form>    
    );
}

export default ContactForm;