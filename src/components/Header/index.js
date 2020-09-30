import React from 'react';
import "./style.css";

export default function Header({ title }) {
    return (
        <header class="col-xs-12 col-sm-11 col-md-11 col-lg-11">
        <h2 class="mx-left">{title}</h2>
        </header>
    )
}