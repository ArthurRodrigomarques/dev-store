import styles from "./productsId.module.css"
import {BASE_URL_API} from "../../Api/index"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export const ProductsId =() => {
    const [itemId, setItemId] = useState([])
    const [loaded, setLoaded] = useState(false)

    const {id} = useParams();

    const getItemId = async () => {
        setLoaded(true);
        const res = await fetch(`${BASE_URL_API}/products/${id}`);
        const response = await res.json();
        setLoaded(false);
        setItemId(response);
    }

    useEffect(() => {
        getItemId()
    }, [])

    return (
        <>
            { loaded && <h3>Aguarde ...</h3>}
            <h1>Listar item especifico</h1>
            <div>
                <img src={itemId.image} alt="" width={200} />
                <h2>{itemId.title}</h2>
                <strong>R$: {itemId.price}</strong>
                <p>{itemId.description}</p>
                <h3>{itemId.category}</h3>
            </div>
        </>
    )
}