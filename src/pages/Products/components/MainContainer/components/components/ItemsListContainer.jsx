import { Link } from "react-router-dom";
import "./ItemsListContainer.scss";
import products from "../../../../../../components/itemsData"

export const ShowProducts = ({ category }) => {

    const filteredProducts = (
        category === 'all'
            ? products
            : products.filter((item) => item.category === category)
    );

    return <>
        {filteredProducts.map((item) => (
            <article className="itemContainer" key={item.id}>
                <div className="itemPictureContainer">
                    <img src={item.picture} alt={item.name} />
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
                        <Link to={`${item.id}`} className="moreButton">See more</Link>
                    </div>
                </div>
            </article>
        ))}
    </>
}