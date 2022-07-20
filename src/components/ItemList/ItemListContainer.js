import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
//import { getProds } from '../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
/* import { dataBase } from "../firebase/firebase" */
/* import { getDocs, collection, query } from "../firebase/firebase" */

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if(id){
            const queryFilter = query(queryCollection, where('category', '==', id))
            getDocs(queryFilter)
                .then(res => setProducts(res.docs.map(product => ({ id:product.id, ...product.data() }))))
        }else{
            getDocs(queryCollection)
                .then(res => setProducts(res.docs.map(product => ({ id:product.id, ...product.data() }))))
        }
        setLoading(false)
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