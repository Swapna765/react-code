import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="nav">
            <h3>Swapna</h3>
            <div>
                <Link to='/'>Home page</Link>
                <Link to='/about'>About page</Link>
                <Link to='/contact'>Contact page</Link>
            </div>
        </div>
    )
}

export default Navbar