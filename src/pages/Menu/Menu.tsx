import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Product } from "../../interfaces/product.interface";
import { ServerURL } from "../../helpers/API";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './Menu.module.css';
import ProductList from "./ProductList/ProductList";

export function Menu() {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | undefined>();

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${ServerURL}/products`);
            // console.log(data);
            setProducts(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(`${error.name} - ${error.message}`);
            }
        }
    }

    useEffect(() => {
        getProduct()
    }, []);

    return <div>
        
        <h2 className={styles['title']}>Наши товары:</h2>
        {error && <div>{error}</div>}
        <ProductList products={products} />

    </div>
}