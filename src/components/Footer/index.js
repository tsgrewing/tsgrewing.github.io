import React from "react";

export function Footer() {
    return (
        <footer className="footer container-fluid">
        <section class="footer-content">
            <a class="social-icon" href="mailto:tsgrewing@gmail.com"  target="_blank"><span class="far fa-envelope"></span></a>  
            <a class="social-icon" href="https://www.instagram.com/tgrewing/" target="_blank"><span class="fab fa-instagram"></span></a>
            <a class="social-icon" href="https://github.com/tsgrewing" target="_blank"><span class="fab fa-github"></span></a>
            <a class="social-icon" href="https://linkedin.com/in/tony-grewing-604aba7b/" target="_blank"><span class="fab fa-linkedin"></span></a> 
            <a class="social-icon" href="tel:6159726960"><span class="social-icon fas fa-phone-square"></span> 615.972.6960</a>
            <br />
            <span class="far fa-copyright"></span> 2020 Tony Grewing 
        </section>
        </footer>
    );
};