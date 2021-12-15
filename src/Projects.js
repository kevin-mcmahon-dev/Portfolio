import "./Projects.css";

const Projects = () => {

    return (
        <div id="Projects" className="projects-container">
            <h1 className="SectionHeader">Projects</h1>
            <section>
                <img src="https://user-images.githubusercontent.com/75190250/146046952-31b8ca87-7378-462e-b36c-6129d882a40c.png" alt="Dodge the Boulders image"></img>
                <h1>Dodge the Boulders</h1>
                <h2><a href="https://kevin-mcmahon-dev.github.io/dodge-the-boulders/">Live</a> | <a href="https://github.com/kevin-mcmahon-dev/dodge-the-boulders">Code</a> </h2>
                <h2>HTML, CSS, Javascript</h2>
                <ul>
                    <li>Developed game in which the player must move from start zone to end zone while avoiding moving obstacles</li>
                    <li>Created game structure with HTML and CSS Grid and animated moving blocks by using JavaScript with jQuery</li>
                    <li>Utilized arrow-key inputs for player motion and implemented a 2D collision detection system for loss conditions</li>
                </ul>
                
            </section>
            <section>
            <img src="https://user-images.githubusercontent.com/75190250/146048162-670684b7-c5df-4748-a11e-22e63741f5e5.png" alt="Sell-Books-Up Image"></img>
            <h1>Sell-Books-Up</h1>
            <h2><a href="https://sell-books-up.herokuapp.com/">Live</a> | <a href="https://github.com/kevin-mcmahon-dev/Sell-Books-Up">Code</a> </h2>
            <h2>JavaScript, Node, Express, MongoDB, Mongoose</h2>
            <ul>
                <li>Collaborated with two other developers to create a MEN Stack application that allows users to review books</li>
                <li>Individually focused on CRUD functionality, route structure, user authentication, and app connection with back-end</li>
                <li>Full CRUD functionality accessible only through Admin account, standard users can access book review form</li>
                <li>Established cloud database using Mongo Atlas and successfully deployed the application with Heroku</li>
            </ul>
            </section>
        </div>
    );
};

export default Projects;