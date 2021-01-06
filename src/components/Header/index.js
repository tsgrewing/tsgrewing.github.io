import React from 'react';

export default function Header({ title, email }) {
    return (
        <header class="col-xs-12 col-sm-11 col-md-11 col-lg-11">
        <h2 class="mx-left">{title}</h2>
        <h5 class="mx-left">{email}</h5>
        </header>
    )
}