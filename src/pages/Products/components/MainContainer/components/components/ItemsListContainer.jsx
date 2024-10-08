import { Link } from "react-router-dom";
import "./ItemsListContainer.scss";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";

export const ShowProducts = ({ category, searchTerm }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

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

            /* const searchFiltered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ); */

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
                        <button className="cartButton">Add to cart</button>
                        <Link to={`/products/${item.id}`} className="moreButton">See more</Link>
                    </div>
                </div>
            </article>
        ))}
    </>
}