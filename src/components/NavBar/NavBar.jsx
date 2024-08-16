import { Logo } from "./components/Logo"
import { Cart } from "./components/Cartwidget";
import './NavBar.scss';

export const NavBar = () => {
    return <>
        <nav className="navBar">
            <div className="storeLogo-container">
                <Logo/>
            </div>
            <div className="storeName-container">
                <h3>Foxytech</h3>
            </div>
            <button className="cartNav-container">
                <Cart/>
            </button>
        </nav>
    </>
}