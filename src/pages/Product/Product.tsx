import { useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import styles from './Product.module.css';

function Product() {

    const data = useLoaderData() as Product
    return (
        <div className={styles['product']}>
            <div className={styles['product-image-block']}>
                <img className={styles['product-image']} src={data.image} alt={data.title} />
            </div>
            <div className={styles['product-content']}>
                <h3 className={styles['product-title']}>{data.title}</h3>
                <p className={styles['product-description']}>{data.description}</p>
                <p className={styles['product-price']}>Цена: {data.price} рублей</p>
            </div>
        </div>
    )
}

export default Product;