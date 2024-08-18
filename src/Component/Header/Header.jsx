import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className=" flex justify-between items-center py-10 px-5 bg-stone-300">
            <div>RealHero</div>
            <div className="">
                <ul className="flex gap-4 items-center">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/blog">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;