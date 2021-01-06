import React from 'react';

export default function Header({ title, subtitle }) {
    return (
        <header class="col-xs-12 col-sm-11 col-md-11 col-lg-11">
        <h2 class="mx-left">{title}</h2>
        <h5 class="col-xs-12 col-sm-11 col-md-11 col-lg-11">{subtitle}</h5>
        </header>
    )
}