import styles from "./productsId.module.css"
import {BASE_URL_API} from "../../Api/index"
import { Link, useParams } from "react-router-dom"
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

            <div className={styles.btn}>
                <button className={styles.go_back}><Link to="/" className={styles.link}> Voltar</Link> </button>
            </div>
            <ul className={styles.ul}>
                <div className={styles.info}>
                    <img src={itemId.image} alt="" width={200} />
                    <h2>{itemId.title}</h2>
                    <strong>R$: {itemId.price}</strong>
                    <p>{itemId.description}</p>
                    <h3>{itemId.category}</h3>
                </div>
            </ul>
        </>
    )
}