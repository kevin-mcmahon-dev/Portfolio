import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className='logo'>
                <div className='spanHeader'>Kevin McMahon - Full-Stack Developer</div>
            </div>
            <div className='links'>
                <a href="#About"><div className='linkContainer spanHeader'>About</div></a>
                <a href="#Technologies"><div className='linkContainer spanHeader'>Technologies</div></a>
                <a href="#Projects"><div className='linkContainer spanHeader'>Projects</div></a>
                <a href="#Contact"><div className='linkContainer spanHeader'>Contact</div></a>
                <a href="https://github.com/kevin-mcmahon-dev/Portfolio/files/7722499/Kevin.McMahon.-.Resume.Dec.2021.pdf" target="_blank"><div className='linkContainer spanHeader'>Resume</div></a>
            </div>
        </header>
    );
};

export default Header;