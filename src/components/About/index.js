import React from 'react';
import image from "../../assets/images/keywest.JPG";

export default function About () {
    return (
        <div class="col-xs-12 col-sm-11 col-md-11 col-lg-11">              
        <section class="col-xs-12">
            <img class="img-fluid col-xs-12 col-md-4 float-left mb-2 mr-2" src={image} alt="Photo of Tony in Key West" />
            <p>
                My name is Tony, and my introduction to coding was an HTML class in middle school, we mostly just covered the basics, but those stuck with me. A few years later I dove a little deeper into web design by using css to personalize a myspace page. I started out by just trying to make my page look less boring, but ended up spending hours and hours changing anything and everything I could until it barely resembled a myspace page at all. Unfortunately I did not really continue with any sort of coding after high school, and most of what I had learned eventually faded from my memory. 
            </p>
            <p>
                Working for mostly small businesses has given me the opportunity to work on a wide variety of projects, and I have found myself tasked with maintaining existing websites and online stores fairly often. Keeping pages up to date and adding/removing elements without compromising the site's overall styling meant I spent a lot of time looking through existing code, searching online for short tutorials, and a lot of trial and error. I recently decided it was time to take the leap and start seriously working on my coding knowledge and skills. Looking forward to expanding my existing knowledge and learning some new skills. 
            </p>    
        </section>
        </div>
    )
}