import React, { useState, useEffect } from 'react';
import { getProds } from '../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
/* import { dataBase } from "../firebase/firebase" */
/* import { getDocs, collection, query } from "../firebase/firebase" */

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    /* useEffect(() => {
    const productsCollection = collection(dataBase, 'productos')
    const q = query(productsCollection, where('category', '==', 'Mothers')) */

    /* getDocs(q)
        .then(result => {
            const lista = result.map(product => {
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            console.log(lista)
        })
    }) */
    

    /* useEffect(() => {
    const productsCollection = collection(dataBase, 'productos')
    const q = query(productsCollection, where('category', '==', 'Mothers')) */

    /* getDocs(q)
        .then(result => {
            const lista = result.map(product => {
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            console.log(lista)
        })
    }) */
    

    useEffect(() => {
        getProds()
        .then((res) => {
            if (!id) {
                setProducts(res)
            }else{
                const productoSeleccionado = res.filter(element => element.category === id)
                setProducts(productoSeleccionado)
            }
        })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemList items={products} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;