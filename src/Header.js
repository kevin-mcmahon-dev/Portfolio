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
                <div className='linkContainer spanHeader'><span>About</span></div>
                <div className='linkContainer spanHeader'><span>Skills</span></div>
                <div className='linkContainer spanHeader'><span>Projects</span></div>
                <div className='linkContainer spanHeader'><span>Contact</span></div>
            </div>
        </header>
    );
};

export default Header;