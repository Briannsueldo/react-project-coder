import { useParams } from "react-router-dom"
import products from "../../../../../../components/itemsData"

export const ProductDetail = () => {
    
    const { itemId } = useParams();

    console.log(itemId)

    const selectedProduct = products.find((item)=> item.id === parseInt(itemId));

    console.log(selectedProduct)

    return <>
        <div>
            <h2>Producto {itemId} </h2>
        </div>
    </>
}