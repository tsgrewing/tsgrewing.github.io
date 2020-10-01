import React from "react";
import "./style.css";

export default function Nav() {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-secondary">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="navbar-brand">Tony Grewing</h1>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="/">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="/resume">Resume</a></li>
                    </ul>
                </div>
            </div>
          </nav>
    </header>
    );
};