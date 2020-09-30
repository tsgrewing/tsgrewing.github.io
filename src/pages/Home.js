import React from "react";
import Header from "../components/Header";
import About from "../components/About";

export function Home() {
    return (
        <div class="row justify-content-center ">
            <Header title="About Me"/>
            <About />
        </div>
    )
}