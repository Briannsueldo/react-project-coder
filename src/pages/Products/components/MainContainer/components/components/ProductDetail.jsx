import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./ProductDetail.scss"
import { useState, useEffect, useContext } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { cartContext } from "../../../../../../context/CartContext"

export const ProductDetail = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const { cart, setCart } = useContext(cartContext);
    
    useEffect(() => {
        const dataBase = getFirestore();

        const docRef = doc(dataBase, "items", id);
        getDoc(docRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            } else {
                console.log(id);
            }
        })
    }, [id]);

    if (!item) {
        return <p>Obtaining data...</p>;
    }

    const handleCart = (item) => {
        setCart((prevCart) => {
            
            const checkCart = prevCart.find((cartItem) => cartItem.id === item.id);

            if (checkCart) {
                return prevCart.map((cartItem) => 
                    cartItem.id === item.id
                        ? { ...cartItem, amount: cartItem.amount + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, amount: 1 }];
            }
        });
    };

    return <>
        <div className="backButton-Container">
            <Link to={`/products`} className="backButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100">
                    <path fill="currentColor" d="M49.132 21.984L12.714 48.039a2.52 2.52 0 0 0-1.051 2.043v.006a2.52 2.52 0 0 0 1.059 2.048L49.14 78.023a2.51 2.51 0 0 0 2.612.183a2.51 2.51 0 0 0 1.361-2.236V63.787l32.709.001a2.514 2.514 0 0 0 2.515-2.516l-.001-22.541a2.515 2.515 0 0 0-2.516-2.516H53.114V24.029c0-.94-.53-1.803-1.367-2.237a2.51 2.51 0 0 0-2.615.192"/>
                </svg>
            </Link>
        </div>
        <section className="mainItem-container">
            <div className="itemSectionLeft-container">
                <div className="mainPicture-container">
                    <img src={item.img} alt="" />
                </div>
                <div className="carrouselPictures-container">

                </div>
            </div>
            <div className="itemSectionRight-container">
                <div className="mainInfo-container">
                    <div className="name-container">
                        <h2 className="nameInfo">{item.name}</h2>
                        <span className="votesInfo">
                            {item.votes}
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512">
                                <path fill="#2563EB" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"/>
                            </svg>
                        </span>
                    </div>
                    <div className="price-container">
                        <span>{item.price}</span>
                    </div>
                    <div className="payments-container">
                        <button className="buyButton">Buy now</button>
                        <button className="cartButton" onClick={ () => handleCart(item) }>Add to cart</button>
                    </div>
                </div>
                <div className="belowSection-container">

                </div>
            </div>
            </section>
    </>
}