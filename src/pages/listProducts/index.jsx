import {BASE_URL_API} from "../../Api/index"
import { BiStar } from "react-icons/bi"
import styles from "./listProducts.module.css"
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export const ListProducts =() => {
    const star = []
    for(let i = 0; i < 5; i++){
        star.push(i)
    }


    const [data, setData] = useState(() => { return [] })

    const listDataProducts = async () => {
        const res = await fetch(`${BASE_URL_API}/products`);
        const response = await res.json();
        setData(response)
    }

    useEffect(() => {
        listDataProducts();
    }, [])



    return (
        <>
        <div className={styles.container}>
            <div className={styles.list_products}>
                {data.map((item, index) => {
                    return(
                        <div className={styles.list_items} key={index}>

                           <Link to={`/ProductsId/${item.id}`} className={styles.link}>
                                <img src={item.image} alt="" width={200}/>
                                <h2>{item.title}</h2> 
                                <br />
                                <div className={styles.evaluations}>
                                    {star.map((index) => (<BiStar key={index} className={styles.star}/>))}
                                    <span> <strong> {item.rating.rate}</strong></span>
                                    <h4>{item.rating.count} Avaliações </h4>
                                </div>
                                <br />
                                <button className={styles.btn_info}><span> Mais informações</span></button>
                           </Link>

                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}