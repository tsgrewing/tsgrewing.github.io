import React from "react";

export function Resume() {
    return (
        <section class="row justify-content-center">
            <header class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
            <h2 class="mx-left">Resume</h2>
            </header> 
            <iframe class="resume-frame col-11" src="assets/Tony Grewing.pdf">
            </iframe>
            <a class="resume-link" target="_blank" href="assets/Tony Grewing.pdf">View PDF in new tab.</a>
        </section>
    );
};