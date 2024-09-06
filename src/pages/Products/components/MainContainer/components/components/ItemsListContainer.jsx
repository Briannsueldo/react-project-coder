import { Link } from "react-router-dom";
import "./ItemsListContainer.scss";
import products from "../../../../../../components/itemsData"

export const ShowProducts = () => {
    return <>
            {products.map((item) => {
                return <>
                    <article className="itemContainer" key={item.id}>
                        <div className="itemPictureContainer">
                            <img src={item.picture} alt={item.name} />
                        </div>
                        <div className="itemInfoContainer">
                            <div className="itemInfo">
                                <div className="itemNameContainer">
                                    <h3 className="itemName">{item.name}</h3>
                                </div>
                                <div className="itemPriceContainer">
                                    <span className="itemClass">{item.price}</span>
                                    <span className="itemVotes">{item.votes}</span>
                                </div>
                            </div>
                            <div className="itemButton">
                                <button className="cartButton">Add to cart</button>
                                <Link to={`${item.id}`}>See more</Link>
                            </div>
                        </div>
                    </article>
                </>
            })}
    </>
}