import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold text-5xl mt-10 text-red-500 text-center">404 NOT FOUND</h1>
            <NavLink to="/">
                <button className="btn btn-accent mt-10">Back Home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;