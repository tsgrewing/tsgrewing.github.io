import React from 'react';

export default function Header({ title, subtitle }) {
    return (
        <header class="col-xs-12 col-sm-11 col-md-11 col-lg-11">
        <h2 class="mx-left">{title}</h2>
        <a href="mailto:tsgrewing@gmail.com"  target="_blank"><h5 class="mx-left">{subtitle}</h5></a>
        </header>
    )
}