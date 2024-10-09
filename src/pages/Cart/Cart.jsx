
import React, { useContext, useState } from "react";
import { FormDetail } from "../../components/Form/FormDetail";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { cartContext } from "../../context/CartContext";
import "./Cart.scss"
import { toContainHTML } from "@testing-library/jest-dom/matchers";

export const Cart = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        address: "",
    })
    const [error, setError] = useState({
        name: "",
        email: "",
        address: "",
    })

    const infoChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()

        const localError = {}

        if (!buyer.name){
            localError.name = "Put a valid name";
        }

        if (!buyer.email){
            localError.email = "Put a valid email";
        }
        
        if (!buyer.address){
            localError.address = "Put a valid address";
        }

        if (Object.keys(localError).length === 0) {
            addToCart()
        } else {
            setError(localError)
        }
    }

    const addToCart = () => {
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const purchase = {
            buyer,
            items: cart,
            date : new Date(),
            total: cartPrice()
        }

        addDoc(orderCollection, purchase)
        .then(res => console.log(res.id))
    }

    console.log(buyer)

    const { cart, cartPrice, cleanCart } = useContext(cartContext)

    const clear = () => {
        cleanCart();
    }

    return <>
        <FormDetail
            infoChange={infoChange}
            submit={submit}
            formData={buyer}
            error={error}
            disabled={cart.length === 0}
        />
        <div className="info-container">
            <span>Image</span>
            <span>Name</span>
            <span>Amount</span>
        </div>
        {cart.map((cartItem) => (
            <div className="cartItem-container">
                <img className="cartItem-img" src={cartItem.img} alt={cartItem.img}/>
                <h4 className="cartItem-name">{cartItem.name}</h4>
                <span className="cartItem-amount">{cartItem.amount}</span>
            </div>
        ))}
        <span className="finalPrice">Total: ${cartPrice()}</span>
        <button className="clearButton" onClick={clear}>Clean Cart</button>
    </>
} 