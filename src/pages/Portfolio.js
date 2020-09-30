import React from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import projects from "../../projects.json";

class Portfolio extends Component {
    state = {projects}

    render() {
        return (
            <div class="row justify-content-center ">
                <Header title="Portfolio"/>
                {this.state.projects.map(project => (
                <Project
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    repo={project.repo}
                    deployed={project.deployed}
                />
                ))}
            </div>
        );
    };
}