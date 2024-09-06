import { Logo } from "./components/Logo"
import { Cart } from "./components/Cartwidget";
import { PageSections } from "./components/PageSections";


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
                <Cart/>
            </button>
        </nav>
    </>
}