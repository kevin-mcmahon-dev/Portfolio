import "./Projects.css";

const Projects = () => {

    return (
        <div id="Projects" className="projects-container">
            <h1 className="section-header">Projects</h1>
            <section className="project-section">
                <img className="project-image" src="https://user-images.githubusercontent.com/75190250/146254098-4153b576-b4e9-4ff0-83f1-cc1e5bd87d7b.png" alt="Dodge the Boulders image"></img>
                <div className="project-detail">   
                    <h1 className="project-title">Dodge the Boulders - <a href="https://kevin-mcmahon-dev.github.io/dodge-the-boulders/" target="_blank">Live</a> | <a href="https://github.com/kevin-mcmahon-dev/dodge-the-boulders" target="_blank">Code</a> </h1>
                    <h2 className="tech-list">HTML, CSS, Javascript</h2>
                    <ul>
                        <li>Developed game in which the player must move from start zone to end zone while avoiding moving obstacles</li>
                        <li>Created game structure with HTML and CSS Grid and animated moving blocks by using JavaScript with jQuery</li>
                        <li>Utilized arrow-key inputs for player motion and implemented a 2D collision detection system for loss conditions</li>
                    </ul>
                </div>
            </section>
            <section className="project-section">
            <img className="project-image" src="https://user-images.githubusercontent.com/75190250/146048162-670684b7-c5df-4748-a11e-22e63741f5e5.png" alt="Sell-Books-Up Image"></img>
            <div className="project-detail">     
                <h1 className="project-title">Sell-Books-Up - <a href="https://sell-books-up.herokuapp.com/" target="_blank">Live</a> | <a href="https://github.com/kevin-mcmahon-dev/Sell-Books-Up" target="_blank">Code</a></h1>
                <h2 className="tech-list">JavaScript, Node, Express, MongoDB, Mongoose</h2>
                <ul>
                    <li>Collaborated with two other developers to create a MEN Stack application that allows users to review books</li>
                    <li>Individually focused on CRUD functionality, route structure, user authentication, and app connection with back-end</li>
                    <li>Full CRUD functionality accessible only through Admin account, standard users can access book review form</li>
                    <li>Established cloud database using Mongo Atlas and successfully deployed the application with Heroku</li>
                </ul>
            </div>
            </section>
        </div>
    );
};

export default Projects;