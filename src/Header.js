import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className='logo'>
            {/* <Link to={`/`}> */}
                <div className='spanHeader'><span>Kevin McMahon Site</span></div>
            {/* </Link> */}
            </div>
            <div className='links'>
                {/* <Link to={`/register`}>
                    <div className='linkContainer spanHeader'><span>Register</span></div>
                </Link> */}
                <a href="#About"><div className='linkContainer spanHeader'><span>About</span></div></a>
                <a href="#Technologies"><div className='linkContainer spanHeader'><span>Technologies</span></div></a>
                <a href="#Projects"><div className='linkContainer spanHeader'><span>Projects</span></div></a>
                <a href="#Contact"><div className='linkContainer spanHeader'><span>Contact</span></div></a>
            </div>
        </header>
    );
};

export default Header;