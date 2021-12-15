import "./Technologies.css";

const Technologies = () => {

    return (
        <div id="Technologies" className="tech-container">
            <h1 className="section-header">Technologies</h1>
            <ul>
                <li>
                    <i class="devicon-html5-plain colored"></i>
                    <p>HTML</p>
                </li>
                <li>
                    <i class="devicon-sass-original colored"></i>
                    <p>Sass</p>
                </li>
                <li>
                    <i class="devicon-javascript-plain colored"></i>
                    <p>Javascript</p>
                </li>
                <li>
                    <i class="devicon-nodejs-plain colored"></i>
                    <p>node.js</p>
                </li>
                <li>
                    <i class="devicon-mongodb-plain colored"></i>
                    <p>mongoDB</p>
                </li>
                <li>
                    <i class="devicon-postgresql-plain colored"></i>
                    <p>postgresql</p>
                </li>
                <li>
                    <i class="devicon-express-original colored"></i>
                    <p>express</p>
                </li>
                <li>
                    <i class="devicon-react-original colored"></i>
                    <p>React JS</p>
                </li>
                <li>
                    <i class="devicon-python-plain colored"></i>
                    <p>python</p>
                </li>
                <li>
                    <i class="devicon-django-line colored"></i>
                    <p>django</p>
                </li>
                <li>
                    <i class="devicon-heroku-original colored"></i>
                    <p>Heroku</p>
                </li>
                <li>
                    <i class="devicon-github-original colored"></i>
                    <p>GitHub</p>
                </li>
            </ul>
        </div>
    );
};

export default Technologies;