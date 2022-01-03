import "./Contact.css";

const Contact = () => {

    return (
        <div id="Contact" className="contact-container">
            <h1 className="contact-header">Contact</h1>
            <h2 className="contact-content">I love connecting with others interested in tech, so please do not hesitate to reach out! The best ways to contact me are below.</h2>
            <div className="icon-container">
                <ul>
                    <li><a href="https://www.linkedin.com/in/kevin-mcmahon-dev/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/kevin-mcmahon-dev" target="_blank"><i class="fab fa-github"></i></a></li>
                    {/* <li><i class="fab fa-facebook"></i></li> */}
                    <li><a href="mailto: kevinmcm1229@gmail.com" target="_blank"><i class="far fa-envelope"></i></a></li>
                    <li><a href="https://github.com/kevin-mcmahon-dev/kevin-mcmahon-dev.github.io/files/7803871/Kevin.McMahon.-.Resume.Jan.2022.pdf" target="_blank"><i class="far fa-file"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
