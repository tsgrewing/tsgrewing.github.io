import React from "react";
import Header from "../components/Header";

export default function Resume() {
    return (
        <section class="row justify-content-center">
            <Header title="Resume" />
            <iframe title="resumeFrame" className="resume-frame col-11" src={"../assets/Tony Grewing.pdf"}>
            </iframe>
            {/* <a className="resume-link" target="_blank" href="../assets/Tony Grewing.pdf">View PDF in new tab.</a> */}
        </section>
    );
};