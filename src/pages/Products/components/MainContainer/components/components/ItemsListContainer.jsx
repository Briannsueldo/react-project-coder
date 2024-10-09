import { Link } from "react-router-dom";
import "./ItemsListContainer.scss";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../../../../../context/CartContext";

export const ShowProducts = ({ category, searchTerm }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { cart, setCart } = useContext(cartContext);



    useEffect(() => {
        const fetchData = async () => {
            const dataBase = getFirestore();
            const itemsCollection = collection(dataBase, "items");
            const snapshot = await getDocs(itemsCollection);
            const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

            const filtered = (
                category === 'all'
                    ? products
                    : products.filter((item) => item.category === category)
            );

            const searchFiltered = (
                category === "all"
                    ? filtered
                    : filtered.filter((item) =>
                        item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
            )

            setFilteredProducts(searchFiltered);
        }

        fetchData();
    }, [category, searchTerm]);

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

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return <>
        {filteredProducts.map((item) => (
            <article className="itemContainer" key={item.id}>
                <div className="itemPictureContainer">
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="itemInfoContainer">
                    <div className="itemInfo">
                        <div className="itemNameContainer">
                            <h3 className="itemName">{item.name}</h3>
                            <span className="itemVotes">{item.votes}/100</span>
                        </div>
                        <div className="itemPriceContainer">
                            <span className="itemPrice">{item.price}</span>
                        </div>
                    </div>
                    <div className="itemButton">
                        <button className="cartButton" onClick={ () => handleCart(item) }>Add to cart</button>
                        <Link to={`/products/${item.id}`} className="moreButton">See more</Link>
                    </div>
                </div>
            </article>
        ))}
    </>
}