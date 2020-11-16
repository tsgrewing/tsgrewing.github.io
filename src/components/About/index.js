import React from 'react';
import image from "../../assets/images/keywest.JPG";

export default function About () {
    return (
        <div class="col-xs-12 col-sm-11 col-md-11 col-lg-11">              
        <section class="col-xs-12">
            <img class="img-fluid col-xs-12 col-md-4 float-left mb-2 mr-2" src={image} alt="Photo of Tony in Key West" />
            <p>
                Hi, I'm Tony, a software and web developer currently based in Tennessee. I have experience working across the stack and creating apps on my own or in collaboration with a team. I primarily work in JavaScript, Node.js, Express.js and React, but I am always ready to branch out and take on new technologies and learn new skills. Take a look at some of my past projects for a better idea of my skills and strengths, and don't hesitate to get in touch with me to offer feedback or ideas, or just to say hello. 
            </p>
            <p>
                When I'm not writing code you can find me enjoying the great outdoors, watching(or occasionally playing) soccer, playing video games or exploring the local brewery and coffee scene. 
            </p>    
        </section>
        </div>
    )
}