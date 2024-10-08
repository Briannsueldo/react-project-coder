import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { FormDetail } from "../components/Form/FormDetail";
import { collection, getFirestore, addDoc } from "firebase/firestore";

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
            items: Cart,
            total: 5,
            date : new Date()
        }

        addDoc(orderCollection, purchase)
        .then(res => console.log(res.id))
    }

    console.log(buyer)

    return <>
        <FormDetail
            infoChange={infoChange} submit={submit} formData={buyer} error={error}/>
    </>
} 