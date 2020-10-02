import React from 'react';

export default function Wrapper(props) {
        return (
            <main class="container main-content-wrapper justify-content-center align-items-center">
                {props.children}
            </main>
        );
}