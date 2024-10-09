
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/Main"; 
import { Contact } from "./pages/Contact";
import { ProductsMainPage } from "./pages/Products/Products";
import { ProductDetail } from "./pages/Products/components/MainContainer/components/components/ProductDetail";
import { Cart } from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartContext";

export const App = () => {

    /* const [cart, setCart] = useState([]);

    const cartCount = () => {
        return cart.reduce((total, items) => total + items.amount, 0);
    }

    const cartPrice = () => {
        return cart.reduce((total, items) => total + items.price * items.amount, 0);
    }

    const cleanCart = () => {
        setCart([]);
    } */

    return <>
        <CartProvider>
            <BrowserRouter>
                <NavBar/>

                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/products" element={<ProductsMainPage/>}/>
                    <Route path="/products/:id" element={<ProductDetail/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>

            </BrowserRouter>
        </CartProvider>
    </>
}