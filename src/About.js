import "./About.css";

const About = () => {

    return (
        <div id="About" className="container">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGR0PfBU0HYKA/profile-displayphoto-shrink_800_800/0/1607123434137?e=1645056000&v=beta&t=O9TNjzHinKKTAGwCI1h9Q-xFGPCK0WiUzGL6QADPYfg" className="profile-image"></img>
            <div className="about-container">
                {/* <h1 className="header">About me:</h1> */}
                {/* <p className="content">Hi I'm Kevin McMahon! I'm a full-stack software engineer with a background in petroleum engineering and commercial property risk analysis. My experience affords me a unique perspective when approaching development. I love collaborating with others to transform ideas into actualities.</p>
                 */}
                <p className="content">Hi, I am Kevin McMahon. I'm a full-stack developer based in Denver, CO currently looking for a front-end, back-end, or full-stack position. Before pursuing software development, I received my B.S. in Petroleum Engineering from Colorado School of Mines. Beyond development, I love reading, hiking, traveling, and exploring local breweries. Let's connect!</p>
            </div>
        </div>
    );
};

export default About;