import React from 'react';
import "./style.css";

export default function Project(props) {
    return (
        <section class="col-xs-12 col-sm-6">
            <div class="img-thumbnail">
                <a class="portfolio-link" href={props.deployed}>
                    <img class="portfolio-img img-fluid" src={require(`../../assets/images/${props.image}`)} data-still={props.image} alt={props.title} />
                    <div class="portfolio-title caption">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    </div>
                </a>
                <a class="repo-link" href={props.repo}>
                    <p>GitHub Repository</p>
                </a>
            </div>
        </section>
    )
}

