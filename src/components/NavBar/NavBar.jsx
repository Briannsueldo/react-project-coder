import { Logo } from "./components/Logo"
import { Cart } from "./components/Cartwidget";
import { PageSections } from "./components/PageSections";
import { Link } from "react-router-dom";

import './NavBar.scss';

export const NavBar = () => {
    return <>
        <nav className="navBar">
            <div className="storeLogo-container">
                <Logo/>
            </div>
            <div className="storeSections-container">
                <PageSections/>
            </div>
            <button className="cartNav-container">
                <Link className="linkToCart" to={`/Cart`}>
                    <Cart/>
                </Link>
            </button>
        </nav>
    </>
}