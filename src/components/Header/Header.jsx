import { NavLink } from "react-router-dom";

const Header = () => {

    const navLinks = <>
        <NavLink className="btn-info mr-5" to="/">Home</NavLink>
        <NavLink className="btn-info mr-5" to="/signin">Sign In</NavLink>
        <NavLink className="btn-info mr-5" to="/signup">Sign Up</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">WebAuth</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;