import React from "react";
import Header from "../components/Header";

export function Resume() {
    return (
        <section class="row justify-content-center">
            <Header title="Resume" />
            <iframe class="resume-frame col-11" src="assets/Tony Grewing.pdf">
            </iframe>
            <a class="resume-link" target="_blank" href="../../public/assets/Tony Grewing.pdf">View PDF in new tab.</a>
        </section>
    );
};